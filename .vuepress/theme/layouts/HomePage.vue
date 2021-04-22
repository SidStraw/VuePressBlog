<template>
  <div class="grey lighten-5">
    <img class="w-100" :src="$themeConfig.heroImage" alt="" />
    <v-container grey lighten-5>
      <v-row class="px-sm-10">
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
      <Content />
      <SlideGroups title="患者評價" cycle />
      <v-row>
        <v-col>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14726.181764587784!2d120.47543976789125!3d22.670730535073965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e17824edca8d1%3A0xd66af5d0f318e650!2z5b-X56mO5Lit6Yar6Ki65omA!5e0!3m2!1szh-TW!2stw!4v1580820235819!5m2!1szh-TW!2stw"
            width="800"
            height="600"
            frameborder="0"
            style="border: 0; width: 100%"
            allowfullscreen
          ></iframe>
        </v-col>
      </v-row>
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
      const pages = this.$site.pages
      const posts = pages.reverse().filter(post => post.pid === 'post')
      return posts <= 5 ? posts : posts.slice(0, 6)
    },
  },
  mounted() {},
}
</script>

<style scoped>
.container {
  max-width: 1400px;
}
</style>
