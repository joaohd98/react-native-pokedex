import React, {Component} from 'react';
import {Text, View} from "react-native";
import {DetalhesCSS} from "../detalhes-css";
import {DetalhesModel} from "../../services/detalhes-model";

export class DetalhesDescricao extends Component<DetalhesModel.ViewModel> {

  private css = DetalhesCSS.descricao;

  render() {

    return (
      <View style={this.css.view}>
        <Text style={this.css.text}>
          {this.props.descricao}
        </Text>
      </View>
    )
  }

}
