<template>
  <v-card max-width="450" class="mx-auto">
    <v-list three-line>
      <template v-for="(item, index) in posts">
        <v-divider v-if="index !== 0" :key="index" :inset="true"></v-divider>

        <v-list-item :key="item.path" :to="item.path" color="primary">
          <v-list-item-content>
            <!-- <v-list-item-title v-html="item.title"></v-list-item-title> -->
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
      const posts = this.$site.pages.filter((post) => post.pid === "post");
      if(posts.length > 5) posts.length = 5;
      return posts;
    },
  },
};
</script>