import React, {Component} from 'react';
import { View, Text } from "react-native";
import {DetalhesCSS} from "../detalhes-css";

export class DetalhesDescricao extends Component {

  private css = DetalhesCSS.descricao;

  render() {

    return (
      <View style={this.css.view}>
        <Text style={this.css.text}>
          There is a bud on this Pokémon's back. To support its weight,
          Ivysaur's legs and trunk grow thick and strong.
          If it starts spending more time lying in the sunlight,
          it's a sign that the bud will bloom into a large flower soon.
        </Text>
      </View>
    )
  }

}
