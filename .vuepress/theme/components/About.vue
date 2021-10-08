<template>
  <v-card class="mb-3 mx-auto" max-width="450" tile>
    <v-img
      height="100%"
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
      class="bg-img"
      :gradient="`to top right, ${$vuetify.theme.themes.light.secondary}, ${$vuetify.theme.themes.light.primary}`"
    >
      <div class="d-flex flex-column justify-center align-center my-5">
        <v-avatar class="profile" color="grey" size="164" tile>
          <v-img :src="$site.themeConfig.about.image"></v-img>
        </v-avatar>
        <v-list-item color="rgba(0, 0, 0, .4)" dark>
          <v-list-item-content class="text-center">
            <v-list-item-title class="title">{{ $site.themeConfig.about.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ $site.themeConfig.about.position }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <!-- eslint-disable-next-line vue/no-v-html -->
        <p class="text-center white--text lighten-5 px-10" v-html="$site.themeConfig.about.bio" />
      </div>
      <v-divider></v-divider>
      <!-- <v-card-text> -->
      <div class="pa-3 d-flex justify-center flex-wrap">
        <v-btn
          v-for="item in $themeConfig.socialMedia"
          :key="item.link"
          :href="item.link"
          target="_blank"
          class="mx-1 white--text"
          icon
        >
          <v-icon size="24px">{{ 'mdi-' + item.type.toLowerCase() }}</v-icon>
        </v-btn>
      </div>
      <!-- </v-card-text> -->
    </v-img>
  </v-card>
</template>

<script>
export default {
  components: {},
}
</script>
