import {Image, ImageSourcePropType, Text, View} from "react-native";
import React, {Component} from "react";
import {PokedexCardCSS} from "./pokedex-card-css";
import {PokedexModel} from "../../service/PokedexModel";

interface Props {
  pokemon: PokedexModel.ViewModel
}

export class PokedexCard extends Component<Props>{

  pegarTipos() {

    let pokemon = this.props.pokemon;

    let elementos: Element[] = [];

    for(let tipo of pokemon.tipos) {
      elementos.push(<Text key={tipo} style={PokedexCardCSS.habilidade}>{tipo}</Text>)
    }

    return elementos

  }

  render() {

    let pokemon = this.props.pokemon;

    let imagem: ImageSourcePropType = {
      uri: pokemon.foto,
      width: 200,
      height: 200,
    };

    return (
      <View style={PokedexCardCSS.card}>
        <View style={PokedexCardCSS.imagem}>
          <Image source={imagem} />
        </View>
        <View style={PokedexCardCSS.cardContent}>
          <View>
            <Text style={PokedexCardCSS.numero}>N˚ {pokemon.numero}</Text>
          </View>
          <View style={PokedexCardCSS.nomeContent}>
            <Text style={PokedexCardCSS.nome}>{pokemon.nome}</Text>
          </View>
          <View style={PokedexCardCSS.habilidadesContent}>
            { this.pegarTipos() }
          </View>
        </View>
      </View>
    );

  }

}
