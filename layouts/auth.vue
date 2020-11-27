<template>
  <v-app>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    // If the user is not authenticated
    if (store.state.user.token) {
      return redirect('/admin/dashboard')
    }
  },
}
</script>
