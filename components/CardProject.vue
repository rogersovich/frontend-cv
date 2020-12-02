<template>
  <v-row align="center" class="fill-height tw-bg-white ma-12 pa-8">
    <v-col cols="12" sm="6" md="5">
      <h1
        class="tw-uppercase tw-text-xl tw-font-montserrat tw-font-medium tw-text-center tw-text-accent tw-tracking-wider"
      >
        examples
      </h1>
      <h1
        class="tw-uppercase tw-text-5xl tw-font-open-sans tw-font-bold tw-text-main tw-text-center"
      >
        My Portofolios
      </h1>
      <div class="text-center">
        <v-btn
          depressed
          large
          dark
          elevation="2"
          width="180"
          rounded
          color="#005AFF"
          class="tw-text-sm tw-font-semibold tw-tracking-normal tw-normal-case tw-font-medium tw-font-open-sans focus:tw-outline-none"
          >See Project</v-btn
        >
      </div>
    </v-col>
    <v-col cols="12" sm="6" md="7">
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
                <div class="display-3">{{ slide }} Slide</div>
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
