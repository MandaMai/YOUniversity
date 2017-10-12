import _ from 'lodash';		
		
const characters = (state = {}, action) => {		
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
	
export default characters