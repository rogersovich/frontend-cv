const END_POINT = '/contacts'

export const getContacts = async function ({ commit, dispatch }) {
  try {
    dispatch('toggleLoading', true, { root: true })
    const response = await this.$axios.get(END_POINT)
    commit('SET_CONTACTS', response.data)
    dispatch('toggleLoading', false, { root: true })
  } catch (error) {}
}

export const getContact = async function ({ commit }, payload) {
  try {
    const response = await this.$axios.get(`${END_POINT}/${payload}`)
    commit('SET_CONTACT', response.data)
  } catch (error) {}
}

export const storeContact = async function ({ dispatch }, payload) {
  try {
    await this.$axios.post(END_POINT, {
      title: payload.title,
      phone: payload.phone,
      email: payload.email,
      description: payload.description,
    })
    dispatch('toggleErrors', [], { root: true })
    this.$swal({
      icon: 'success',
      title: 'Data Added',
      timer: 500,
    })
    this.$router.push({ name: 'adminVconex-contact' })
  } catch (error) {
    if (error.response.status === 422) {
      dispatch('toggleErrors', error.response.data.errors, { root: true })
    }
  }
}

export const updateContact = async function ({ dispatch }, payload) {
  try {
    await this.$axios.put(`${END_POINT}/${payload.id}`, {
      title: payload.title,
      phone: payload.phone,
      email: payload.email,
      description: payload.description,
    })
    dispatch('toggleErrors', [], { root: true })
    this.$swal({
      icon: 'success',
      title: 'Data Updated',
      timer: 500,
    })
    this.$router.push({ name: 'adminVconex-contact' })
  } catch (error) {
    if (error.response.status === 422) {
      dispatch('toggleErrors', error.response.data.errors, { root: true })
    }
  }
}

export const removeContact = async function ({ commit }, payload) {
  try {
    await this.$axios.delete(`${END_POINT}/${payload}`)
    commit('REMOVE_CONTACT', payload)
  } catch (error) {}
}
