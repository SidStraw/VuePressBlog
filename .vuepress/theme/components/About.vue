<template>
  <v-card class="my-3 mx-auto" max-width="434" tile>
    <v-img
      height="100%"
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
      class="bg-img"
      :gradient="`to top right, ${$vuetify.theme.themes.light.secondary}, ${$vuetify.theme.themes.light.primary}`"
    >
      <div class="d-flex flex-column justify-center align-center my-5">
        <v-avatar class="profile" color="grey" size="164" tile>
          <v-img
            src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
          ></v-img>
        </v-avatar>
        <v-list-item color="rgba(0, 0, 0, .4)" dark>
          <v-list-item-content class="text-center">
            <v-list-item-title class="title">Marcus Obrien</v-list-item-title>
            <v-list-item-subtitle>：Network Engineer</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <p class="text-center white--text lighten-5">
          ：Network Engineer：Network Engineer：Network Engineer：Network
          Engineer：Network Engineer：Network Engineer：Network
          Engineer：Network Engineer：Network Engineer
        </p>
      </div>
    </v-img>
  </v-card>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
.bg-img {
}
</style>