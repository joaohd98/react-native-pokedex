import React, {Component} from "react";
import {PokedexProps} from "../../../service/PokedexProps";
import {Image, Text, TouchableWithoutFeedback, View} from "react-native";
import {FiltroCSS} from "../filtro-css";
import {images} from "../../../../../assets";


export class FiltroBotoes extends Component<PokedexProps.FiltroForm> {

  header() {

    let css = FiltroCSS.HEADER;

    return (
      <View>
        <Text style={css.title}>Altura</Text>
      </View>
    )

  }

  mudarStatus(propiedade: "pequeno" | "medio" | "grande") {

    this.props.altura[propiedade] = !this.props.altura[propiedade];

    this.setState(this.props);

  }

  render() {

    let css = FiltroCSS.PESO_ALTURA;

    return (
      <View>
        { this.header() }
        <View style={css.list}>
          <TouchableWithoutFeedback onPress={() => this.mudarStatus('pequeno')}>
            <View style={css.listItens}>
              <Image source={this.props.altura.pequeno ? images.altura.pequeno.selecionado : images.altura.pequeno.normal} style={css.listItensImage} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.mudarStatus('medio')}>
            <View style={css.listItens}>
              <Image source={this.props.altura.medio ? images.altura.medio.selecionado : images.altura.medio.normal} style={css.listItensImage} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.mudarStatus('grande')}>
            <View style={css.listItens}>
              <Image source={this.props.altura.grande ? images.altura.grande.selecionado : images.altura.grande.normal} style={css.listItensImage} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    )

  }

}

