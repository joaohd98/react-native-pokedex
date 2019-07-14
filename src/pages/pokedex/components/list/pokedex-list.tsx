import React, {Component} from "react";
import {ScrollView, View, Text, ImageSourcePropType, Image, FlatList} from "react-native";
import {PokedexModel} from "../../service/PokedexModel";
import {PokedexCard} from "../card/pokedex-card";
import {PokedexListCss} from "./pokedex-list-css";
import {Icones} from "../../../../helpers/icones/icones";
import {PokedexInput} from "../input/pokedex-input";

interface Props {
  pokemons: PokedexModel.ViewModel[],
  carregando: boolean,
  erro: boolean
}

export class PokedexList extends Component<Props>{

  mostrarCards = () => {

    return (
      <FlatList
        data={this.props.pokemons}
        keyExtractor={(item: PokedexModel.ViewModel) => item.numero}
        renderItem={PokedexCard.renderItem}
        ListEmptyComponent={this.mostrarSemCards()}
        ListHeaderComponent={<PokedexInput />}
      />
    )

  };

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

  mostrarErro = () =>{

    let css = PokedexListCss.MOSTRAR_MENSAGEM;

    return (
      <View style={css.view}>
        <Text style={css.titulo}>Ooops! Aconteceu algo</Text>
      </View>
    )

  };

  render = () => {

    let props = this.props;

    return props.carregando ? this.mostrarSkeleton() : props.erro ? this.mostrarErro() : this.mostrarCards();

  };

}
