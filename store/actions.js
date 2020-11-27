export const toggleLoading = function ({ commit }, payload) {
  commit('TOGGLE_LOADING', payload)
}

export const toggleErrors = function ({ commit }, payload) {
  commit('TOGGLE_ERRORS', payload)
}
