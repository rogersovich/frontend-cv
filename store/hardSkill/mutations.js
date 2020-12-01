export const SET_HARD_SKILL = function (state, payload) {
  state.hardSkill = payload
}

export const SET_HARD_SKILLS = function (state, payload) {
  state.hardSkills = payload
}

export const REMOVE_HARD_SKILL = function (state, payload) {
  state.hardSkills = state.hardSkills.filter((item) => {
    return item.id !== payload
  })
}
