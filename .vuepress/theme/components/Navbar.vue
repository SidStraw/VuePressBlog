<template>
  <div>
    <!-- <v-card class="overflow-hidden"> -->
    <v-app-bar
      app
      elevate-on-scroll
      shrink-on-scroll
      scroll-target
      height="50"
      extension-height="30"
    >
      <v-app-bar-nav-icon @click="drawer = true" />
      <!-- <v-toolbar-title>Title</v-toolbar-title> -->
      <v-spacer></v-spacer>

      <div class="d-flex flex-column text-center">
        <h1>Sid</h1>
        <!-- <ul class="d-flex justify-space-around" style="list-style: none;">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul> -->
      </div>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs centered @change="log">
          <v-tab v-for="item in items" :key="item.title">{{item.title}}</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- </v-card> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", icon: "mdi-code-json" },
        { title: "About", icon: "mdi-magnify" },
        { title: "Test", icon: "mdi-code-json" },
      ],
    };
  },
  methods: {
    log(e) {
      console.log(e);
    },
  },
};
</script>