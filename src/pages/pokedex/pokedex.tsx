import React from "react";
import {Component} from "react";
import {Button, ScrollView} from "react-native";
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
      <Button
        onPress={() => alert('This is a button!')}
        title="teste"
        color="#000"
      />
    ),
   };

  render() {

    return (
      <ScrollView>
        <Icon name="rocket" size={30} color="#900" />
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
    )

  }

}
