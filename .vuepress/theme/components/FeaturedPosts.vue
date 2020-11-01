<template>
  <v-card max-width="450" class="mx-auto">
    <v-list three-line>
      <template v-for="(item, index) in posts">
        <v-divider v-if="index !== 0" :key="index" :inset="true"></v-divider>

        <v-list-item :key="item.path" :to="item.path" color="primary">
          <v-list-item-content>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <v-list-item-subtitle v-html="item.title"></v-list-item-subtitle>
          </v-list-item-content>

          <v-badge :content="index + 1" color="secondary" bottom overlap>
            <v-avatar>
              <v-img :src="item.frontmatter.image"></v-img>
            </v-avatar>
          </v-badge>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  computed: {
    posts() {
      const posts = this.$site.pages
        .filter(post => post.pid === 'post')
        .sort((a, b) => {
          const aDate = a.frontmatter.date || ''
          const bDate = b.frontmatter.date || ''
          if (aDate < bDate) return 1
          if (aDate > bDate) return -1
          return 0
        })
      const featuredPost = posts.filter(post => post.frontmatter.featured)
      if (featuredPost.length > 5) featuredPost.length = 5
      if (posts.length > 5) posts.length = 5
      return featuredPost.length ? featuredPost : posts
    },
  },
}
</script>
