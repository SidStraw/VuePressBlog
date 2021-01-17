<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <h2 id="contact" class="pb-5 text-center primary--text">聯絡醫師</h2>
          <p class="text-center font-weight-light">
            有任何疑難雜症都歡迎與醫師聯絡諮詢，也別忘記追蹤賴彥雄醫師的粉絲專頁與文章，隨時補充健康新知。
          </p>
          <v-img :src="$themeConfig.schedule"></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" class="text-center">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fchinesemedgo%2F&tabs=messages&width=300&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="300"
            height="400"
            style="border: none; overflow: hidden"
            scrolling="no"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </v-col>
        <v-col cols="12" md="6" class="text-center">
          <a href="https://line.me/R/ti/p/@col0597o" target="blank">
            <img :src="$themeConfig.QRCode" style="max-width: 300px" alt="加入好友" />
          </a>
          <h3>諮詢電話：0919-696015</h3>
          <p>900屏東縣屏東市民族路134號</p>
        </v-col>
      </v-row>
    </v-container>
    <v-footer dark padless>
      <v-card flat tile color="secondary" class="white--text text-center w-100">
        <v-card-text>
          <v-btn
            v-for="item in $themeConfig.socialMedia"
            :key="item.link"
            :href="item.link"
            target="_blank"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">{{ 'mdi-' + item.type.toLowerCase() }}</v-icon>
          </v-btn>
        </v-card-text>

        <!-- <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text> -->

        <v-divider></v-divider>

        <v-card-text class="white--text">
          <template v-if="$themeConfig.copyright">
            {{ $themeConfig.copyright }}
          </template>
          <template v-else>
            Copyright © {{ new Date().getFullYear() }} - {{ $siteTitle }} All rights reserved.
          </template>

          This theme of the site powered by
          <a href="https://sid.tw" target="_blank" class="white--text text-decoration-none"> Sid.tw </a>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
  }),
}
</script>
