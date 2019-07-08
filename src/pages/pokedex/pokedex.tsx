import React from "react";
import {Component} from "react";
import {ScrollView} from "react-native";
import {PokedexCard} from "./card/pokedex-card";

export class Pokedex extends Component {

  //https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png

  render() {

    return (
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
    )

  }

}
