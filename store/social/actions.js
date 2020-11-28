const END_POINT = '/socials'

export const getSocials = async function ({ commit, dispatch }) {
  try {
    dispatch('toggleLoading', true, { root: true })
    const response = await this.$axios.get(END_POINT)
    commit('SET_SOCIALS', response.data)
    dispatch('toggleLoading', false, { root: true })
  } catch (error) {}
}

export const getSocial = async function ({ commit }, payload) {
  try {
    const response = await this.$axios.get(`${END_POINT}/${payload}`)
    commit('SET_SOCIAL', response.data)
  } catch (error) {}
}

export const storeSocial = async function ({ dispatch }, payload) {
  try {
    const formData = new FormData()

    formData.append('title', payload.title)
    formData.append('link', payload.link)
    formData.append('image', payload.image)

    await this.$axios.post(END_POINT, formData)

    dispatch('toggleErrors', [], { root: true })
    this.$swal({
      icon: 'success',
      title: 'Data Added',
      timer: 500,
    })
    this.$router.push({ name: 'admin-social' })
  } catch (error) {
    if (error.response.status === 422) {
      dispatch('toggleErrors', error.response.data.errors, { root: true })
    }
  }
}

export const updateSocial = async function ({ dispatch }, payload) {
  try {
    const formData = new FormData()

    formData.append('title', payload.form.title)
    formData.append('link', payload.form.link)
    formData.append('image', payload.image)
    formData.append('_method', 'PATCH')

    await this.$axios.post(`${END_POINT}/${payload.form.id}`, formData)

    dispatch('toggleErrors', [], { root: true })
    this.$swal({
      icon: 'success',
      title: 'Data Updated',
      timer: 500,
    })
    this.$router.push({ name: 'admin-social' })
  } catch (error) {
    if (error.response.status === 422) {
      dispatch('toggleErrors', error.response.data.errors, { root: true })
    }
  }
}

export const removeSocial = async function ({ commit }, payload) {
  try {
    await this.$axios.delete(`${END_POINT}/${payload}`)
    commit('REMOVE_SOCIAL', payload)
  } catch (error) {}
}
