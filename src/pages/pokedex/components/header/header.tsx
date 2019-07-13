import React from "react";
import {TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export class PokedexHeader {

  static Header = {
    headerTitle: 'Pokédex',
    headerTitleContainerStyle: {
      justifyContent: "flex-start",
      left: 5,

    },
    headerRight: (
      <TouchableOpacity onPress={PokedexHeader.irParaFiltro}>
        <Icon name="bars" size={30} color="#000" />
      </TouchableOpacity>
    ),
  };

  private static irParaFiltro() {

  }

}
