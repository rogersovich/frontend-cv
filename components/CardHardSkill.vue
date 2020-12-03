<template>
  <v-row
    align="center"
    class="fill-height tw-h-screen lg:tw-mx-12 lg:tw-my-12 tw-mx-4 tw-my-4"
  >
    <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="12" sm="6" md="6">
      <v-img
        contain
        height="350"
        width="auto"
        src="https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/botw3x-removebg-preview_RuwFlV6q-ii.png"
      ></v-img>
    </v-col>
    <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="12" sm="6" md="6">
      <h1
        class="tw-uppercase lg:tw-text-xl tw-text-lg tw-font-montserrat tw-font-medium tw-text-center tw-text-accent tw-tracking-wider"
      >
        EXPERTISE
      </h1>
      <h1
        class="tw-uppercase lg:tw-text-4xl tw-text-3xl tw-font-open-sans tw-font-bold tw-text-main tw-text-center"
      >
        SPECIAL SKILL
      </h1>
      <v-card flat class="mx-auto mt-6">
        <v-carousel
          :continuous="false"
          :cycle="cycle"
          :show-arrows="false"
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          height="300"
          light
        >
          <v-carousel-item
            v-for="(data, i) in $store.state.hardSkill.hardSkills.data"
            :key="i"
          >
            <v-sheet height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <v-list two-line class="tw-bg-transparent px-8">
                  <v-list-item>
                    <v-list-item-avatar size="50">
                      <v-img :src="data.image"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title
                        class="tw-text-2xl tw-font-bold tw-font-open-sans tw-text-main"
                      >
                        {{ data.title }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content
                      class="description-hard-skill tw-font-medium tw-font-montserrat tw-text-main"
                      v-html="data.description"
                    >
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-col>

    <!-- mobile version -->
    <v-col
      v-if="$vuetify.breakpoint.smAndDown"
      cols="12"
      sm="6"
      md="6"
      class="pa-0"
    >
      <h1
        class="tw-uppercase lg:tw-text-xl tw-text-lg tw-font-montserrat tw-font-medium tw-text-center tw-text-accent tw-tracking-wider"
      >
        EXPERTISE
      </h1>
      <h1
        class="tw-uppercase lg:tw-text-4xl tw-text-3xl tw-font-open-sans tw-font-bold tw-text-main tw-text-center"
      >
        SPECIAL SKILL
      </h1>
      <v-card flat class="mx-auto mt-6">
        <v-carousel
          :continuous="false"
          :cycle="cycle"
          :show-arrows="false"
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          height="300"
          light
        >
          <v-carousel-item
            v-for="(data, i) in $store.state.hardSkill.hardSkills.data"
            :key="i"
          >
            <v-sheet height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <v-list two-line class="tw-bg-transparent px-8">
                  <v-list-item>
                    <v-list-item-avatar size="50">
                      <v-img :src="data.image"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title
                        class="tw-text-2xl tw-font-bold tw-font-open-sans tw-text-main"
                      >
                        {{ data.title }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content
                      class="description-hard-skill tw-font-medium tw-font-montserrat tw-text-main"
                      v-html="data.description"
                    >
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-col>

    <v-col
      v-if="$vuetify.breakpoint.smAndDown"
      cols="12"
      sm="6"
      md="6"
      class="pa-0"
    >
      <v-img
        contain
        height="350"
        width="auto"
        src="https://ik.imagekit.io/1akf8cdsyg/cv-rogersovich/Assets/botw3x-removebg-preview_RuwFlV6q-ii.png"
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      cycle: false,
    }
  },
}
</script>

<style lang="css">
.description-hard-skill p {
  line-height: 1.5rem;
}
</style>
