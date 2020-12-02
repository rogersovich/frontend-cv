<template>
  <v-row align="center" class="fill-height tw-h-screen ma-12">
    <v-col cols="12" sm="6" md="6">
      <v-img
        contain
        height="350"
        width="auto"
        src="https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/botw3x-removebg-preview_RuwFlV6q-ii.png"
      ></v-img>
    </v-col>
    <v-col cols="12" sm="6" md="6">
      <h1
        class="tw-uppercase tw-text-xl tw-font-montserrat tw-font-medium tw-text-center tw-text-accent tw-tracking-wider"
      >
        EXPERTISE
      </h1>
      <h1
        class="tw-uppercase tw-text-5xl tw-font-open-sans tw-font-bold tw-text-main tw-text-center"
      >
        SPECIAL SKILL
      </h1>
      <v-card flat class="mx-auto mt-6">
        <v-carousel
          :continuous="false"
          :cycle="cycle"
          :show-arrows="false"
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          height="300"
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <v-list two-line class="tw-bg-transparent px-8">
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/john.png"
                      ></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="tw-text-2xl"
                        >Laravel</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      Laravel adalah kerangka kerja aplikasi web berbasis PHP
                      yang sumber terbuka, menggunakan konsep
                      Model-View-Controller. Laravel berada dibawah lisensi MIT,
                      dengan menggunakan GitHub sebagai tempat berbagi kode.
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        'green',
        'secondary',
        'yellow darken-4',
        'red lighten-2',
        'orange darken-1',
      ],
      cycle: false,
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
    }
  },
}
</script>

<style></style>
