import {NavigationActions, StackActions} from 'react-navigation'

let _navigator;

const setTopLevelNavigator = (navigatorRef) => {
  _navigator = navigatorRef;
};

const navigate = (routeName, params = {}) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};

const back = () => {
  _navigator.dispatch(
    NavigationActions.back()
  );
};

const replaceRoute = (oldRouteName, newRouteName, params = {}) => {

  StackActions.replace({
    key: oldRouteName,
    routeName: newRouteName,
    params: params
  });

};

// add other navigation functions that you need and export them

export const Navigation = {
  setTopLevelNavigator,
  navigate,
  back,
  replaceRoute
};
