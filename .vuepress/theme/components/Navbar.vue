<template>
  <div id="nav">
    <v-app-bar app elevate-on-scroll shrink-on-scroll scroll-target dense height="50" extension-height="30">
      <div class="d-flex justify-space-around align-center w-100 h-100">
        <v-app-bar-nav-icon @click="drawer = true" />
        <v-spacer></v-spacer>

        <div class="d-flex flex-column text-center">
          <router-link to="/" class="text-decoration-none">
            <div class="text-h4">{{ $site.title }}</div>
          </router-link>
        </div>

        <v-spacer></v-spacer>

        <v-btn icon @click="toggle">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </div>

      <template v-if="$vuetify.breakpoint.smAndUp" v-slot:extension>
        <!-- 有設置 nav -->
        <v-tabs v-if="$themeConfig.nav" optional centered>
          <v-tab v-for="item in $themeConfig.nav" :key="item.text" :to="item.link">
            <v-icon v-if="item.icon" class="mr-2">{{ item.icon }}</v-icon>
            {{ item.text }}
          </v-tab>
        </v-tabs>
        <!-- 無nav使用tag -->
        <v-tabs v-else optional centered>
          <v-tab v-for="item in $tag.list" :key="item.text" :to="item.link">
            <v-icon class="mr-2">mdi-tag</v-icon>
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

      <!-- 使用者自訂 Nav -->
      <v-list v-if="$themeConfig.nav" dense>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>Navigation</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-for="item in $themeConfig.nav" :key="item.text" link :to="item.link" color="primary">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <!-- 文章 Tags -->
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>Tags</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-for="item in $tag.list" :key="item.title" link :to="item.path" color="primary">
          <v-list-item-icon>
            <v-icon>mdi-tag</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action-text>
            <v-badge :content="item.pages.length" color="secondary" bottom overlap />
          </v-list-item-action-text>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <SearchBox :key="showPopup" :show-popup="showPopup" @closePopup="toggle" />
  </div>
</template>

<script>
import SearchBox from './SearchBox.vue'
export default {
  name: 'Navbar',
  components: {
    SearchBox,
  },
  data() {
    return {
      drawer: false,
      showPopup: false,
    }
  },
  mounted() {},
  methods: {
    toggle() {
      this.showPopup = !this.showPopup
    },
  },
}
</script>

<style lang="stylus" scoped>
#nav {
  .v-tab {
    color: $secondaryColor;

    i {
      color: $secondaryColor;
    }

    &.v-tab--active {
      color: inherit;

      i {
        color: inherit;
      }
    }
  }

  .v-list-item {
    color: $secondaryColor;

    i {
      color: $secondaryColor;
    }

    &.v-list-item--active {
      color: inherit;

      i {
        color: inherit;
      }
    }
  }
}
</style>
