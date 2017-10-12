import _ from 'lodash';

const schools = (state = {}, action) => {
  switch (action.type) {
    case 'GET_SCHOOLS': {
      const nextState = _.merge({}, state);
      nextState.schools = action.schools;
      return nextState;
    }
    default:
      return state
  }
}

export default schools
