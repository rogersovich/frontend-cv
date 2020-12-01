export const SET_PROJECT = function (state, payload) {
  state.project = payload
}

export const SET_PROJECTS = function (state, payload) {
  state.projects = payload
}

export const REMOVE_PROJECT = function (state, payload) {
  state.projects = state.projects.filter((item) => {
    return item.id !== payload
  })
}
