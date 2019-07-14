import React, {Component} from "react";
import { View, Text, FlatList} from "react-native";
import {PokedexModel} from "../../service/PokedexModel";
import {PokedexCard} from "../card/pokedex-card";
import {PokedexListCss} from "./pokedex-list-css";
import {Icones} from "../../../../helpers/icones/icones";

interface Props {
  pokemons: PokedexModel.ViewModel[],
  carregando: boolean,
}

export class PokedexList extends Component<Props>{

  mostrarSkeleton = () => {

    return <View/>;

  };

  mostrarSemCards = () => {

    let css = PokedexListCss.MOSTRAR_MENSAGEM;

    return (
      <View style={css.view}>
        <Text style={css.titulo}>Nenhum Pokémon corresponde à sua pesquisa!</Text>
        <Text style={css.subTitulo}>Experimente estas sugestões para encontrar um Pokémon:</Text>
        <View style={css.itemView}>
          <Text style={css.ponto}>{Icones.ponto}</Text>
          <Text style={css.item}>Reduza o número de parâmetros de pesquisa.</Text>
        </View>
        <View style={css.itemView}>
          <Text style={css.ponto}>{Icones.ponto}</Text>
          <Text style={css.item}>Procure apenas por um tipo de Pokémon de cada vez.</Text>
        </View>
        <View style={css.itemView}>
          <Text style={css.ponto}>{Icones.ponto}</Text>
          <Text style={css.item}>Tente procurar por tamanhos e formas diferentes.</Text>
        </View>
      </View>
    );

  };

  render() {

    return (
      <FlatList
        data={this.props.pokemons}
        keyExtractor={item => item.numero}
        renderItem={PokedexCard.renderItem}
        ListEmptyComponent={this.mostrarSemCards()}
      />
    )

    // onEndReached={this.loadRepositories}
    // onEndReachedThreshold={0.1}
    // ListFooterComponent={this.renderFooter}

  };

}
