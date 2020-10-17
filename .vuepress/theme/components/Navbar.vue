<template>
  <div>
    <v-app-bar
      app
      elevate-on-scroll
      shrink-on-scroll
      scroll-target
      dense
      height="50"
      extension-height="30"
    >
      <div class="d-flex justify-space-around align-center w-100 h-100">
        <v-app-bar-nav-icon @click="drawer = true" />
        <v-spacer></v-spacer>

        <div class="d-flex flex-column text-center">
          <router-link to="/" class="text-decoration-none">
            <h1>{{ $site.title }}</h1>
          </router-link>
        </div>

        <v-spacer></v-spacer>

        <v-btn icon @click="toggle">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </div>

      <template v-slot:extension v-if="$vuetify.breakpoint.smAndUp">
        <v-tabs optional centered>
          <v-tab v-for="item in $tag.list" :key="item.name" :to="item.path">
            {{ item.name }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="$themeConfig.logo"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ $siteTitle }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          link
          v-for="item in $tag.list"
          :key="item.title"
          :to="item.path"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action-text>
            <v-badge :content="item.pages.length" color="grey" bottom overlap />
          </v-list-item-action-text>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <SearchBox :key="showPopup" :showPopup="showPopup" @closePopup="toggle" />
  </div>
</template>

<script>
import SearchBox from "./SearchBox.vue";
export default {
  name: "NavBar",
  components: {
    SearchBox,
  },
  data() {
    return {
      drawer: false,
      showPopup: false,
    };
  },
  mounted() {},
  methods: {
    toggle() {
      this.showPopup = !this.showPopup;
    },
  },
};
</script>
