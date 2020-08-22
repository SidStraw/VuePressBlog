<template>
  <v-container fluid grey lighten-5>
    <v-row no-gutters>
      <v-col cols="12" md="9">
        <HomePostList />
      </v-col>
      <v-col cols="12" md="3">2</v-col>
    </v-row>
  </v-container>
</template>

<script>
import HomePostList from "./HomePostList";
export default {
  components: {
    HomePostList,
  },
};
</script>