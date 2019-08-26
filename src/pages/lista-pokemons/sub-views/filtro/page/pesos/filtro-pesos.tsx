import React, {Component} from "react";
import {Image, TouchableWithoutFeedback, View} from "react-native";
import {FiltroCSS} from "../filtro-css";
import {FiltroHeader} from "../header/filtro-header";
import {images} from "../../../../../../assets";
import {FiltroProps} from "../../services/filtro-props";


export class FiltroPesos extends Component<FiltroProps.States> {

  mudarStatus(propiedade: "leve" | "medio" | "pesado") {

    this.props.peso[propiedade] = !this.props.peso[propiedade];

    this.setState(this.props);

  }

  render() {

    let css = FiltroCSS.PESO_ALTURA;

    return (
      <View>
        <FiltroHeader titulo={'Peso'} />
        <View style={css.list}>
          <TouchableWithoutFeedback onPress={() => this.mudarStatus('leve')}>
            <View style={css.listItens}>
              <Image source={this.props.peso.leve ? images.peso.leve.selecionado : images.peso.leve.normal} style={css.listItensImage} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.mudarStatus('medio')}>
            <View style={css.listItens}>
              <Image source={this.props.peso.medio ? images.peso.medio.selecionado : images.peso.medio.normal} style={css.listItensImage} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.mudarStatus('pesado')}>
            <View style={css.listItens}>
              <Image source={this.props.peso.pesado ? images.peso.pesado.selecionado : images.peso.pesado.normal} style={css.listItensImage} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    )

  }

}

