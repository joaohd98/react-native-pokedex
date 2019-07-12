import React from 'react'
import {Layout} from "./src/layout/layout";
import {createStore} from "redux";
import reducer from "./src/redux/reducer";
import { Provider } from 'react-redux';

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={ store }>
      <Layout/>
    </Provider>
  );
};



export default App;
