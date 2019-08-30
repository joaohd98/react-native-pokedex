import React, {Component} from 'react';
import {Text, View} from "react-native";
import {DetalhesCSS} from "../detalhes-css";
import {DetalhesProps} from "../../services/detalhes-props";

export class DetalhesDescricao extends Component<DetalhesProps.Props> {

  private css = DetalhesCSS.descricao;

  render() {

    let detalhes = this.props.pokemonDetalhes!;

    return (
      <View style={this.css.view}>
        <Text style={this.css.text}>
          {detalhes.descricao}
        </Text>
      </View>
    )
  }

}
