import _ from 'lodash';		
		
const schooldetails = (state = {}, action) => {		
  switch (action.type) {		
    case 'GET_SCHOOL_DETAILS': {		
      const nextState = _.merge({}, state);		
      nextState.schooldetails = action.schooldetails;		
      return nextState;		
    }		
    default:		
      return state		
  }		
}		
	
export default schooldetails