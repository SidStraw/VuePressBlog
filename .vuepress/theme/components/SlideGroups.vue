<template>
  <v-sheet class="mx-auto py-5" elevation="1">
    <h2 id="testimonial" class="px-5 text-center primary--text">{{ title }}</h2>
    <v-slide-group v-model="model" class="pa-4" show-arrows center-active @change="disableCycle">
      <v-slide-item v-for="p in portfolio" :key="p.key" v-slot:default="{ active, toggle }">
        <v-card class="ma-4 text-center" height="400" width="323" :to="itemLink ? p.path : ''" @click="toggle">
          <div class="h-100 d-flex flex-column">
            <v-card-title class="d-flex justify-center">
              <v-avatar class="profile" color="grey" size="150">
                <v-img :src="p.frontmatter.image"></v-img>
              </v-avatar>
            </v-card-title>
            <v-card-subtitle class="mt-1">
              <span class="font-weight-light">{{ p.title }}</span>
            </v-card-subtitle>
            <v-rating :value="p.frontmatter.star" small readonly dense></v-rating>
            <v-card-text class="flex-grow-1">
              <span class="font-weight-light">{{ p.frontmatter.description }}</span>
            </v-card-text>
            <v-card-text>
              <span>{{ p.frontmatter.name }}</span>
            </v-card-text>
          </div>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '精選案例',
    },
    itemLink: {
      type: Boolean,
      default: false,
    },
    cycle: {
      type: Boolean,
      default: false,
    },
    interval: {
      type: Number,
      default: 3000,
    },
  },
  data: () => ({
    model: 0,
    intervalInstance: null,
  }),
  computed: {
    portfolio() {
      return this.$site.pages
        .filter(item => item.id === 'portfolio')
        .sort((a, b) => {
          const aDate = a.regularPath || ''
          const bDate = b.regularPath || ''
          if (aDate < bDate) return -1
          if (aDate > bDate) return 1
          return 0
        })
    },
  },
  mounted() {
    if (this.cycle) this.intervalInstance = setInterval(this.autoPlay, this.interval)
  },
  beforeDestroy() {
    this.disableCycle()
  },
  methods: {
    autoPlay() {
      if (typeof this.model === 'number') {
        this.model = this.model <= this.portfolio.length ? this.model + 1 : 0
      }
    },
    disableCycle() {
      clearInterval(this.intervalInstance)
    },
  },
}
</script>
