import React, {Component} from 'react';
import {Image, ImageSourcePropType, Text, View} from "react-native";
import {DetalhesCSS} from "../detalhes-css";
import {DetalhesProps} from "../../services/detalhes-props";

export class DetalhesNomeImagem extends Component<DetalhesProps.Props> {

  private css = DetalhesCSS.nomeImagem;

  render() {

    let detalhes = this.props.pokemonDetalhes!;

    let imagem: ImageSourcePropType = {
      uri: detalhes.foto,
      width: 250,
      height: 250,
    };

    return (
      <View style={this.css.view}>
        <View style={this.css.viewText}>
          <Text style={this.css.text}>{detalhes.nome}</Text>
          <Text style={this.css.number}>Nº {detalhes.numero}</Text>
        </View>
        <View style={this.css.viewImage}>
          <Image style={this.css.image} source={imagem} />
        </View>
      </View>
    );

  }

}
