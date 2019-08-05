import * as React from "react";
import {Image, Text, View} from "react-native";
import {PokedexProps} from "../../../service/PokedexProps";
import RNPickerSelect, {Item} from 'react-native-picker-select';
import {FiltroCSS} from "../filtro-css";
import {images} from "../../../../../assets";

export class FiltroHabilidades extends React.Component<PokedexProps.FiltroForm> {

  header() {

    let css = FiltroCSS.HEADER;

    return (
      <View>
        <Text style={css.title}>Habilidade</Text>
      </View>
    )

  }

  gerarItens() {

    let itens: Item[] = [];

    for (let habilidade of this.props.habilidades.todas) {

      itens.push({
        label: habilidade,
        value: habilidade,
        key: habilidade,
      })

    }

    return itens;

  }

  selecionarHabilidade(item) {

    this.props.habilidades.selecionada = item;

    this.setState(this.props.habilidades);

  }

  render() {

    let css = FiltroCSS.HABILIDADES;

    const placeholder = {
      label: 'Todas',
      value: null,
    };


    return (
      <View>
        { this.header() }
        <RNPickerSelect
          placeholder={placeholder}
          items={this.gerarItens()}
          style={css.select}
          Icon={() => <Image style={{width: 40, height: 40}} source={images.pokeball} />}
          value={this.props.habilidades.selecionada}
          useNativeAndroidPickerStyle={false}
          onValueChange={(item) => this.selecionarHabilidade(item)}/>
      </View>
    );

  }

}
