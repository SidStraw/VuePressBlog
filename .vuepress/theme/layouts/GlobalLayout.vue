<template>
  <v-app id="inspire">
    <!-- <Header /> -->
    <DefaultGlobalLayout />
    <!-- <Footer /> -->
  </v-app>
</template>

<script>
import DefaultGlobalLayout from "@app/components/GlobalLayout.vue"; // in VuePress Core
// import Header from "@theme/components/Header.vue";
// import Footer from "@theme/components/Footer.vue";

export default {
  components: {
    DefaultGlobalLayout,
    // Header,
    // Footer
  },

  data () {
    return {
      isMobileHeaderOpen: false
    };
  },

  mounted () {
    this.$router.afterEach(() => {
      this.isMobileHeaderOpen = false;
    });
  }
};
</script>
