<template>
  <div class="grey lighten-5">
    <HeroImage />
    <v-container grey lighten-5>
      <SlideGroups />
    </v-container>
  </div>
</template>

<script>
import HeroImage from '@theme/components/HeroImage'
import SlideGroups from '@theme/components/SlideGroups'
export default {
  components: {
    HeroImage,
    SlideGroups,
  },
  data() {
    return {}
  },
  mounted() {},
}
</script>
