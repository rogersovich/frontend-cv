<template>
  <v-container>
    <v-row>
      <v-col md="6" class="justify-center">
        <h1
          class="tw-font-open-sans font-weight-bold tw-text-xl blue-grey--text text--darken-4"
        >
          Create hard-skill
        </h1>
      </v-col>
      <v-col md="6" class="text-right">
        <v-btn
          color="rgba(83, 109, 254, 0.3)"
          class="tw-normal-case tw-font-open-sans font-weight-bold focus:tw-outline-none"
          depressed
          dark
          small
          fab
          :to="{ name: 'admin-hardSkill' }"
        >
          <v-icon color="rgba(83, 109, 254, 1)"> mdi-arrow-left </v-icon>
        </v-btn>
      </v-col>
      <v-col md="12" cols="12">
        <v-card color="rgba(236, 239, 241, 0.4)" flat rounded="lg" class="px-6">
          <v-row>
            <v-col md="12">
              <admin-hard-skill-form-add></admin-hard-skill-form-add>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style></style>
