<template>
  <div id="wrap" class="d-flex justify-center align-center" :style="background">
    <!-- <v-parallax
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      ></v-parallax> -->
    <div class="d-none">
      <span>
        Photo by
        <a
          href="https://unsplash.com/@domenicoloia?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
        >
          Domenico Loia
        </a>
        on
        <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Unsplash
        </a>
      </span>
    </div>
    <img class="mask" src="@theme/img/mask-bottom.png" />
    <div class="text-center">
      <slot />
    </div>
  </div>
</template>

<script>
const heroImage = require('@theme/img/domenico-loia-EhTcC9sYXsw-unsplash.jpg')

export default {
  components: {},
  data() {
    return {
      heroImage,
      scrollOption: {
        duration: 100,
        offset: 0,
        easing: 'linear',
      },
    }
  },
  computed: {
    background() {
      const mask = {
        'background-image': `url(${this.heroImage}), linear-gradient(to top right, ${this.$vuetify.theme.themes.light.secondary}, ${this.$vuetify.theme.themes.light.primary})`,
      }
      const noMask = {
        'background-image': `url(${this.heroImage})`,
      }
      return this.$themeConfig.heroImageMask ? mask : noMask
    },
  },
  mounted() {
    if (this.$themeConfig.heroImage) this.heroImage = this.$themeConfig.heroImage
  },
}
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

@media (max-width: 600px) {
  #wrap {
    height: calc(100vh - 50px);
  }
}
</style>
