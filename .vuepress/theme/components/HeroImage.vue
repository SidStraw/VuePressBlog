<template>
  <div
    id="wrap"
    class="d-flex justify-center align-center"
    :style="{
      'background-image': `url(${heroImage}), linear-gradient(to top right, ${$vuetify.theme.themes.light.secondary}, ${$vuetify.theme.themes.light.primary})`,
    }"
  >
    <!-- <v-parallax
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-parallax> -->
    <img class="mask" src="@theme/img/mask-bottom.png" />
    <div>
      <h1 class="text-h3 white--text text-center mb-5">{{ $siteTitle }}</h1>
      <h2 class="text-subtitle-1 white--text text-center">
        {{ $description }}
      </h2>
    </div>
  </div>
</template>

<script>
const heroImage = require("@theme/img/domenico-loia-EhTcC9sYXsw-unsplash.jpg");

export default {
  components: {},
  data() {
    return {
      heroImage,
    };
  },
  computed: {},
  mounted() {
    if(this.$themeConfig.heroImage) this.heroImage = this.$themeConfig.heroImage
  },
};
</script>

<style lang="stylus" scoped>
#wrap {
  position: relative;
  height: calc(100vh - 110px);
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;

  .mask {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
}
</style>