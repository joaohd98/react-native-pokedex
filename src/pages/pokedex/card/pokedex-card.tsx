import {Image, ImageSourcePropType, Text, View} from "react-native";
import React, {Component} from "react";
import {PokedexCardCSS} from "./pokedex-card-css";

export class PokedexCard extends Component{

  render() {

    let teste: ImageSourcePropType = {
      uri: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
      width: 200,
      height: 200,
    };

    return (
      <View style={PokedexCardCSS.card}>
        <View style={PokedexCardCSS.imagem}>
          <Image source={teste} />
        </View>
        <View style={PokedexCardCSS.cardContent}>
          <View>
            <Text style={PokedexCardCSS.numero}>N˚ 001</Text>
          </View>
          <View style={PokedexCardCSS.nomeContent}>
            <Text style={PokedexCardCSS.nome}>Bulbasaur</Text>
          </View>
          <View style={PokedexCardCSS.habilidadesContent}>
            <Text style={PokedexCardCSS.habilidade}>Grass</Text>
            <Text style={PokedexCardCSS.habilidade}>Poison</Text>
          </View>
        </View>
      </View>
    );

  }

}
