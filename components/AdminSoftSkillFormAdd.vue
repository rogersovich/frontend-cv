<template>
  <v-form @submit.prevent="$store.dispatch('softSkill/storeSoftSkill', form)">
    <v-text-field
      v-model="form.title"
      autocomplete="off"
      hint="For example, flowers or used cars"
      :error-messages="$store.state.errors.title"
    >
      <template v-slot:label>
        <span class="tw-font-medium">Title</span>
      </template>
    </v-text-field>
    <div>
      <label class="tw-font-medium tw-text-gray-700">Description</label>
      <text-editor
        v-model="form.description"
        :error-messages="$store.state.errors.description"
        class="mt-2"
      ></text-editor>
    </div>
    <v-file-input
      v-model="form.image"
      type="file"
      :clearable="false"
      prepend-icon=""
      small-chips
      :error-messages="$store.state.errors.image"
    >
      <template v-slot:label>
        <span class="tw-font-medium">Input image here</span>
      </template>
    </v-file-input>

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
        title: '',
        description: '',
        image: [],
      },
    }
  },
}
</script>

<style></style>
