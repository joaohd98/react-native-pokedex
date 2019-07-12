import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export class PokedexCSS {

  static CSS = StyleSheet.create({
    scrollView: {
      marginBottom: 50
    }
  });

  static Header = {
    headerTitle: 'Pokédex',
    headerTitleContainerStyle: {
      justifyContent: "flex-start",
      left: 5,

    },
    headerRight: (
      <TouchableOpacity onPress={() => {}}>
        <Icon name="bars" size={30} color="#000" />
      </TouchableOpacity>
    ),
  };

}
