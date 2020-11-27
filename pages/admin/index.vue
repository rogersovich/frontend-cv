<template>
  <nuxt-child></nuxt-child>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.user.token) {
      return redirect('/login')
    } else {
      return redirect('/admin/dashboard')
    }
  },
}
</script>
