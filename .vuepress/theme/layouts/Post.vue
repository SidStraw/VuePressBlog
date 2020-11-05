<template>
  <div class="grey lighten-5">
    <v-container grey lighten-5>
      <v-row no-gutters>
        <v-col class="post-content px-10" cols="12" md="8" lg="9">
          <h1 v-if="$frontmatter.h1">{{ $frontmatter.h1 }}</h1>
          <p v-if="$frontmatter.date" class="font-weight-black text--disabled ma-0">
            {{ new Date($frontmatter.date.trim()).toDateString() }}
          </p>

          <v-chip
            v-for="(val, i) in $frontmatter.tags"
            :key="i"
            :to="`/tag/${val}`"
            class="mr-1 mt-1"
            color="primary"
            label
          >
            {{ val }}
          </v-chip>
          <v-img v-if="$frontmatter.image" class="my-5" :src="$frontmatter.image"></v-img>
          <Content />
        </v-col>
        <v-col cols="12" md="4" lg="3">
          <v-container grey lighten-5 h-100>
            <div class="sticky" :style="{ top: `${stickyTop}px` }">
              <About ref="about" />
              <TOC id="toc" />
              <FeaturedPosts />
            </div>
          </v-container>
        </v-col>
        <v-col class="pa-sm-10 pa-1">
          <v-divider class="my-5"></v-divider>
          <ClientOnly v-if="$themeConfig.disqus">
            <Disqus :shortname="$themeConfig.disqus" class="disqus-comments" language="zh_TW" />
          </ClientOnly>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import About from '@theme/components/About'
import FeaturedPosts from '@theme/components/FeaturedPosts'

export default {
  components: {
    About,
    FeaturedPosts,
    // PostInfo,
    // FeaturedPosts,
  },
  data() {
    return {
      stickyTop: -244,
    }
  },
  mounted() {
    this.stickyTop = 0 - this.$refs.about.$el.clientHeight - 5 + 78
    window.about = this.$refs.about.$el
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
