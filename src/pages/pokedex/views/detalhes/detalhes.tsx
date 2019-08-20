import React from "react";
import {Component} from "react";
import {ScrollView} from "react-native";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {PokedexProps} from "../../service/pokedex-props";
import {DetalhesHeader} from "./header/header";
import {DetalhesNomeImagem} from "./nome-imagem/nome-imagem";
import {DetalhesDescricao} from "./descricao/descricao";

class DetalhesPage extends Component<PokedexProps.DetalhesProps> {

  render() {

    return (
      <ScrollView>
        <DetalhesHeader/>
        <DetalhesNomeImagem />
        <DetalhesDescricao />
      </ScrollView>

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

