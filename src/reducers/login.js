// reducer
import _ from 'lodash';

const login = (state = {}, action) => {
    switch (action.type) {
        case 'PUT_LOGIN': {
            const nextState = _.merge({}, state);
            nextState.user = action.user;
            return nextState;
        }
        default:
            return state
    }
}

export default login