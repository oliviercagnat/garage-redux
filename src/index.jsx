import React from 'react';
import ReactDOM from 'react-dom';
// Wrap the application
import { Provider } from 'react-redux';
// createStore: hold the redux state
// combineReducers: Create one reducers for all the Redux State tree.
// applyMiddleware: takes an action and can do something before it reaches any reducer.
import { createStore, combineReducers, applyMiddleware } from 'redux';
// reduxPromise: permits the middleware to receive the promise, resolves it and
// dispatches the plain action to all of the reducers
import reduxPromise from 'redux-promise';
// logger: permits to see the logger in the console
import logger from 'redux-logger';

// Switch: with all the routes we need.
// Route: start with generated root /channel
// will mount the component App
// Looks like Rails, column parameter with routes with ids.
import { Router, Route, Switch } from 'react-router-dom';


// import { createBrowserHistory as history } from "history";

import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
// Rooter: History is the library handling the URL.
// It sees what the URL in the browser address bar, it mounts the correct component.
// ==> just needed but not working.



// We created one reducer combining all reducers.
// Create one reducers for all the Redux State tree.
import { reducer as formReducer } from 'redux-form';

// containers
import CarsIndex from './containers/cars_index';
import CarsShow from './containers/cars_show';
import CarsNew from './containers/cars_new';
import '../assets/stylesheets/application.scss';

// Reducers
import carsReducer from './reducers/cars_reducer.js';

// State and reducers
// Redux state tree
// Initial DB that we pass in the Store
const garageName = prompt("What is your garage?") || `garage${Math.floor(10 + (Math.random() * 90))}`;
const initialState = {
  garage: garageName,
  cars: []
};

// combine reducers
// make the link between the reducers and the State
// carsReducer => cars State
const reducers = combineReducers({
  garage: (state = null, action) => state,
  cars: carsReducer,
  form: formReducer
});

// Middlewares
// We apply the middleware on the Promise and logger
// We have now in our ReduxDevTool all the actions.
const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
// We createStore with the middlewares.
const store = createStore(reducers, initialState, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div className="view-container">
        <Switch>
          <Route path="/" exact component={CarsIndex} />
          {/* new  has to be before the show page */}
          <Route path="/cars/new" exact component={CarsNew} />
          <Route path="/cars/:id" component={CarsShow} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
