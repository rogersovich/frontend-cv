export const SET_CONTACT = function (state, payload) {
  state.contact = payload
}

export const SET_CONTACTS = function (state, payload) {
  state.contacts = payload
}

export const REMOVE_CONTACT = function (state, payload) {
  state.contacts = state.contacts.filter((item) => {
    return item.id !== payload
  })
}
