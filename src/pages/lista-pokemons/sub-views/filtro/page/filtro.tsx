import React, {Component} from "react";
import {ScrollView, View} from "react-native";
import {FiltroCSS} from "./filtro-css";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {FiltroTipos} from "./tipos/filtro-tipos";
import {FiltroHabilidades} from "./habilidades/filtro-habilidades";
import {FiltroAlturas} from "./alturas/filtro-alturas";
import {FiltroPesos} from "./pesos/filtro-pesos";
import {FiltroIntervalo} from "./intervalo/filtro-intervalo";
import {FiltroBotoes} from "./botoes/filtro-botoes";
import {FiltroProps} from "../services/filtro-props";
import {StatesReducers} from "../../../../../redux/reducer";
import {FiltroInitalState} from "../redux/filtro-reducer";

class FiltroPage extends Component<FiltroProps.Props> {

  private scrollView = React.createRef<ScrollView>();

  sucesso() {

    this.props.funcoes.aplicarFiltros();
    this.props.navigation.goBack();

  }

  redefinir() {

    this.props.funcoes.redefinirFiltros();

    this.scrollView.current!.scrollTo({ y: 0, animated: false });

  }

  render() {

    return (
      <View>
        <ScrollView ref={this.scrollView} style={FiltroCSS.VIEW.scrollView}>
          <FiltroTipos {...this.props.filtro} />
          <FiltroIntervalo {...this.props.filtro} />
          <FiltroHabilidades {...this.props.filtro} />
          <FiltroAlturas {...this.props.filtro} />
          <FiltroPesos {...this.props.filtro} />
        </ScrollView>
        <FiltroBotoes {...this.props.filtro} sucesso={this.sucesso.bind(this)} redefinir={this.redefinir.bind(this)}/>
      </View>
    )

  }

}

const mapStateToProps = (state: StatesReducers) => {
  return state.filtroReducer
};

const mapDispatchToProps = dispatch => ({
  funcoes: bindActionCreators(FiltroInitalState.funcoes, dispatch)
});


export const Filtro = connect(mapStateToProps, mapDispatchToProps)(FiltroPage);
