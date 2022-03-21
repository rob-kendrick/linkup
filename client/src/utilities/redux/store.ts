import { composeWithDevTools } from 'redux-devtools-extension';
import {
  createStore,
  applyMiddleware,
  Store,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/user.reducer';
import eventReducer from './reducers/event.reducer';

const rootReducer = combineReducers({ users: userReducer, events: eventReducer });

type RootState = ReturnType<typeof rootReducer>

const store: Store<RootState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
