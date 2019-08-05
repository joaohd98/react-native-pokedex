import React from "react";
import {Component} from "react";
import {ScrollView} from "react-native";
import {FiltroCSS} from "./filtro-css";
import {PokedexProps} from "../../service/PokedexProps";
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import {FiltroTipos} from "./tipos/filtro-tipos";
import {PokedexInteractor} from "../../service/PokedexInteractor";
import {FiltroHabilidades} from "./habilidades/filtro-habilidades";

class FiltroPage extends Component<PokedexProps.Filtro, PokedexProps.FiltroForm> {

  componentWillMount(){

    this.setState(PokedexInteractor.propsToForm(this.props));

  }

  render() {

    return (
      <ScrollView style={FiltroCSS.VIEW.scrollView}>
        <FiltroTipos {...this.state} />
        <FiltroHabilidades {...this.state} />
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
