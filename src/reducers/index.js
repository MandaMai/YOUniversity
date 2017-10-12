import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import schools from './schools'

const youniversity = combineReducers({
  schools,
  routing: routerReducer
})

export default youniversity
