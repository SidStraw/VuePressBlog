<template>
  <v-sheet class="mx-auto" elevation="8">
    <h2 class="pt-5 px-5 text-center primary--text">精選案例</h2>
    <v-slide-group v-model="model" class="pa-4" show-arrows center-active>
      <v-slide-item v-for="p in portfolio" :key="p.key">
        <v-card class="ma-4" height="200" width="300" :to="p.path">
          <v-img
            :src="p.frontmatter.image"
            class="white--text align-end fill-height"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="p.frontmatter.title"></v-card-title>
          </v-img>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    model: null,
  }),
  computed: {
    portfolio() {
      return this.$site.pages
        .filter(item => item.id === 'portfolio')
        .sort((a, b) => {
          const aDate = a.frontmatter.date || ''
          const bDate = b.frontmatter.date || ''
          if (aDate < bDate) return 1
          if (aDate > bDate) return -1
          return 0
        })
    },
  },
}
</script>
