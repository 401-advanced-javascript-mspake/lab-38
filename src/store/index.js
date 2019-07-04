import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from '../lib/middleware/thunk-middleware';

import singlePerson from '../lib/reducers/single-person-reducer';
import peopleReducer from '../lib/reducers/people-reducer';

const compositeReducer = combineReducers({
  person: singlePerson,
  people: peopleReducer,
});

export default () => createStore(compositeReducer, composeWithDevTools(applyMiddleware(thunk)));
