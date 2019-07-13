import React from 'react'
import {Layout} from "./src/layout/layout";
import { createStore, applyMiddleware} from 'redux';
import reducer from "./src/redux/reducer";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

const App = () => {
  return (
    <Provider store={ store }>
      <Layout/>
    </Provider>
  );
};



export default App;
