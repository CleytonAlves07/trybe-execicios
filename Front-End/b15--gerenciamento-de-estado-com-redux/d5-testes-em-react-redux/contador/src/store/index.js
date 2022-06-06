import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import clickReducer from '../reducers';
const rootReducer = combineReducers({ clickReducer });

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState)} = {}
) => {
  return {
    ...render(<Provider store={store}></Provider>),
    store
  }
}

const store = createStore(rootReducer);

export default store;