<template>
  <div>
    <v-text-field
      v-model="search"
      :disabled="loading"
      label="Search data here"
      append-outer-icon="mdi-refresh"
      @keypress.enter="searchData()"
      @click:append-outer="getDataFromApi()"
    ></v-text-field>

    <v-data-table
      :headers="headers"
      :footer-props="footer"
      :server-items-length="totalItems"
      :items="items"
      :disable-sort="true"
      :loading="$store.state.loading"
      loading-text="Tunggu sebentar gan !"
      :items-per-page="10"
      class="elevation-1"
      mobile-breakpoint
    >
      <template v-slot:item="row">
        <tr>
          <td>{{ row.index + from }}</td>
          <td>{{ row.item.title }}</td>
          <td>{{ row.item.description }}</td>
          <td>
            <v-img contain height="50" width="50" :src="row.item.image"></v-img>
          </td>
          <td>
            <v-btn
              fab
              x-small
              color="primary"
              :to="{
                name: 'admin-hardSkill-id',
                params: { id: row.item.id },
              }"
              class="m-2 focus:tw-outline-none"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
              fab
              x-small
              color="error"
              class="m-2 focus:tw-outline-none"
              @click="removeItem(row.item.id)"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import serverSideTable from '~/mixins/serverSideTable'
import removeItem from '~/mixins/removeItem'

export default {
  mixins: [serverSideTable, removeItem],
  data() {
    return {
      headers: [
        { text: 'No', align: 'start', sortable: false },
        { text: 'Title' },
        { text: 'Description' },
        { text: 'Image' },
        { text: 'Action', align: 'center', sortable: false, width: 100 },
      ],
      url: 'hard-skills',
    }
  },
}
</script>

<style></style>
