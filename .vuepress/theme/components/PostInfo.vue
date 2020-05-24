<template>
  <div class="ui-post-info d-flex">
    <div class="post-info-item">
      <CalendarIcon />
      {{ new Date(frontmatter.date.trim()).toDateString() }}
    </div>
    <div
      class="post-info-item">
      <ClockIcon />
      {{ frontmatter.tags.join('、') }}
    </div>
  </div>
</template>

<script>
import { NavigationIcon, ClockIcon, CalendarIcon } from "vue-feather-icons";

export default {
  components: { NavigationIcon, ClockIcon, CalendarIcon },
  props: ["frontmatter"]
};
</script>

<style lang="stylus">
div.post-info-item {
  margin-right: 1rem;
  font-size: .8rem;

  svg {
    width: 17px;
    height: 17px;
  }
}
</style>