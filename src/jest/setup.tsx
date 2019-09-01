import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {StoreCreator} from "redux";
import thunk from "redux-thunk";
import configureMockStore from 'redux-mock-store';

configure({adapter: new Adapter()});

export const generateStore = (values: object) => {

  const mockStore = configureMockStore([thunk]);

  return mockStore(values);

};

export const renderShallow = (view: JSX.Element, store: StoreCreator) => {

  return shallow(
    <Provider store={store}>
      {view}
    </Provider>
  )

};
