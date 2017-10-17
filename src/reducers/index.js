import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import schools from './schools'
import user from './user'
import schooldetails from './schooldetails'
import favorites from './favorites'
import login from './login'


const youniversity = combineReducers({
  schools,
  user,
  schooldetails,
  favorites,
  login,
  routing: routerReducer
})

export default youniversity
