import React, {Component} from "react";
import {createAppContainer, createStackNavigator} from "react-navigation";
import {Colors} from "../helpers/colors/colors";
import {ListaPokemons} from "../pages/lista-pokemons/view/page/lista-pokemons";
import {Filtro} from "../pages/lista-pokemons/sub-views/filtro/page/filtro";
import {Detalhes} from "../pages/lista-pokemons/sub-views/detalhes/page/detalhes";
import {Navigation} from "../helpers/navigation";

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
        borderBottomWidth: 0.19,
      },
      headerTitleStyle: {
        fontFamily: 'Pokemon Solid',
        textAlign: "center",
        fontWeight: "400",
        fontSize: 25,
        lineHeight: 50,
        color: "#ffcb05",
        textShadowColor: "#2a75bb",
        textShadowOffset: {width: 3, height: 2},
        textShadowRadius: 1,
        letterSpacing: 2.5,
        textTransform: "capitalize",
        alignSelf: "center"
      },
      headerRightContainerStyle: {
        right: 20
      }
    }
  });

  render(){

    const AppContainer = createAppContainer(this.stackNavigator);

    return (
      <AppContainer ref={navigatorRef => Navigation.setTopLevelNavigator(navigatorRef)}/>
    )

  }

}
