import React, {Component} from 'react';
import {Image, ImageSourcePropType, Text, View} from "react-native";
import {DetalhesCSS} from "../detalhes-css";
import {Helpers} from "../../../../../../helpers/helpers";
import {DetalhesModel} from "../../services/detalhes-model";

export class DetalhesNomeImagem extends Component<DetalhesModel.ViewModel> {

  private css = DetalhesCSS.nomeImagem;

  render() {

    let imagem: ImageSourcePropType = {
      uri: this.props.foto,
      width: Helpers.pegarPorcentagem(80, "width"),
      height: Helpers.pegarPorcentagem(40, "height"),
    };

    return (
      <View style={this.css.view}>
        <View style={this.css.viewText}>
          <Text style={this.css.text}>{this.props.nome}</Text>
          <Text style={this.css.number}>Nº {this.props.numero}</Text>
        </View>
        <View style={this.css.viewImage}>
          <Image style={this.css.image} source={imagem} />
        </View>
      </View>
    );

  }

}
