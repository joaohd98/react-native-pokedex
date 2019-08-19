import React from "react";
import {Component} from "react";
import {createAppContainer, createStackNavigator} from "react-navigation";
import {Detalhes} from "../pages/pokedex/views/detalhes/detalhes";
import {Colors} from "../helpers/colors/colors";
import {Pokedex} from "../pages/pokedex/views/pokedex/pokedex";
import {Filtro} from "../pages/pokedex/views/filtro/filtro";


export class Layout extends Component {

  //PAGINAS
  private stackNavigator = createStackNavigator({
    pokedex: Pokedex,
    filtro: Filtro,
    detalhes: Detalhes
  }, {
    initialRouteName: 'detalhes',
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
