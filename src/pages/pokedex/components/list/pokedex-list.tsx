import React from "react";
import {Component} from "react";
import {ScrollView} from "react-native";
import {PokedexModel} from "../../service/PokedexModel";
import {PokedexCard} from "../card/pokedex-card";

interface Props {
  pokemons: PokedexModel.ViewModel[],
  carregando: boolean,
  erro: boolean
}

export class PokedexList extends Component<Props>{

  mostrarCards() {

    let elementos: Element[] = [];
    let tamanho = this.props.pokemons.length;

    for(let i = 0; i < tamanho; i++ )
      elementos.push(<PokedexCard key={i} pokemon={this.props.pokemons[i]}/>);

    return elementos

  }

  render() {

    return (
      <ScrollView style={{marginBottom: 50}}>
        { this.mostrarCards() }
      </ScrollView>
    )
  }

}
