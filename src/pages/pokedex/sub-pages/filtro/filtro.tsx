import React from "react";
import {Component} from "react";
import {ScrollView} from "react-native";
import {FiltroCSS} from "./filtro-css";
import {PokedexProps} from "../../service/PokedexProps";
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import {FiltroTipos} from "./tipos/filtro-tipos";

class FiltroPage extends Component<PokedexProps.Filtro> {

  render() {

    return (
      <ScrollView style={FiltroCSS.VIEW.scrollView}>
        <FiltroTipos {...this.props} />
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
