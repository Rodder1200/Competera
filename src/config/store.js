import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers/rootReducer';
import persistedState from "./persistedState";

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  localStorage.setItem("storageNotes", JSON.stringify(store.getState()));
});

export default store;
