<template>
  <div>
    <BaseListLayout v-if="$pagination" />
    <Content v-else />
    <div style="height: 200vh;"></div>
  </div>
</template>


<style src="prismjs/themes/prism-okaidia.css"></style>
