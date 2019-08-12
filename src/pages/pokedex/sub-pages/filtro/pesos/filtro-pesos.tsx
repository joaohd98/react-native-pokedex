import React, {Component} from "react";
import {PokedexProps} from "../../../service/PokedexProps";
import {View, Text, Image, TouchableWithoutFeedback} from "react-native";
import {images} from "../../../../../assets";
import {FiltroCSS} from "../filtro-css";
import {Helpers} from "../../../../../helpers/helpers";
import {FiltroHeader} from "../header/filtro-header";


export class FiltroPesos extends Component<PokedexProps.FiltroForm> {

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

