const END_POINT = '/projects'

export const getProjects = async function ({ commit, dispatch }) {
  try {
    dispatch('toggleLoading', true, { root: true })
    const response = await this.$axios.get(END_POINT)
    commit('SET_PROJECTS', response.data)
    dispatch('toggleLoading', false, { root: true })
  } catch (error) {}
}

export const getProject = async function ({ commit }, payload) {
  try {
    const response = await this.$axios.get(`${END_POINT}/${payload}`)
    commit('SET_PROJECT', response.data)
  } catch (error) {}
}

export const storeProject = async function ({ dispatch }, payload) {
  try {
    const formData = new FormData()

    formData.append('image', payload.image)
    formData.append('title', payload.title)
    formData.append('link', payload.link)

    await this.$axios.post(END_POINT, formData)

    dispatch('toggleErrors', [], { root: true })
    this.$swal({
      icon: 'success',
      title: 'Data Added',
      timer: 500,
    })
    this.$router.push({ name: 'admin-project' })
  } catch (error) {
    if (error.response.status === 422) {
      dispatch('toggleErrors', error.response.data.errors, { root: true })
    }
  }
}

export const updateProject = async function ({ dispatch }, payload) {
  try {
    const formData = new FormData()

    formData.append('image', payload.image)
    formData.append('title', payload.form.title)
    formData.append('link', payload.form.link)
    formData.append('_method', 'PATCH')

    await this.$axios.post(`${END_POINT}/${payload.form.id}`, formData)

    dispatch('toggleErrors', [], { root: true })
    this.$swal({
      icon: 'success',
      title: 'Data Updated',
      timer: 500,
    })
    this.$router.push({ name: 'admin-project' })
  } catch (error) {
    if (error.response.status === 422) {
      dispatch('toggleErrors', error.response.data.errors, { root: true })
    }
  }
}

export const removeProject = async function ({ commit }, payload) {
  try {
    await this.$axios.delete(`${END_POINT}/${payload}`)
    commit('REMOVE_PROJECT', payload)
  } catch (error) {}
}
