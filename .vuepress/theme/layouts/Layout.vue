<template>
  <div>
    <Home
      id="home-content"
      :class="$vuetify.breakpoint.smAndUp ? 'sm' : 'xs'"
      v-if="$pagination"
    />
    <Content v-else />
    <div style="height: 200vh;"></div>
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
<style lang="scss" scoped>
#home-content {
  margin-top: 110px;
  &.xs {
    margin-top: 50px;
  }
}
</style>