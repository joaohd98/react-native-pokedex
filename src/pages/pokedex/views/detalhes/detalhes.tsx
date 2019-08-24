import React from "react";
import {Component} from "react";
import {ScrollView, View} from "react-native";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {PokedexProps} from "../../service/pokedex-props";
import {DetalhesHeader} from "./header/header";
import {DetalhesNomeImagem} from "./nome-imagem/nome-imagem";
import {DetalhesDescricao} from "./descricao/descricao";
import {DetalhesInformacoes} from "./informacoes/informacoes";
import {DetalhesEvolucoes} from "./evolucoes/evolucoes";
import {DetalhesEstatisticas} from "./estatisticas/estatisticas";
import {DetalhesTipoFraqueza} from "./tipo-fraqueza/tipo-fraqueza";
import {DetalhesCSS} from "./detalhes-css";
import {PokedexAction} from "../../redux/pokedex-action";

interface State {

}

class DetalhesPage extends Component<PokedexProps.DetalhesProps> {

  css = DetalhesCSS.detalhes;

  componentDidMount() {

    this.props.carregarDetalhes();

  }

  render() {

    return (
      <ScrollView>
        <DetalhesHeader/>
        <View style={this.css.view}>
          <DetalhesNomeImagem />
        </View>
        <View style={this.css.view}>
          <DetalhesEstatisticas />
        </View>
        <View style={this.css.view}>
          <DetalhesDescricao />
        </View>
        <View style={this.css.view}>
          <DetalhesInformacoes />
        </View>
        <View style={this.css.view}>
          <DetalhesTipoFraqueza />
        </View>
        <View style={this.css.view}>
          <DetalhesEvolucoes />
        </View>
      </ScrollView>

    )

  }

}

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    carregarDetalhes: () => PokedexAction.carregarDetalhes(),
  }, dispatch)
);

export const Detalhes = connect(mapStateToProps, mapDispatchToProps)(DetalhesPage);
