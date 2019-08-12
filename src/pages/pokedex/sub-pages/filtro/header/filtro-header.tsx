import React, {Component} from "react";
import {PokedexProps} from "../../../service/PokedexProps";
import {Image, Text, TouchableWithoutFeedback, View} from "react-native";
import {FiltroCSS} from "../filtro-css";
import {images} from "../../../../../assets";

interface Props {
  titulo: string,
  subTitle?: Element
}
export class FiltroHeader extends Component<Props> {

  private css = FiltroCSS.HEADER;

  renderSubTitlle() {

    return this.props.subTitle ? <Text style={this.css.subTitle}> { this.props.subTitle } </Text> : <View/>;

  }

  render() {

    return (

      <View style={this.css.view}>
        <Text style={this.css.title}>{ this.props.titulo }</Text>
        { this.renderSubTitlle() }
      </View>

    )

  }

}

