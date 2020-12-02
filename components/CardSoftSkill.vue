<template>
  <v-row align="center" class="fill-height tw-bg-white ma-12 pa-8">
    <v-col cols="12" sm="12" md="12">
      <h1
        class="tw-uppercase tw-text-xl tw-font-montserrat tw-font-medium tw-text-center tw-text-accent tw-tracking-wider"
      >
        WHAT I DO
      </h1>
      <h1
        class="tw-uppercase tw-text-5xl tw-font-open-sans tw-font-bold tw-text-main tw-text-center"
      >
        Specilizing in
      </h1>

      <v-row class="mt-12">
        <v-col v-for="(n, i) in 6" :key="i" cols="12" md="6">
          <v-row>
            <v-col cols="12" md="2">
              <v-avatar color="orange" size="62">
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                />
              </v-avatar>
            </v-col>
            <v-col cols="12" md="10">
              <h1 class="tw-text-4xl">Roger</h1>
              <p>
                The size prop allows you to define the height and width of
                v-avatar. This prop scales both evenly with an aspect ratio of
                1. height and width props will override this prop.
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>

<style></style>
