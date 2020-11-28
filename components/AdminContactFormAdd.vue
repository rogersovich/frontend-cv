<template>
  <v-form @submit.prevent="$store.dispatch('contact/storeContact', form)">
    <v-text-field
      v-model="form.email"
      autocomplete="off"
      type="email"
      hint="For example, flowers or used cars"
      :error-messages="$store.state.errors.email"
    >
      <template v-slot:label>
        <span class="tw-font-medium">Email</span>
      </template>
    </v-text-field>
    <v-text-field
      v-model="form.link_cv"
      autocomplete="off"
      hint="For example, flowers or used cars"
      :error-messages="$store.state.errors.link_cv"
    >
      <template v-slot:label>
        <span class="tw-font-medium">Link CV</span>
      </template>
    </v-text-field>
    <v-text-field
      v-model="form.number_phone"
      autocomplete="off"
      type="number"
      hint="For example, flowers or used cars"
      :error-messages="$store.state.errors.number_phone"
    >
      <template v-slot:label>
        <span class="tw-font-medium">Number Phone</span>
      </template>
    </v-text-field>

    <div class="text-right mt-2">
      <v-btn
        color="#536DFE"
        depressed
        dark
        type="submit"
        class="tw-normal-case tw-tracking-normal tw-text-base tw-font-open-sans focus:tw-outline-none"
      >
        Submit
      </v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        link_cv: '',
        number_phone: '',
      },
    }
  },
}
</script>

<style></style>
