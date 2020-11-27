<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" lg="5">
        <v-card>
          <v-toolbar flat class="tw-border-b tw-border-gray-400">
            <v-toolbar-title>Please Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="$store.dispatch('user/login', form)">
              <v-text-field
                v-model="form.email"
                label="Email"
                color="green accent-4"
              ></v-text-field>
              <v-text-field
                v-model="form.password"
                label="Password"
                type="password"
                color="green accent-4"
              ></v-text-field>
              <div class="text-right">
                <v-btn type="submit" dark depressed color="green accent-4"
                  >Login</v-btn
                >
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
}
</script>
