import React from "react";
import {Component} from "react";
import {View, Text, TouchableHighlight, TouchableOpacity} from "react-native";
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import {PokedexProps} from "../../service/pokedex-props";
import {Helpers} from "../../../../helpers/helpers";
import Icon from 'react-native-vector-icons/FontAwesome';
import {DetalhesHeader} from "./header/header";

class DetalhesPage extends Component<PokedexProps.DetalhesProps> {

  //https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png

  render() {

    return (
      <DetalhesHeader/>
    )

  }

}

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({

  }, dispatch)
);

export const Detalhes = connect(mapStateToProps, mapDispatchToProps)(DetalhesPage);

