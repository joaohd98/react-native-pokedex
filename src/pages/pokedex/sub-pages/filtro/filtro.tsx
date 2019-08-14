import React from "react";
import {Component} from "react";
import {FlatList, ScrollView} from "react-native";
import {FiltroCSS} from "./filtro-css";
import {PokedexProps} from "../../service/pokedex-props";
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import {FiltroTipos} from "./tipos/filtro-tipos";
import {PokedexInteractor} from "../../service/pokedex-interactor";
import {FiltroHabilidades} from "./habilidades/filtro-habilidades";
import {FiltroAlturas} from "./alturas/filtro-alturas";
import {FiltroPesos} from "./pesos/filtro-pesos";
import {FiltroIntervalo} from "./intervalo/filtro-intervalo";
import {FiltroBotoes} from "./botoes/filtro-botoes";
import {PokedexAction} from "../../redux/pokedex-action";

class FiltroPage extends Component<PokedexProps.Filtro, PokedexProps.FiltroForm> {

  private scrollView = React.createRef<ScrollView>();

  UNSAFE_componentWillMount(){

    this.setState(PokedexInteractor.propsToForm(this.props));

  }

  sucesso() {

    this.props.aplicarFiltros(this.state);
    this.props.navigation.goBack();

  }

  redefinir() {

    this.props.redefinirFiltros(this.props.valores);

    this.scrollView.current!.scrollTo({ y: 0, animated: false });

  }

  render() {

    return (
      <ScrollView ref={this.scrollView} style={FiltroCSS.VIEW.scrollView}>
        <FiltroTipos {...this.state} />
        <FiltroIntervalo {...this.state} />
        <FiltroHabilidades {...this.state} />
        <FiltroAlturas {...this.state} />
        <FiltroPesos {...this.state} />
        <FiltroBotoes {...this.state} sucesso={this.sucesso.bind(this)} redefinir={this.redefinir.bind(this)} />
      </ScrollView>
    )

  }

}

const mapStateToProps = (state) => {
  return state.pokedexReducer.pesquisa
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    aplicarFiltros: (filtro: PokedexProps.FiltroForm) => PokedexAction.aplicarFiltros(filtro),
    redefinirFiltros: (filtro: PokedexProps.FiltroPropsValues) => PokedexAction.redefinirFiltros(filtro)
  }, dispatch)
);

export const Filtro = connect(mapStateToProps, mapDispatchToProps)(FiltroPage);
