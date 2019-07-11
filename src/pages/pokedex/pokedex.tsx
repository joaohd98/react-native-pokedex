import React from "react";
import {Component} from "react";
import {ScrollView, TouchableHighlight, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import {PokedexCard} from "./card/pokedex-card";
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  navigation: any
}

export class Pokedex extends Component<Props> {

  static navigationOptions = {
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

  render() {

    return (
      <View>
        <ScrollView>
          <PokedexCard />
          <PokedexCard />
          <PokedexCard />
          <PokedexCard />
          <PokedexCard />
          <PokedexCard />
          <PokedexCard />
          <PokedexCard />
          <PokedexCard />
          <PokedexCard />
          <PokedexCard />
          <PokedexCard />
          <PokedexCard />
          <PokedexCard />
        </ScrollView>
      </View>
    )

  }

}
