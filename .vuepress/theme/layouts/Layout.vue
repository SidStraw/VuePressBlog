<template>
  <div class="grey lighten-5">
    <Home
      v-if="$pagination"
    />
    <Content v-else />
  </div>
</template>

<script>
import Home from "@theme/components/Home";
export default {
  components: {
    Home,
  },
};
</script>

<style src="prismjs/themes/prism-okaidia.css"></style>
