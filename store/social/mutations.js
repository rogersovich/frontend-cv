export const SET_SOCIAL = function (state, payload) {
  state.social = payload
}

export const SET_SOCIALS = function (state, payload) {
  state.socials = payload
}

export const REMOVE_SOCIAL = function (state, payload) {
  state.socials = state.socials.filter((item) => {
    return item.id !== payload
  })
}
