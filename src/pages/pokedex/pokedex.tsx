import React from "react";
import {Component} from "react";
import {Button, ScrollView} from "react-native";
import {PokedexCard} from "./card/pokedex-card";
import {PokedexInput} from "./input/pokedex-input";

interface Props {
  navigation: any
}

export class Pokedex extends Component<Props> {

  // //https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png
  // static navigationOptions = {
  //   headerLeft: <PokedexInput/>,
  //   headerRight: (
  //     <Button
  //       onPress={() => alert('This is a button!')}
  //       title="teste"
  //       color="#000"
  //     />
  //   ),
  // };

  render() {

    return (
      <ScrollView>
        <Button title={"teste"} onPress={() => this.props.navigation.navigate('detalhes')} />
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
