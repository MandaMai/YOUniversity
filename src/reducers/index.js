import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import schools from './schools'

const marvelApp = combineReducers({
  schools,
  routing: routerReducer
})

export default marvelApp
