<template>
  <v-app>
    <v-main class="background-default">
      <nuxt />
    </v-main>
    <!-- <v-footer absolute app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="css" scoped>
.background-default {
  background: #f2f4f9;
}
</style>
