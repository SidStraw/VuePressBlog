<template>
  <v-container grey lighten-5>
    <v-row justify="center">
      <template v-for="(n, i) in 6">
        <v-col cols="12" sm="6" lg="4" :key="n" v-if="i !== 10">
          <v-card class="mx-auto" max-width="374">
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>

            <v-card-text>
              <v-chip color="primary" label>：TAG</v-chip>
              <v-chip color="primary" label>：T</v-chip>
              <v-chip color="primary" label>：T</v-chip>
              <v-chip color="primary" label>：T</v-chip>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title> ：標題{{ n }} </v-card-title>

            <v-card-text class="pb-0">
              <div>
                ：文章簡述 Small plates, salads & sandwiches - an intimate
                setting with 12 indoor seats plus patio seating.
                {{
                  n === 2
                    ? `：文章簡述 Small plates, salads & sandwiches - an intimate setting
                with 12 indoor seats plus patio seating.：文章簡述 Small plates, salads & sandwiches - an intimate setting
                with 12 indoor seats plus patio seating.`
                    : ""
                }}
              </div>
            </v-card-text>

            <v-card-actions>
              <v-chip class="ma-2" color="primary" outlined>
                <v-icon left>mdi-calendar-range</v-icon>
                2020-03-01
              </v-chip>
              <v-spacer />
              <v-btn color="secondary" text @click.prevent>
                <v-icon class="mx-1">mdi-text-box-multiple-outline</v-icon>
                READ MORE
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>