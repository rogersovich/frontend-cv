<template>
  <v-row
    align="center"
    justify="center"
    class="fill-height lg:tw-mx-12 lg:tw-my-12 tw-mx-4 tw-my-4 lg:tw-px-8 lg:tw-py-8"
  >
    <v-col cols="12" md="12" class="tw-px-0 tw-py-0 lg:tw-p-3">
      <v-card color="white" flat class="px-6 py-12">
        <v-row justify="center" align="center">
          <v-col cols="12" sm="6" md="5">
            <h1
              class="tw-uppercase lg:tw-text-xl tw-text-lg tw-font-montserrat tw-font-medium tw-text-center tw-text-accent tw-tracking-wider"
            >
              examples
            </h1>
            <h1
              class="tw-uppercase lg:tw-text-4xl tw-text-3xl tw-font-open-sans tw-font-bold tw-text-main tw-text-center"
            >
              My Portofolios
            </h1>
            <div class="text-center">
              <v-btn
                depressed
                large
                dark
                elevation="2"
                width="180"
                rounded
                color="#005AFF"
                class="tw-text-base tw-font-semibold tw-tracking-normal tw-normal-case tw-font-normal tw-font-open-sans mt-2 focus:tw-outline-none"
                >See Project</v-btn
              >
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="7">
            <v-card flat class="mx-auto">
              <v-carousel
                v-if="$vuetify.breakpoint.mdAndUp"
                :continuous="false"
                :cycle="false"
                :show-arrows="false"
                hide-delimiter-background
                delimiter-icon="mdi-minus"
                height="400"
              >
                <v-hover
                  v-for="(data, i) in $store.state.project.projects.data"
                  v-slot="{ hover }"
                  :key="i"
                >
                  <v-carousel-item
                    :src="data.image"
                    :href="data.link"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    class="text-center"
                  >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex justify-center align-center transition-fast-in-fast-out blue accent-2 v-card--reveal display-3 tw-text-capitalize white--text"
                        style="height: 400px"
                      >
                        {{ data.title }}
                      </div>
                    </v-expand-transition>
                  </v-carousel-item>
                </v-hover>
              </v-carousel>

              <!-- mobile version -->
              <v-carousel
                v-if="$vuetify.breakpoint.smAndDown"
                :continuous="false"
                :cycle="false"
                :show-arrows="false"
                hide-delimiter-background
                delimiter-icon="mdi-minus"
                height="300"
              >
                <v-carousel-item
                  v-for="(data, i) in $store.state.project.projects.data"
                  :key="i"
                  :href="data.link"
                  :src="data.image"
                  lazy-src="https://picsum.photos/id/11/10/6"
                  reverse-transition="fade-transition"
                  transition="fade-transition"
                  class="text-center"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-carousel-item>
              </v-carousel>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
    }
  },
}
</script>

<style></style>
