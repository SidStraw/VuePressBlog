<template>
  <div class="grey lighten-5">
    <v-container grey lighten-5>
      <v-row no-gutters>
        <v-col class="post-content px-10" cols="12" md="8" lg="9">
          <h1 v-if="$frontmatter.title">{{ $frontmatter.title }}</h1>
          <p
            v-if="$frontmatter.date"
            class="font-weight-black text--disabled ma-0"
          >
            {{ new Date($frontmatter.date.trim()).toDateString() }}
          </p>

          <v-chip
            v-for="(val, i) in $frontmatter.tags"
            :key="i"
            :to="`/tag/${val}`"
            class="mr-1 mt-1"
            color="primary"
            label
          >
            {{ val }}
          </v-chip>
          <v-img
            v-if="$frontmatter.image"
            class="my-5"
            :src="$frontmatter.image"
          ></v-img>
          <Content />
        </v-col>
        <v-col cols="12" md="4" lg="3">
          <v-container grey lighten-5 h-100>
            <div class="sticky" :style="{ top: `${stickyTop}px` }">
              <About />
              <Toc ref="toc" />
              <FeaturedPosts />
            </div>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <!-- <ClientOnly v-if="$themeConfig.disqus">
        <el-card class="comments-area my-4">
          <div
            slot="header"
            class="clearfix"
          >
            <h5 class="m-0">Leave a comment!</h5>
          </div>
          <Disqus
            :shortname="$themeConfig.disqus"
            class="disqus-comments"
          />
        </el-card>
      </ClientOnly> -->
</template>

<script>
import About from "@theme/components/About";
import FeaturedPosts from "@theme/components/FeaturedPosts";
import Toc from "@theme/components/Toc.vue";
// import PostInfo from "@theme/components/PostInfo.vue";
// import FeaturedPosts from "@theme/components/FeaturedPosts.vue";

export default {
  components: {
    About,
    FeaturedPosts,
    Toc,
    // PostInfo,
    // FeaturedPosts,
  },
  data() {
    return {
      stickyTop: -244,
    };
  },
  mounted() {
    this.stickyTop = 0 - this.$refs.toc.$el.offsetTop + 78;
  },
};
</script>

<style lang="scss" scoped>
.sticky {
  position: relative;
  position: -webkit-sticky;
  position: sticky;
}
</style>

