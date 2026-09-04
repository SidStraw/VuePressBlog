<template>
  <div class="grey lighten-5">
    <v-container class="py-8 py-md-12">
      <v-row justify="center">
        <v-col cols="12" lg="10">
          <v-card class="hero-card pa-6 pa-md-10 mb-8 white--text" tile>
            <div class="text-overline mb-3">SidEffect Shop</div>
            <h1 :class="$vuetify.breakpoint.smAndUp ? 'text-h2' : 'text-h3'" class="mb-4">
              {{ pageTitle }}
            </h1>
            <p class="text-subtitle-1 mb-0 hero-copy">
              {{ pageDescription }}
            </p>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" lg="10">
          <v-alert
            v-if="products.length > 0"
            border="left"
            colored-border
            color="primary"
            elevation="0"
            class="mb-6"
          >
            所有品項目前皆採聯絡洽詢制，確認需求、檔期與交付範圍後再提供建議與報價。
          </v-alert>
          <div class="post-content shop-copy mb-2">
            <Content />
          </div>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col
          v-for="product in products"
          :key="product.title"
          cols="12"
          sm="6"
          lg="4"
          class="d-flex"
        >
          <v-card class="w-100 d-flex flex-column" max-width="420">
            <v-card-text class="pb-0">
              <div class="d-flex align-center mb-4">
                <v-avatar color="secondary" size="52" class="mr-4">
                  <v-icon dark>{{ product.icon || 'mdi-briefcase-variant-outline' }}</v-icon>
                </v-avatar>
                <div>
                  <div class="text-overline secondary--text mb-1">
                    {{ product.category || '服務項目' }}
                  </div>
                  <div class="text-h6">{{ product.title }}</div>
                </div>
              </div>

              <div v-if="product.tags && product.tags.length" class="mb-4">
                <v-chip
                  v-for="tag in product.tags"
                  :key="tag"
                  class="mr-2 mb-2"
                  color="primary"
                  outlined
                  small
                >
                  {{ tag }}
                </v-chip>
              </div>

              <div class="body-1">
                {{ product.description }}
              </div>
            </v-card-text>

            <v-card-actions class="pa-4 mt-auto">
              <v-btn
                color="primary"
                class="white--text"
                :href="product.resolvedContactLink"
                :target="product.contactTarget"
                :rel="product.contactRel"
              >
                <v-icon left>mdi-send</v-icon>
                {{ product.contactLabel || '聯絡我' }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    pageTitle() {
      return this.$page.frontmatter.title || this.$site.title
    },
    pageDescription() {
      return this.$page.frontmatter.description || ''
    },
    products() {
      const products = this.$page.frontmatter.products || []

      return products.map(product => {
        const resolvedContactLink = product.contactLink || this.buildEmailLink(product.title)
        return {
          ...product,
          resolvedContactLink,
          contactTarget: resolvedContactLink.startsWith('http') ? '_blank' : undefined,
          contactRel: resolvedContactLink.startsWith('http') ? 'noopener noreferrer' : undefined,
        }
      })
    },
    contactEmail() {
      return this.$page.frontmatter.contactEmail || ''
    },
  },
  methods: {
    buildEmailLink(productTitle) {
      if (!this.contactEmail) {
        return '/'
      }

      const subject = encodeURIComponent(`排氣管管 SidEffect｜${productTitle} 洽詢`)
      return `mailto:${this.contactEmail}?subject=${subject}`
    },
  },
}
</script>

<style lang="stylus" scoped>
.hero-card {
  background: linear-gradient(135deg, $secondaryColor, $accentColor);
}

.hero-copy {
  max-width: 38rem;
  line-height: 1.7;
}

.shop-copy {
  max-width: 48rem;
}
</style>
