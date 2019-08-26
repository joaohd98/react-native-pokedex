import React, {Component} from "react";
import {createAppContainer, createStackNavigator} from "react-navigation";
import {Colors} from "../helpers/colors/colors";
import {ListaPokemons} from "../pages/lista-pokemons/view/page/lista-pokemons";
import {Filtro} from "../pages/lista-pokemons/sub-views/filtro/page/filtro";
import {Detalhes} from "../pages/lista-pokemons/sub-views/detalhes/page/detalhes";

export class Layout extends Component {

  //PAGINAS
  private stackNavigator = createStackNavigator({
    listaPokemons: ListaPokemons,
    filtro: Filtro,
    detalhes: Detalhes
  }, {
    initialRouteName: 'listaPokemons',
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
