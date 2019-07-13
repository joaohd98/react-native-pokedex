import React, {Component} from "react";
import {ScrollView, View, Text} from "react-native";
import {PokedexModel} from "../../service/PokedexModel";
import {PokedexCard} from "../card/pokedex-card";
import {PokedexListCss} from "./pokedex-list-css";
import {Icones} from "../../../../helpers/icones/icones";

interface Props {
  pokemons: PokedexModel.ViewModel[],
  carregando: boolean,
  erro: boolean
}

export class PokedexList extends Component<Props>{

  mostrarCards() {

    let css = PokedexListCss.MOSTRAR_CARDS;

    let elementos: Element[] = [];
    let tamanho = this.props.pokemons.length;

    for(let i = 0; i < tamanho; i++ )
      elementos.push(<PokedexCard key={i} pokemon={this.props.pokemons[i]}/>);


    return (
      <ScrollView style={css.scrollView}>
        { elementos }
      </ScrollView>
    )

  }

  mostrarSemCards() {

    let css = PokedexListCss.MOSTRAR_SEM_CARDS;

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

  }

  mostrarSkeleton() {

    return <View/>;

  }

  mostrarErro() {

    return <View/>;

  }

  render() {

    let props = this.props;

     return props.carregando ? this.mostrarSkeleton() : props.erro ? this.mostrarErro() :
      props.pokemons.length == 0 ? this.mostrarSemCards() : this.mostrarCards()

  }

}
