import _ from 'lodash';

const characters = (state = {}, action) => {
  switch (action.type) {
    case 'GET_CHARACTERS': {
      const nextState = _.merge({}, state);
      nextState.characters = action.characters;
      return nextState;
    }
    default:
      return state
  }
}

export default characters
