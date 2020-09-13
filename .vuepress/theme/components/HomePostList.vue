<template>
  <v-container grey lighten-5>
    <v-row justify="center">
      <template v-for="(post, i) in posts">
        <v-col cols="12" sm="6" lg="4" :key="post.path" v-if="i !== 10">
          <v-card class="mx-auto" max-width="374">
            <v-img height="250" :src="post.frontmatter.image"></v-img>

            <v-card-text>
              <v-chip
                v-for="(val, i) in post.frontmatter.tags"
                :key="i"
                class="mr-1 mt-1"
                color="primary"
                label
              >
                {{ val }}
              </v-chip>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title> {{ post.title }} </v-card-title>

            <v-card-text class="pb-0">
              <div>
                {{ post.frontmatter.description }}
              </div>
            </v-card-text>

            <v-card-actions>
              <v-chip class="ma-2" color="primary" outlined>
                <!-- <v-icon left>mdi-calendar-range</v-icon> -->
                2020-03-01
              </v-chip>
              <v-spacer />
              <v-btn color="secondary" text @click.prevent>
                <v-icon class="mx-1">mdi-text-box-multiple-outline</v-icon>
                READ MORE
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </template>
    </v-row>
    <!-- <Pagination /> -->
  </v-container>
</template>

<script>
import { Pagination } from "@vuepress/plugin-blog/lib/client/components";
export default {
  components: {
    Pagination,
  },
  data() {
    return {
      isActive: false,
      page: 1,
    };
  },
  computed: {
    posts() {
      // const posts = this.$site.pages.filter((post) => post.pid === "post");
      const posts = this.$pagination.pages;
      // posts.length = 1;
      return posts;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>