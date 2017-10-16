import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import schools from './schools'
import user from './user'
import schooldetails from './schooldetails'
import favorites from './favorites'


const youniversity = combineReducers({
  schools,
  user,
  schooldetails,
  favorites,
  routing: routerReducer
})

export default youniversity
