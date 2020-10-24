<template>
  <div class="grey lighten-5">
    <HeroImage v-if="this.$route.path === '/'" />
    <Home v-if="$pagination" />
    <Content v-else />
  </div>
</template>

<script>
import HeroImage from '@theme/components/HeroImage'
import Home from '@theme/components/Home'
export default {
  components: {
    Home,
    HeroImage,
  },
  data() {
    return {}
  },
  mounted() {
    console.log(this.$currentTag)
  },
}
</script>
