// reducer
import _ from 'lodash';

const characters = (state = {}, action) => {
    switch (action.type) {
        case 'PUT_USER': {
            const nextState = _.merge({}, state);
            nextState.user = action.user;
            return nextState;
        }
        default:
            return state
    }
}

export default characters