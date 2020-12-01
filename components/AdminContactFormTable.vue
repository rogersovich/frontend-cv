<template>
  <v-data-table
    :headers="headers"
    :items="$store.state.contact.contacts"
    :loading="$store.state.loading"
    loading-text="Tunggu sebentar gan !"
    :items-per-page="10"
    class="elevation-1"
    mobile-breakpoint
  >
    <template v-slot:item="row">
      <tr>
        <td>{{ row.index + 1 }}</td>
        <td>{{ row.item.email }}</td>
        <td>{{ row.item.number_phone }}</td>
        <td>{{ row.item.link_cv }}</td>
        <td>
          <v-btn
            fab
            x-small
            color="primary"
            :to="{
              name: 'admin-contact-id',
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
        { text: 'Email' },
        { text: 'Phone' },
        { text: 'Link' },
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
          this.$store.dispatch('contact/removeContact', data.id)
          this.$swal('Deleted!', 'Item Deleted', 'success')
        }
      })
    },
  },
}
</script>

<style></style>
