import React from 'react'
//import { Layout } from "./src/layout/layout";
import {Pokedex} from "./src/pages/pokedex/pokedex";
import {Detalhes} from "./src/pages/detalhes/detalhes";
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
  pokedex: {
    screen: Pokedex,
  },
  detalhes: {
    screen: Detalhes,
  },
}, {
  initialRouteName: 'pokedex',
});

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <AppContainer/>
  );
};



export default App;
