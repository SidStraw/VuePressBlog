<template>
  <div class="grey lighten-5">
    <HeroImage />
    <Home v-if="$pagination" />
    <Content v-else />
  </div>
</template>

<script>
import HeroImage from "@theme/components/HeroImage";
import Home from "@theme/components/Home";
export default {
  components: {
    Home,
    HeroImage
  },
};
</script>
