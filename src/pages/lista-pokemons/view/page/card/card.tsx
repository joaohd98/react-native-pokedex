import {Image, ImageSourcePropType, Text, TouchableHighlight, View} from "react-native";
import React, {Component} from "react";
import {Icones} from "../../../../../helpers/icones/icones";
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {ListaPokemonsModel} from "../../services/lista-pokemons-model";
import {ListaPokemonsInteractor} from "../../services/lista-pokemons-interactor";
import {ListaPokemonsCss} from "../lista-pokemons-css";

interface Props {
  pokemon?: ListaPokemonsModel.ViewModel,
  skeleton?: boolean,
  irParaDetalhes?: () => void
}

export class ListaPokemonsCard extends Component<Props> {

  private css = ListaPokemonsCss.PokedexCard;

  private pegarTipos = (pokemon) => {

    let elementos: Element[] = [];

    for(let tipo of pokemon.tipos) {

      let {borderTopColor, borderBottomColor, color} = ListaPokemonsInteractor.pegarCorFundoHabilidade(tipo);

      elementos.push(
        <View key={tipo} style={{...this.css.habilidadeLabel, borderTopColor, borderBottomColor}}>
          <Text style={{...this.css.habilidadeText, color}}>{tipo}</Text>
        </View>
      );

    }

    return elementos

  };

  private mostrarSemCards = () => {

    let css = ListaPokemonsCss.MOSTRAR_MENSAGEM;

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

  private gerarCard = (pokemon: ListaPokemonsModel.ViewModel) => {


    let imagem: ImageSourcePropType = {
      uri: pokemon.foto,
      width: 200,
      height: 200,
    };

    return (
      <View style={this.css.card}>
        <TouchableHighlight style={{borderRadius: 10}} onPress={() => this.props.irParaDetalhes ? this.props.irParaDetalhes() : {}}>
          <View style={this.css.imagem}>
            <Image source={imagem} />
          </View>
        </TouchableHighlight>
        <View style={this.css.cardContent}>
          <View>
            <Text style={this.css.numero}>N˚ {pokemon.numero}</Text>
          </View>
          <View style={this.css.nomeContent}>
            <Text style={this.css.nome}>{pokemon.nome}</Text>
          </View>
          <View style={this.css.habilidadesContent}>
            { this.pegarTipos(pokemon) }
          </View>
        </View>
      </View>
    );

  };

  private gerarCardSkeleton = () => {

    let cssSkeleton = ListaPokemonsCss.PokedexCardSkeleton;

    return (
      <View style={this.css.card}>
        <View style={this.css.imagem}>
          <ShimmerPlaceHolder style={cssSkeleton.imagem} autoRun={true}/>
        </View>
        <View style={this.css.cardContent}>
          <View>
            <ShimmerPlaceHolder style={cssSkeleton.numero} autoRun={true}/>
          </View>
          <View style={this.css.nomeContent}>
            <ShimmerPlaceHolder style={cssSkeleton.nome} autoRun={true}/>
          </View>
          <View style={this.css.habilidadesContent}>
            <ShimmerPlaceHolder style={cssSkeleton.habilidades} autoRun={true}/>
          </View>
        </View>
      </View>
    )

  };

  render() {

    let props = this.props;

    return props.pokemon ? this.gerarCard(props.pokemon) : props.skeleton ? this.gerarCardSkeleton() : this.mostrarSemCards();

  }


}
