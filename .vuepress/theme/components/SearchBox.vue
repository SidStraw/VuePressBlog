<template>
  <v-dialog
    v-model="show"
    max-width="600"
    :fullscreen="$vuetify.breakpoint.xsOnly"
  >
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="show = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>站內搜尋</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card-title class="headline"></v-card-title>

      <v-card-text>
        <v-autocomplete
          clearable
          dense
          filled
          label="請輸入關鍵字"
          v-model="query"
          :items="items"
          :search-input.sync="searchText"
        ></v-autocomplete>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import Flexsearch from "flexsearch";

export default {
  name: "SearchBox",
  props: {
    showPopup: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      searchText: "",
      query: "",
      index: null,
      zhIndex: null,
    };
  },
  computed: {
    show: {
      get: function () {
        return this.showPopup;
      },
      set: function (value) {
        if (value) return null;
        this.$emit("closePopup");
      },
    },
    items() {
      if (!this.searchText) return [];
      return this.querySearch(this.searchText).map((item, index) => ({
        text: item.value,
        value: index,
        link: item.link,
      }));
    },
  },
  mounted() {
    this.index = new Flexsearch({
      tokenize: "forward",
      doc: {
        id: "key",
        field: ["title", "content"],
      },
    });
    this.zhIndex = new Flexsearch({
      encode: false,
      tokenize: function (str) {
        return str.replace(/[\x00-\x7F]/g, "").split("");
      },
      doc: {
        id: "key",
        field: ["title", "content"],
      },
    });
    const { pages } = this.$site;
    this.index.add(pages);
    this.zhIndex.add(pages);
  },
  watch: {
    query(newValue) {
      if (typeof newValue !== "number") return null;
      this.show = false;
      this.$router.push(this.items[newValue].link);
    },
  },
  methods: {
    querySearch(queryString) {
      const { pages, themeConfig } = this.$site;
      const query = queryString.trim().toLowerCase();
      const max = themeConfig.searchMaxSuggestions || 20;
      let queryResponse = [];
      if (this.index === null || query.length < 1) {
        return [];
      }
      this.index.search(
        query,
        {
          limit: max,
          threshold: 4,
          encode: "extra",
        },
        (result) => {
          this.zhIndex.search(
            query,
            {
              limit: max,
              threshold: 4,
              encode: "extra",
            },
            (zhResult) => {
              if (result.length && zhResult.length) {
                result = result.filter((item) =>
                  zhResult.some((zhItem) => zhItem.key === item.key)
                );
              } else {
                result = [...result, ...zhResult];
              }
              if (result.length) {
                const resolvedResult = result.map((page) => {
                  return {
                    link: page.path,
                    value: this.getQuerySnippet(page),
                  };
                });
                queryResponse = resolvedResult;
              } else {
                queryResponse = [];
              }
            }
          );
        }
      );
      return queryResponse;
    },
    getQuerySnippet(page) {
      const searchText = this.searchText || "";
      const queryPosition = page.content
        .toLowerCase()
        .indexOf(searchText.toLowerCase());
      const startIndex = queryPosition;
      const endIndex = queryPosition + 20;
      const querySnippet = page.content
        .slice(startIndex, endIndex)
        .replace(new RegExp(`(${searchText})`, "i"), `$1`);
      return `${page.title} .. ${querySnippet} ..`
        .replace(/\|/g, " ")
        .replace(/:::/g, " ");
    },
  },
};
</script>