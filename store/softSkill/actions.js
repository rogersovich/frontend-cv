const END_POINT = '/soft-skills'

export const getSoftSkills = async function ({ commit, dispatch }) {
  try {
    dispatch('toggleLoading', true, { root: true })
    const response = await this.$axios.get(END_POINT)
    commit('SET_SOFT_SKILLS', response.data)
    dispatch('toggleLoading', false, { root: true })
  } catch (error) {}
}

export const getSoftSkill = async function ({ commit }, payload) {
  try {
    const response = await this.$axios.get(`${END_POINT}/${payload}`)
    commit('SET_SOFT_SKILL', response.data)
  } catch (error) {}
}

export const storeSoftSkill = async function ({ dispatch }, payload) {
  try {
    const formData = new FormData()

    formData.append('title', payload.title)
    formData.append('description', payload.description)
    formData.append('image', payload.image)

    await this.$axios.post(END_POINT, formData)

    dispatch('toggleErrors', [], { root: true })
    this.$swal({
      icon: 'success',
      title: 'Data Added',
      timer: 500,
    })
    this.$router.push({ name: 'admin-softSkill' })
  } catch (error) {
    if (error.response.status === 422) {
      dispatch('toggleErrors', error.response.data.errors, { root: true })
    }
  }
}

export const updateSoftSkill = async function ({ dispatch }, payload) {
  try {
    const formData = new FormData()

    formData.append('title', payload.form.title)
    formData.append('description', payload.form.description)
    formData.append('image', payload.image)
    formData.append('_method', 'PATCH')

    await this.$axios.post(`${END_POINT}/${payload.form.id}`, formData)

    dispatch('toggleErrors', [], { root: true })
    this.$swal({
      icon: 'success',
      title: 'Data Updated',
      timer: 500,
    })
    this.$router.push({ name: 'admin-softSkill' })
  } catch (error) {
    if (error.response.status === 422) {
      dispatch('toggleErrors', error.response.data.errors, { root: true })
    }
  }
}

export const removeSoftSkill = async function ({ commit }, payload) {
  try {
    await this.$axios.delete(`${END_POINT}/${payload}`)
    commit('REMOVE_SOFT_SKILL', payload)
  } catch (error) {}
}
