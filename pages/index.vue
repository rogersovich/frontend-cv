<template>
  <v-container fluid class="py-0">
    <card-home></card-home>
    <card-soft-skill></card-soft-skill>
    <card-hard-skill></card-hard-skill>
    <card-project></card-project>
    <card-contact></card-contact>
  </v-container>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch('contact/getContact', 3)
    await store.dispatch('hardSkill/getHardSkills')
    await store.dispatch('softSkill/getSoftSkills')
    await store.dispatch('project/getProjects')
    await store.dispatch('social/getSocials')
  },
}
</script>
