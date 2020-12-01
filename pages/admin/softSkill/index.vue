<template>
  <v-container>
    <v-row>
      <v-col md="6">
        <h1
          class="tw-font-open-sans font-weight-bold tw-text-xl blue-grey--text text--darken-4"
        >
          Tabel soft-skill
        </h1>
      </v-col>
      <v-col md="6" class="text-right">
        <v-btn
          color="indigo accent-2"
          class="tw-normal-case tw-font-open-sans font-weight-bold focus:tw-outline-none"
          depressed
          dark
          rounded
          :to="{ name: 'admin-softSkill-add' }"
        >
          Add
          <v-icon> mdi-plus </v-icon>
        </v-btn>
      </v-col>
      <v-col md="12">
        <admin-soft-skill-form-table></admin-soft-skill-form-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch('softSkill/getSoftSkills')
    await store.dispatch('toggleErrors', [])
  },
}
</script>

<style></style>
