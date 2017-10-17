import _ from 'lodash';		

const favorites = (state = {}, action) => {		
switch (action.type) {		
    
case 'GET_FAVORITES': {		
const nextState = _.merge({}, state);		
nextState.schools = action.schools;		
return nextState;		
}	
case 'SET_FAVORITES': {		
    const nextState = _.merge({}, state);		
    nextState.schools = action.schools;		
    return nextState;		
    }	
default:		
return state		
}		
}		

export default favorites