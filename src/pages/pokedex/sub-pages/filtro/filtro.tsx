import React, {Component} from "react";
import {ScrollView} from "react-native";
import {FiltroCSS} from "./filtro-css";
import {PokedexProps} from "../../service/pokedex-props";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {FiltroTipos} from "./tipos/filtro-tipos";
import {PokedexInteractor} from "../../service/pokedex-interactor";
import {FiltroHabilidades} from "./habilidades/filtro-habilidades";
import {FiltroAlturas} from "./alturas/filtro-alturas";
import {FiltroPesos} from "./pesos/filtro-pesos";
import {FiltroIntervalo} from "./intervalo/filtro-intervalo";
import {FiltroBotoes} from "./botoes/filtro-botoes";

class FiltroPage extends Component<PokedexProps.Filtro, PokedexProps.FiltroForm> {

  UNSAFE_componentWillMount(){

    this.setState(PokedexInteractor.propsToForm(this.props));

  }

  render() {

    return (
      <ScrollView style={FiltroCSS.VIEW.scrollView}>
        <FiltroTipos {...this.state} />
        <FiltroIntervalo {...this.state} />
        <FiltroHabilidades {...this.state} />
        <FiltroAlturas {...this.state} />
        <FiltroPesos {...this.state} />
        <FiltroBotoes {...this.state} />
      </ScrollView>
    )

  }

}



const mapStateToProps = (state) => {
  return state.pokedexReducer.pesquisa
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
);

export const Filtro = connect(mapStateToProps, mapDispatchToProps)(FiltroPage);
