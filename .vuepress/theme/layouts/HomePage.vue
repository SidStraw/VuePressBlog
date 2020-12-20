<template>
  <div class="grey lighten-5">
    <img class="w-100" :src="$themeConfig.heroImage" alt="" />
    <v-container grey lighten-5>
      <v-row>
        <v-col cols="12" md="6">
          <!-- <img class="w-100" :src="$themeConfig.about.image" alt="" /> -->
          <div class="pa-10">
            <v-img contain :src="$themeConfig.about.image" max-height="500"></v-img>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="pa-10 text-center d-flex align-center">
          <div>
            <h1 class="py-7 text-h5">{{ $siteTitle }}</h1>
            <p class="font-weight-light">
              {{ $themeConfig.about.bio }}
            </p>
            <v-btn class="ma-2" tile outlined color=""> <v-icon left>mdi-human-greeting</v-icon> 聯絡諮詢 </v-btn>
          </div>
        </v-col>
      </v-row>
      <PostList :posts-data="posts" />
      <SlideGroups />
    </v-container>
  </div>
</template>

<script>
// import HeroImage from '@theme/components/HeroImage'
import PostList from '@theme/components/PostList'
import SlideGroups from '@theme/components/SlideGroups'

export default {
  components: {
    // HeroImage,
    PostList,
    SlideGroups,
  },
  data() {
    return {}
  },
  computed: {
    posts() {
      return this.$site.pages.slice(0, 6)
    },
  },
  mounted() {},
}
</script>
