<template>
  <v-row
    align="center"
    justify="center"
    class="fill-height tw-h-screen lg:tw-bg-contact-waves"
  >
    <v-col cols="12" sm="12" md="12" class="sm:tw-px-0 sm:tw-py-0 lg:tw-p-3">
      <v-row class="lg:tw-mx-12 lg:tw-my-12 tw-mx-4 tw-my-4">
        <v-col cols="12" sm="12" md="12">
          <v-card flat class="pa-5 mx-auto" max-width="600">
            <v-card-subtitle
              class="text-center lg:tw-p-4 tw-p-0 tw-text-sm lg:tw-text-base tw-text-main tw-font-montserrat tw-font-medium"
            >
              Trying to hire me ?
              <span class="tw-text-accent"> Say Hello At </span>
              <h1
                class="tw-tracking-wide tw-font-normal tw-text-xl lg:tw-text-3xl mt-2"
              >
                {{ $store.state.contact.contact.email }}
              </h1>
            </v-card-subtitle>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="12" class="tw-mt-16">
          <v-card flat class="mx-auto text-center" max-width="400">
            <v-card-text>
              <a
                v-for="(data, i) in $store.state.social.socials.data"
                :key="i"
                :href="data.link"
              >
                <v-avatar size="45" class="lg:tw-mx-4 tw-mx-2 tw-shadow-md">
                  <v-img contain :src="data.image"></v-img>
                </v-avatar>
              </a>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>

<style lang="css" scoped></style>
