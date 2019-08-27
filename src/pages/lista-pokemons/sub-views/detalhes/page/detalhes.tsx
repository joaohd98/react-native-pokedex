import React, {Component} from "react";
import {ScrollView, View} from "react-native";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {DetalhesHeader} from "./header/header";
import {DetalhesNomeImagem} from "./nome-imagem/nome-imagem";
import {DetalhesDescricao} from "./descricao/descricao";
import {DetalhesInformacoes} from "./informacoes/informacoes";
import {DetalhesEvolucoes} from "./evolucoes/evolucoes";
import {DetalhesEstatisticas} from "./estatisticas/estatisticas";
import {DetalhesTipoFraqueza} from "./tipo-fraqueza/tipo-fraqueza";
import {DetalhesCSS} from "./detalhes-css";
import {DetalhesProps} from "../services/detalhes-props";
import {StatesReducers} from "../../../../../redux/reducer";
import {DetalhesInitalState} from "../redux/detalhes-reducer";

class DetalhesPage extends Component<DetalhesProps.Props> {

  css = DetalhesCSS.detalhes;

  componentDidMount() {

    this.props.funcoes.carregarDetalhes(this.props.pokemonSelecionado!);

  }

  render() {

    let html = this.props.pokemonSelecionado ? (

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

    ) : (

      <View/>

    );

    return html;

  }

}

const mapStateToProps = (state: StatesReducers) => {
  return state.detalhesReducer
};

const mapDispatchToProps = dispatch => ({
  funcoes: bindActionCreators(DetalhesInitalState.funcoes, dispatch)
});

export const Detalhes = connect(mapStateToProps, mapDispatchToProps)(DetalhesPage);
