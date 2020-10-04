<template>
  <div class="grey lighten-5">
    <v-container grey lighten-5>
      <v-row no-gutters>
        <v-col class="post-content pa-10" cols="12" md="8" lg="9">
          <p
            v-if="$frontmatter.date"
            class="font-weight-black text--disabled ma-0"
          >
            {{ new Date($frontmatter.date.trim()).toDateString() }}
          </p>
          <h1 v-if="$frontmatter.title">{{ $frontmatter.title }}</h1>
          <v-chip
            v-for="(val, i) in $frontmatter.tags"
            :key="i"
            class="mr-1 mt-1"
            color="primary"
            label
          >
            {{ val }}
          </v-chip>
          <v-img v-if="$frontmatter.image" class="my-5" :src="$frontmatter.image"></v-img>
          <Content />
        </v-col>
        <v-col cols="12" md="4" lg="3">
          <v-container grey lighten-5 sticky>
            <About />
            <Toc />
            <FeaturedPosts />
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
};
</script>

<style lang="scss" scoped>
.sticky {
  position: relative;
  position: -webkit-sticky;
  position: sticky;
  top: -380px;
}
</style>

<style src="prismjs/themes/prism-okaidia.css"></style>

