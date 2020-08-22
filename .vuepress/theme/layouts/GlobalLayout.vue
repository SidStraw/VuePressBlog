<template>
  <v-app id="inspire">
    <!-- <Header /> -->
    <Navbar />
    <DefaultGlobalLayout />
    <!-- <Footer /> -->
  </v-app>
</template>

<script>
import DefaultGlobalLayout from "@app/components/GlobalLayout.vue"; // in VuePress Core
import Navbar from '@theme/components/Navbar'
// import Header from "@theme/components/Header.vue";
// import Footer from "@theme/components/Footer.vue";

export default {
  components: {
    DefaultGlobalLayout,
    Navbar
    // Header,
    // Footer
  },

  data() {
    return {
      isMobileHeaderOpen: false,
    };
  },

  mounted() {
    this.$router.afterEach(() => {
      this.isMobileHeaderOpen = false;
    });
  },
};
</script>

<style lang="scss">
.w-100 {
  width: 100% !important;
}
.h-100 {
  height: 100% !important;
}
</style>