import React from "react";
import {Component} from "react";
import {Pokedex} from "../pages/pokedex/pokedex";
import {createAppContainer, createStackNavigator} from "react-navigation";
import {Detalhes} from "../pages/detalhes/detalhes";

export class Layout extends Component {

  //PAGINAS
  private stackNavigator = createStackNavigator({
    pokedex: Pokedex,
    detalhes: Detalhes
  }, {
    initialRouteName: 'pokedex',
    headerLayoutPreset: "center",
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomColor: "#919191",
        borderBottomWidth: 0.19
      },
      headerTitleStyle: {
        fontWeight: "400",
        fontSize: 20,
        lineHeight: 50,
        letterSpacing: 0.25,
        textTransform: "uppercase",
        color: '#919191'
      },
      headerRightContainerStyle: {
        right: 5
      }
    }
  });

  render(){

    const AppContainer = createAppContainer(this.stackNavigator);

    return (
      <AppContainer/>
    )

  }

}
