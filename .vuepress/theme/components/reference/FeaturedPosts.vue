<template>
  <div class="container featured-posts" v-if="posts.length">
    <!-- <el-carousel
      :interval="4000"
      type="card"
      height="300px"
    >
      <el-carousel-item
        v-for="post in posts"
        :key="post.key"
        class="bg-light bg-cover border-10"
        :style="{'background-image': $withBase(post.frontmatter.image) ? `url(${$withBase(post.frontmatter.image)})`: 'none', 'background-blend-mode': 'multiply', 'background-size': 'cover'}"
      >
        <div class="carousel-card-content d-flex justify-content-center align-items-center flex-column h-100">
          <h4 class="story-title text-center h4 mb-3">{{ post.title }}</h4>
          <router-link
            :to="post.path"
            class="el-button el-button--primary"
          >Read this Post <i class="el-icon-arrow-right"></i></router-link>
        </div>
      </el-carousel-item>
    </el-carousel> -->
    <v-carousel height="400" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item
        v-for="post in posts"
        :key="post.key"
        :src="post.frontmatter.image"
      >
        <!-- <v-sheet height="100%"> -->
        <v-container class="fill-height">
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h1">{{ post.title }}</div>
          </v-row>
        </v-container>
        <!-- </v-sheet> -->
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "featured-posts",
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"]
    };
  },
  computed: {
    posts() {
      return this.$site.pages.filter(page => page.frontmatter.featured == true);
    }
  }
};
</script>
