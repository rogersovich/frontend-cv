<template>
  <v-row
    align="center"
    class="fill-height tw-bg-white lg:tw-mx-12 lg:tw-my-12 tw-mx-4 tw-my-4 pa-8"
  >
    <v-col cols="12" sm="12" md="12">
      <h1
        class="tw-uppercase lg:tw-text-xl tw-text-lg tw-font-montserrat tw-font-medium tw-text-center tw-text-accent tw-tracking-wider"
      >
        WHAT I DO
      </h1>
      <h1
        class="tw-uppercase lg:tw-text-4xl tw-text-3xl tw-font-open-sans tw-font-bold tw-text-main tw-text-center"
      >
        Specilizing in
      </h1>

      <v-row class="mt-12">
        <v-col
          v-for="(data, i) in $store.state.softSkill.softSkills.data"
          :key="i"
          cols="12"
          md="6"
        >
          <v-row>
            <v-col cols="12" md="2" class="lg:tw-text-left tw-text-center">
              <v-avatar size="62">
                <v-img contain :src="data.image"></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="12" md="10" class="lg:tw-text-left tw-text-center">
              <h1 class="tw-text-2xl tw-text-main tw-font-medium">
                {{ data.title }}
              </h1>
              <div
                class="tw-text-secondary tw-tracking-wider tw-font-light"
                v-html="data.description"
              ></div>
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
