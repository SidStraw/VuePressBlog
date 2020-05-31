<template>
  <div class="search-wrapper u-px3">
    <el-autocomplete
      ref="searchInput"
      slot="reference"
      v-model="query"
      size="small"
      :fetch-suggestions="querySearchAsync"
      placeholder="Search"
      @select="handleSelect"
      popper-class="components-search"
      :trigger-on-focus="false"
      placement="bottom-end"
      :debounce="200"
    >
      <template slot-scope="props">
        <li role="option" v-html="props.item.value"></li>
      </template>
    </el-autocomplete>
  </div>
</template>

<script>
import Flexsearch from "flexsearch";

export default {
  data() {
    return {
      index: null,
      zhIndex: null,
      query: ""
    };
  },
  mounted() {
    this.index = new Flexsearch({
      tokenize: "forward",
      doc: {
        id: "key",
        field: ["title", "content"]
      }
    });
    this.zhIndex = new Flexsearch({
      encode: false,
      tokenize: function(str) {
        return str.replace(/[\x00-\x7F]/g, "").split("");
      },
      doc: {
        id: "key",
        field: ["title", "content"]
      }
    });
    const { pages } = this.$site;
    this.index.add(pages);
    this.zhIndex.add(pages);
  },
  methods: {
    querySearchAsync(queryString, cb) {
      const { pages, themeConfig } = this.$site;
      const query = queryString.trim().toLowerCase();
      const max = themeConfig.searchMaxSuggestions || 20;
      if (this.index === null || query.length < 1) {
        return cb([]);
      }
      this.index.search(
        query,
        {
          limit: max,
          threshold: 4,
          encode: "extra"
        },
        result => {
          this.zhIndex.search(
            query,
            {
              limit: max,
              threshold: 4,
              encode: "extra"
            },
            zhResult => {
              if (result.length && zhResult.length) {
                result = result.filter(item => zhResult.some( zhItem => zhItem.key === item.key))
              } else {
                result = [...result, ...zhResult]
              }
              if (result.length) {
                const resolvedResult = result.map(page => {
                  return {
                    link: page.path,
                    value: this.getQuerySnippet(page)
                  };
                });
                return cb(resolvedResult);
              } else {
                cb([{ value: `No results! Try something else.`, link: "" }]);
              }
            }
          );
        }
      );
    },
    getQuerySnippet(page) {
      const queryPosition = page.content.toLowerCase().indexOf(this.query.toLowerCase());
      const startIndex = queryPosition;
      const endIndex = queryPosition + 20;
      const querySnippet = page.content
        .slice(startIndex, endIndex)
        .replace(
          new RegExp(`(${this.query})`, 'i'),
          `<strong class="text--primary">$1</strong>`
        )
      return `<strong class="text--primary">${page.title}</strong> > .. ${querySnippet} ..`
        .replace(/\|/g, " ")
        .replace(/:::/g, " ");
    },
    handleSelect(item) {
      if (item.link) {
        this.$router.push(item.link);
      }
      this.query = "";
    }
  }
};
</script>

<style lang="stylus">
.search-wrapper {
  .el-input__inner {
    height: 2rem !important;
  }

  .search-wrapper input {
    width: 160px;
    transition: all 0.5s ease;
  }

  .el-autocomplete-suggestion__wrap, .el-autocomplete-suggestion {
    width: 100%;
  }

  .el-input__suffix {
    line-height: 2rem;
  }
}

.components-search {
  width: 30rem !important;
}
</style>