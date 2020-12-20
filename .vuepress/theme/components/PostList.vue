<template>
  <v-container grey lighten-5>
    <v-text-field
      v-if="$currentTag"
      color="primary"
      label="分類標籤"
      prepend-inner-icon="mdi-tag"
      readonly
      :value="$currentTag.key"
    ></v-text-field>
    <v-row id="posts" justify="center">
      <template v-for="post in posts">
        <v-col :key="post.path" cols="12" sm="6" lg="4">
          <v-card class="mx-auto" max-width="374">
            <router-link :to="post.path">
              <v-img height="250" :src="post.frontmatter.image" :to="post.path"></v-img>
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
  </v-container>
</template>

<script>
export default {
  components: {},
  props: {
    postsData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isActive: false,
      page: 1,
    }
  },
  computed: {
    posts() {
      const posts = this.postsData
      const sortPosts = posts.sort((a, b) => {
        const aDate = a.frontmatter.date || ''
        const bDate = b.frontmatter.date || ''
        if (aDate < bDate) return 1
        if (aDate > bDate) return -1
        return 0
      })
      return sortPosts
    },
  },
  mounted() {},
  methods: {},
}
</script>

<style scoped>
.color-inherit {
  color: inherit;
}
</style>
