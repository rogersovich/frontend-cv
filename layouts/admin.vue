<template>
  <v-app>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.mdAndUp"
      app
      permanent
      class="px-4 py-4"
    >
      <v-list-item>
        <v-list-item-content>
          <v-img
            contain
            height="70"
            width="auto"
            src="https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/devil2_6s3fQH-t_pBi.svg"
          ></v-img>
        </v-list-item-content>
      </v-list-item>
      <v-list-item-group class="mt-4">
        <v-list dense nav>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            link
            color="blue accent-2"
            :to="{ name: item.url }"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title
                class="font-weight-bold tw-font-open-sans"
                v-text="item.title"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-list-item-group>
      <template v-slot:append>
        <v-list-item
          color="blue accent-2"
          link
          @click.prevent="$store.dispatch('user/logout')"
        >
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-title class="font-weight-bold tw-font-open-sans">
            logout
          </v-list-item-title>
        </v-list-item>
      </template>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-if="$vuetify.breakpoint.smAndDown"
      v-model="navMobile"
      temporary
      app
      class="py-4"
    >
      <v-list-item>
        <v-list-item-content>
          <v-img
            contain
            height="70"
            width="auto"
            src="https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/devil2_6s3fQH-t_pBi.svg"
          ></v-img>
        </v-list-item-content>
      </v-list-item>
      <v-list-item-group class="mt-4">
        <v-list dense nav>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            link
            color="blue accent-2"
            :to="{ name: item.url }"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title
                class="font-weight-bold tw-font-open-sans"
                v-text="item.title"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-list-item-group>
      <template v-slot:append>
        <v-list-item
          color="blue accent-2"
          link
          @click.prevent="$store.dispatch('user/logout')"
        >
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-title class="font-weight-bold tw-font-open-sans">
            logout
          </v-list-item-title>
        </v-list-item>
      </template>
    </v-navigation-drawer>

    <v-app-bar app flat color="white" class="py-1">
      <v-toolbar-title
        v-if="$vuetify.breakpoint.mdAndUp"
        class="text-center tw-font-open-sans font-weight-bold tw-text-4xl blue-grey--text text--darken-4"
      >
        <span class="indigo--text text--accent-2">Vconex</span> Squad
      </v-toolbar-title>
      <v-toolbar-title
        v-if="$vuetify.breakpoint.smAndDown"
        @click.stop="navMobile = !navMobile"
      >
        <v-icon large>mdi-menu</v-icon>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <strong v-if="$vuetify.breakpoint.mdAndUp" class="mr-4 tw-font-open-sans"
        >Dimas Roger W</strong
      >
      <v-avatar size="40" class="tw-cursor-pointer">
        <img
          src="https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/devil_LdKDxIckuxJv.svg"
          class="tw-inline-block"
          alt="John"
        />
      </v-avatar>
    </v-app-bar>

    <v-main>
      <nuxt></nuxt>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'Admin',
  middleware({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.user.token) {
      return redirect('/login')
    }
  },
  data() {
    return {
      nav: 1,
      navMobile: false,
      items: [
        {
          title: 'Dashboard',
          icon: 'mdi-view-dashboard',
          url: 'admin-dashboard',
        },
        { title: 'Contact', icon: 'mdi-image', url: 'admin-contact' },
      ],
    }
  },
}
</script>

<style lang="css">
.v-navigation-drawer__border {
  width: 0px !important;
}

.v-card {
  border-width: 0px !important;
}
</style>
