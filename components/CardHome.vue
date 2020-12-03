<template>
  <v-row
    align="center"
    class="fill-height tw-h-screen lg:tw-mx-12 lg:tw-my-12 tw-mx-4 tw-my-4"
  >
    <v-col cols="12" sm="6" md="6">
      <h1 class="tw-uppercase tw-text-2xl tw-font-montserrat tw-font-bold">
        <span class="tw-text-accent"> Hello, </span>
        <span class="tw-text-main">im dimas roger</span>
      </h1>
      <h1
        class="tw-uppercase tw-text-5xl tw-font-open-sans tw-font-bold tw-text-main"
      >
        Web Developer
      </h1>
      <h3 class="tw-font-open-sans tw-text-secondary">
        Fresh graduate & Easily to blend
      </h3>
      <div class="tw-mt-6">
        <v-tooltip bottom color="#424242">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              depressed
              large
              dark
              elevation="2"
              width="140"
              rounded
              v-bind="attrs"
              target="_blank"
              color="#005AFF"
              class="tw-text-sm tw-font-semibold tw-tracking-normal tw-normal-case tw-font-medium tw-font-open-sans focus:tw-outline-none"
              :href="
                'https://wa.me/' + $store.state.contact.contact.number_phone
              "
              v-on="on"
              >Contact Me</v-btn
            >
          </template>
          <span>Click to Whatsapp</span>
        </v-tooltip>
        <v-tooltip bottom color="#424242">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              outlined
              large
              dark
              elevation="2"
              width="140"
              rounded
              target="_blank"
              :href="$store.state.contact.contact.link_cv"
              v-bind="attrs"
              color="#005AFF"
              class="tw-text-sm tw-font-semibold tw-tracking-normal tw-normal-case tw-font-medium tw-font-open-sans focus:tw-outline-none"
              v-on="on"
              >Get CV</v-btn
            >
          </template>
          <span>Click to get CV</span>
        </v-tooltip>
      </div>
    </v-col>
    <v-col cols="12" sm="6" md="6">
      <v-img
        contain
        height="350"
        width="auto"
        src="https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/luigis-mansion-discord-removebg-preview_J_SwbvWpW7rn.png"
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>

<style></style>
