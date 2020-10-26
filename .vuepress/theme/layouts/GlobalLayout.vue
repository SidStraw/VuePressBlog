<template>
  <v-app id="inspire">
    <!-- <Header /> -->
    <Navbar />
    <div id="global-content" :class="$vuetify.breakpoint.smAndUp ? 'sm' : 'xs'">
      <DefaultGlobalLayout />
    </div>
    <Footer />
  </v-app>
</template>

<script>
import DefaultGlobalLayout from '@app/components/GlobalLayout.vue' // in VuePress Core
import Navbar from '@theme/components/Navbar'
import Footer from '@theme/components/Footer'
// import Header from "@theme/components/Header.vue";
// import Footer from "@theme/components/Footer.vue";

export default {
  components: {
    DefaultGlobalLayout,
    Navbar,
    Footer,
    // Header,
  },

  data() {
    return {
      isMobileHeaderOpen: false,
    }
  },

  mounted() {
    this.$router.afterEach(() => {
      this.isMobileHeaderOpen = false
    })
  },
}
</script>

<style lang="stylus">
.w-100 {
  width: 100% !important;
}
.h-100 {
  height: 100% !important;
}
#global-content {
  margin-top: 110px;
  &.xs {
    margin-top: 50px;
  }
}
.header-anchor {
  display: none;
}
.post-content {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: 1.25;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }
  h2 {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  img {
    max-width: 100%;
  }
  hr {
    margin: 16px 0;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }
}
.go-to-top {
  display: block !important;
}
</style>
