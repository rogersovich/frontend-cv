const serverSideTable = {
  data() {
    return {
      items: [],
      currentPage: 1,
      totalItems: 0,
      from: 0,
      loading: false,
      footer: {
        disableItemsPerPage: true,
      },
      search: '',
    }
  },
  created() {
    this.getDataFromApi()
  },
  methods: {
    async getDataFromApi(pagination) {
      this.items = []
      this.search = ''
      this.loading = true
      const { data } = await this.$axios.get(`/${this.url}?page=` + pagination)
      this.loading = false
      this.items = data.data
      this.totalItems = data.total
      this.from = data.from
      this.currentPage = data.current_page
    },
    async searchData() {
      if (this.search === '') {
        const { data } = await this.$axios.get(`/${this.url}?page=1`)
        this.loading = false
        this.items = data.data
        this.totalItems = data.total
        this.from = data.from
      } else {
        this.items = []
        this.loading = true
        const { data } = await this.$axios.get(
          `/${this.url}?search=` + this.search
        )
        this.totalItems = data.length
        this.loading = false
        this.items = data
      }
    },
  },
}

export default serverSideTable
