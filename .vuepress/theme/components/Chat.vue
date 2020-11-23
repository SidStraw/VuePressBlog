<template>
  <div v-if="$themeConfig.contactUs && $themeConfig.contactUs.length > 0" id="chat-button" class="text-center">
    <v-menu top :offset-y="true">
      <template v-slot:activator="{ on, attrs }">
        <!-- <v-btn color="primary" dark v-bind="attrs" v-on="on"> Connect us </v-btn> -->
        <v-btn class="mx-2" fab dark small color="primary" v-bind="attrs" v-on="on">
          <v-icon dark>mdi-human-greeting</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in $themeConfig.contactUs"
          :key="index"
          :href="handleLinkType(item.icon.toLowerCase(), item.link)"
          :target="handleLinkTarget(item.icon)"
        >
          <v-list-item-icon>
            <v-icon>{{ handleIcon(item.icon) }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    linkType: {
      phone: 'tel:',
      email: 'mailto:',
    },
  }),
  methods: {
    handleLinkType(type, link) {
      return (this.linkType[type] || '') + link
    },
    handleLinkTarget(type) {
      return type.toLowerCase() === 'phone' ? '' : '_blank'
    },
    handleIcon(icon) {
      const iconType = icon.toLowerCase()
      return iconType === 'line' ? 'mdi-chat-processing-outline' : 'mdi-' + iconType
    },
  },
}
</script>

<style lang="stylus" scoped>
#chat-button {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  z-index: 10;
}
</style>
