import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import schools from './schools'
import user from './user'

const youniversity = combineReducers({
  schools,
  user,
  routing: routerReducer
})

export default youniversity
