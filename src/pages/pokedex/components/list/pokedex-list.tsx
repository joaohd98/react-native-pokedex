import React, {Component} from "react";
import {PokedexModel} from "../../service/PokedexModel";
import {PokedexCard} from "../card/pokedex-card";
import {PokedexCSS} from "../../pokedex-css";
import {FlatList, ScrollView, Text, View} from "react-native";
import {Icones} from "../../../../helpers/icones/icones";

interface Props {
  pokemons: PokedexModel.ViewModel[],
  carregando: boolean,
}

export class PokedexList extends Component<Props>{

  renderList = () => {

    return (
      <FlatList
        data={this.props.pokemons}
        keyExtractor={item => item.numero}
        renderItem={iterator  => <PokedexCard pokemon={iterator.item} />}
        ListEmptyComponent={<PokedexCard/>}
      />
    )

  };

  renderListSkeleton = () => {

    let cards: Element[] = [];

    for(let i = 0; i <= 5; i++)
        cards.push(<PokedexCard key={i} skeleton={true}/>);

    return (
      <ScrollView scrollEnabled={false}>
        { cards }
      </ScrollView>
    )

  };


  render = () => {

    return this.props.carregando ? this.renderListSkeleton() : this.renderList();

  };

}
