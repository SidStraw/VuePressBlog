<template>
  <v-container grey lighten-5>
    <v-row no-gutters>
      <v-col cols="12" md="8" lg="9">
        <HomePostList />
        <div class="text-center">
          <Pagination class="my-0 mx-auto" />
        </div>
      </v-col>
      <v-col cols="12" md="4" lg="3">
        <v-container grey lighten-5 sticky h-100>
          <div class="sticky" :style="{ top: `${stickyTop}px` }">
            <About />
            <FeaturedPosts ref="featuredPosts" />
          </div>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HomePostList from "./HomePostList";
import About from "./About";
import FeaturedPosts from "./FeaturedPosts";
import { Pagination } from "@vuepress/plugin-blog/lib/client/components";

export default {
  components: {
    HomePostList,
    About,
    FeaturedPosts,
    Pagination,
  },
  data() {
    return {
      stickyTop: -244,
    };
  },
  mounted() {
    this.stickyTop = 0 - this.$refs.featuredPosts.$el.offsetTop + 78;
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