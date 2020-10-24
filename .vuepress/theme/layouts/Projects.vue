<template>
  <div></div>
</template>

<script>
export default {
  components: {},
  computed: {
    projects() {
      return this.$pagination._matchedPages
    },
  },
}
</script>

<style lang="stylus" scoped></style>
