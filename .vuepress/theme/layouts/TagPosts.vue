<template>
  <div class="grey lighten-5">
    <v-container grey lighten-5>
      <v-row no-gutters>
        <v-col cols="12" md="8" lg="9">
          <PostList />
          <div class="text-center">
            <Pagination class="my-0 mx-auto" />
          </div>
        </v-col>
        <v-col cols="12" md="4" lg="3">
          <v-container grey lighten-5 sticky h-100>
            <div class="sticky" :style="{ top: `${stickyTop}px` }">
              <v-row>
                <v-col class="px-7" cols="12" sm="6" md="12"><About /></v-col>
                <v-col class="px-7"><FeaturedPosts ref="featuredPosts" /></v-col>
              </v-row>
            </div>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PostList from '@theme/components/PostList'
import About from '@theme/components/About'
import FeaturedPosts from '@theme/components/FeaturedPosts'
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'

export default {
  components: {
    PostList,
    About,
    FeaturedPosts,
    Pagination,
  },
  data() {
    return {
      stickyTop: -244,
    }
  },
  mounted() {
    this.stickyTop = 0 - this.$refs.featuredPosts.$el.offsetTop + 78
  },
}
</script>

<style scoped>
.sticky {
  position: relative;
  position: -webkit-sticky;
  position: sticky;
}
</style>
