import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import schools from './schools'
import user from './user'
import schooldetails from './schooldetails'


const youniversity = combineReducers({
  schools,
  user,
  schooldetails,
  routing: routerReducer
})

export default youniversity
