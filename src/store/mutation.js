import * as types from './mutation_types'

export default {
  [types.CHANGE_BACKGROUND] (state, color) {
    state.backgroundColor = {
      backgroundColor: color
    }
  }
}
