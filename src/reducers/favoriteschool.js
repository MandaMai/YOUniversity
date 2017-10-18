// reducer
import _ from 'lodash';

const schools = (state = {}, action) => {
    switch (action.type) {
        case 'SET_FAVORITES': {
            const nextState = _.merge({}, state);
            nextState.user = action.user;
            return nextState;
        }
        default:
            return state
    }
}

export default schools