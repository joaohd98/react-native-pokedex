import React from "react";
import {Component} from "react";
import {Pokedex} from "../pages/pokedex/pokedex";
import {createAppContainer, createStackNavigator} from "react-navigation";
import {Detalhes} from "../pages/detalhes/detalhes";
import {Colors} from "../helpers/colors/colors";

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
        borderBottomColor: Colors.gray,
        borderBottomWidth: 0.19
      },
      headerTitleStyle: {
        fontWeight: "400",
        fontSize: 20,
        lineHeight: 50,
        letterSpacing: 0.25,
        textTransform: "capitalize",
        color: Colors.gray
      },
      headerRightContainerStyle: {
        right: 20
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
