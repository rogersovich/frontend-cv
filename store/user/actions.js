export const setUser = function ({ commit }, payload) {
  commit('SET_USER', payload)
}

export const removeToken = function ({ commit }) {
  commit('REMOVE_TOKEN')
}

export const removeUser = function ({ commit }) {
  commit('REMOVE_USER')
}

export const getUser = async function ({ commit }) {
  try {
    const response = await this.$axios.get('/user')
    commit('SET_USER', response.data.name)
  } catch (error) {}
}

export const login = async function ({ commit, dispatch }, payload) {
  try {
    const response = await this.$axios.post('/login', {
      email: payload.email,
      password: payload.password,
    })
    commit('SET_TOKEN', response.data.access_token)
    dispatch('getUser', null)
    this.$router.push({ name: 'admin-dashboard' })
  } catch (error) {
    this.$swal({
      icon: 'error',
      title: 'Authentication Failed',
      text: 'Please check your email or password',
    })
  }
}

export const logout = async function ({ commit }) {
  try {
    await this.$axios.get('/logout')
    commit('REMOVE_TOKEN', null)
    commit('REMOVE_USER', null)
    this.$router.push('/login')
  } catch (error) {
    this.$swal({
      icon: 'error',
      title: 'Logout Failed',
      text: 'Please contact admin',
    })
  }
}
