import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import characters from './characters'

const marvelApp = combineReducers({
  characters,
  routing: routerReducer
})

export default marvelApp
