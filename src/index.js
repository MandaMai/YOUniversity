import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Link } from 'react-router';

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import marvelApp from './reducers'

import Dashboard from './components/dashboard/Dashboard'
import EditPreferences from './components/editpreferences/EditPreferences'
import Favorites from './components/favorites/Favorites'
import NewUser from './components/newuser/NewUser'
import Landing from './components/landing/Landing'


import Checkbox from './components/checkbox/Checkbox'

import Character from './containers/Character'


let store = createStore(marvelApp, applyMiddleware(thunk))
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          {/* <IndexRoute component={Character}/> */}
          <IndexRoute component={Landing}/>
          <Route path="dashboard" component={Dashboard}/>
          <Route path="editpreferences" component={EditPreferences} />
          <Route path="favorites" component={Favorites} />
          <Route path="newuser" component={NewUser}/>
          {/* <Route path="/testagain/:id" component={TestAgain}/> */}
         

          <Route path="checkbox" component={Checkbox} />
          
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
