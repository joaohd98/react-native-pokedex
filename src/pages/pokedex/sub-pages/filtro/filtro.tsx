import React from "react";
import {Component} from "react";
import {ScrollView} from "react-native";
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

  state = PokedexInteractor.propsToForm(this.props);

  componentWillReceiveProps(nextProps: Readonly<PokedexProps.Filtro>, nextContext: any) {

    this.setState(PokedexInteractor.propsToForm(nextProps));

  }

  sucesso() {

    this.props.aplicarFiltros(this.props, this.state);
    this.props.navigation.goBack();

  }

  redefinir() {

    this.props.redefinirFiltros(this.props);

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
    aplicarFiltros: (pesquisa: PokedexProps.Filtro, filtro: PokedexProps.FiltroForm) => PokedexAction.aplicarFiltros(pesquisa, filtro),
    redefinirFiltros: (filtro: PokedexProps.Filtro) => PokedexAction.redefinirFiltros(filtro)
  }, dispatch)
);

export const Filtro = connect(mapStateToProps, mapDispatchToProps)(FiltroPage);
