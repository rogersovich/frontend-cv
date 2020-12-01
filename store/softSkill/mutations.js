export const SET_SOFT_SKILL = function (state, payload) {
  state.softSkill = payload
}

export const SET_SOFT_SKILLS = function (state, payload) {
  state.softSkills = payload
}

export const REMOVE_SOFT_SKILL = function (state, payload) {
  state.softSkills = state.softSkills.filter((item) => {
    return item.id !== payload
  })
}
