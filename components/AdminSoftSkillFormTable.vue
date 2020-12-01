<template>
  <v-data-table
    :headers="headers"
    :items="$store.state.softSkill.softSkills"
    :loading="$store.state.loading"
    loading-text="Tunggu sebentar gan !"
    :items-per-page="10"
    class="elevation-1"
    mobile-breakpoint
  >
    <template v-slot:item="row">
      <tr>
        <td>{{ row.index + 1 }}</td>
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
              name: 'admin-softSkill-id',
              params: { id: row.item.id },
            }"
            class="m-2"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn
            fab
            x-small
            color="error"
            class="m-2"
            @click="confirm(row.item)"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'No', align: 'start', sortable: false },
        { text: 'Title' },
        { text: 'Description' },
        { text: 'Image' },
        { text: 'Action', align: 'center', sortable: false, width: 100 },
      ],
    }
  },
  methods: {
    confirm(data) {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.value) {
          this.$store.dispatch('softSkill/removeSoftSkill', data.id)
          this.$swal('Deleted!', 'Item Deleted', 'success')
        }
      })
    },
  },
}
</script>

<style></style>
