<template>
  <div class="grey lighten-5">
    <!-- <HeroImage>
      <h1 v-if="$themeConfig.slogan" class="text-h3 white--text text-center">{{ $themeConfig.slogan }}</h1>
      <h2 class="text-subtitle-1 white--text text-center my-7">
        {{ $description }}
      </h2>
      <v-btn large color="primary" @click="() => $vuetify.goTo('#posts', scrollOption)"> Latest Posts </v-btn>
    </HeroImage> -->
    <img class="w-100" :src="$themeConfig.heroImage" alt="" />
    <Home v-if="$pagination" />
    <Content v-else />
  </div>
</template>

<script>
// import HeroImage from '@theme/components/HeroImage'
import Home from '@theme/components/Home'
export default {
  components: {
    Home,
    // HeroImage,
  },
  data() {
    return {}
  },
  mounted() {},
}
</script>
