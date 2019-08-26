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
import {FiltroInteractor} from "../services/filtro-interactor";

class FiltroPage extends Component<FiltroProps.Props, FiltroProps.States> {

  private scrollView = React.createRef<ScrollView>();

  state = FiltroInteractor.propsToForm(this.props);

  componentWillReceiveProps(nextProps: Readonly<FiltroProps.Props>, nextContext: any) {

    this.setState(FiltroInteractor.propsToForm(nextProps));

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
      <View>
        <ScrollView ref={this.scrollView} style={FiltroCSS.VIEW.scrollView}>
          <FiltroTipos {...this.state} />
          <FiltroIntervalo {...this.state} />
          <FiltroHabilidades {...this.state} />
          <FiltroAlturas {...this.state} />
          <FiltroPesos {...this.state} />
        </ScrollView>
        <FiltroBotoes {...this.state} sucesso={this.sucesso.bind(this)} redefinir={this.redefinir.bind(this)} />
      </View>
    )

  }

}

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
);


export const Filtro = connect(mapStateToProps, mapDispatchToProps)(FiltroPage);
