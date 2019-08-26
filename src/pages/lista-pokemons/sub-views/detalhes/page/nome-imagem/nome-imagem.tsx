import React, {Component} from 'react';
import {Image, ImageSourcePropType, Text, View} from "react-native";
import {DetalhesCSS} from "../detalhes-css";
import {Helpers} from "../../../../../../helpers/helpers";

export class DetalhesNomeImagem extends Component {

  private css = DetalhesCSS.nomeImagem;

  render() {

    let imagem: ImageSourcePropType = {
      uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
      width: Helpers.pegarPorcentagem(80, "width"),
      height: Helpers.pegarPorcentagem(40, "height"),
    };

    return (
      <View style={this.css.view}>
        <View style={this.css.viewText}>
          <Text style={this.css.text}>Ivysaur</Text>
          <Text style={this.css.number}>Nº002</Text>
        </View>
        <View style={this.css.viewImage}>
          <Image style={this.css.image} source={imagem} />
        </View>
      </View>
    );

  }

}
