<template>
  <v-container grey lighten-5>
    <v-row id="posts" justify="center">
      <template v-for="(post, i) in posts">
        <v-col cols="12" sm="6" lg="4" :key="post.path">
          <v-card class="mx-auto" max-width="374">
            <router-link :to="post.path">
              <v-img
                height="250"
                :src="post.frontmatter.image"
                :to="post.path"
              ></v-img>
            </router-link>
            <v-card-text v-if="post.frontmatter.tags">
              <v-chip
                v-for="(val, i) in post.frontmatter.tags"
                :key="i"
                :to="`/tag/${val}`"
                class="mr-1 mt-1"
                color="primary"
                label
              >
                {{ val }}
              </v-chip>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>
            <v-card-title>
              <router-link :to="post.path" class="text-decoration-none color-inherit">
                {{ post.title }}
              </router-link>
            </v-card-title>

            <v-card-text class="pb-0">
              <div>
                {{ post.frontmatter.description || post.summary }}
              </div>
            </v-card-text>

            <v-card-actions>
              <v-chip v-if="post.frontmatter.date" class="ma-2" color="primary" outlined>
                <!-- <v-icon left>mdi-calendar-range</v-icon> -->
                {{ post.frontmatter.date }}
              </v-chip>
              <v-spacer />
              <v-btn color="secondary" text :to="post.path">
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
      const posts = this.$pagination.pages;
      return posts;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.color-inherit {
  color: inherit;
}
</style>