import _ from 'lodash';		
		
const characters = (state = {}, action) => {		
  switch (action.type) {		
    case 'GET_SCHOOLS': {		
      const nextState = _.merge({}, state);		
      nextState.schools = action.schools;		
      return nextState;		
    }	
    case 'POST_USER': {
      const nextState = _.merge({}, state);
      nextState.user = action.user;
      return nextState;
  }	
    default:		
      return state		
  }		
}		
	
export default characters