import React, {Component} from "react";
import {FlatList, Text, TouchableHighlight, View} from "react-native";
import {FiltroCSS} from "../filtro-css";
import {PokedexProps} from "../../../service/PokedexProps";
import {PokedexInteractor} from "../../../service/PokedexInteractor";

export class FiltroTipos extends Component<PokedexProps.FiltroForm> {

  header() {

    let css = FiltroCSS.TIPOS_FRAQUEZAS;

    return (
      <View>
        <Text style={css.title}>Tipo e Fraqueza</Text>
        <Text style={css.subTitle}>
          <Text style={css.strong}>T</Text> = Tipo <Text style={css.strong}>F</Text> = Fraqueza
        </Text>
      </View>
    )

  }

  private pegarTipos = (tipo) => {

    let css = FiltroCSS.TIPOS_FRAQUEZAS;

    let { borderTopColor, borderBottomColor, color } = PokedexInteractor.pegarCorFundoHabilidade(tipo);

    return (
      <View key={tipo} style={{...css.tipo, borderTopColor, borderBottomColor}}>
        <Text style={{...css.tipoTexto, color}}>{ tipo }</Text>
      </View>
    );

  };

  tipos(item) {

    let css = FiltroCSS.TIPOS_FRAQUEZAS;

    return (
      <View style={css.rowTipos}>
        { this.pegarTipos(item.nome) }
        <View style={css.fraquezaForca}>
          <TouchableHighlight style={css.fraquezaForcaBalao}>
            <Text style={css.centralizar}>T</Text>
          </TouchableHighlight>
          <TouchableHighlight style={css.fraquezaForcaBalao}>
            <Text style={css.centralizar}>F</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
    
  }

  render() {

    return (

      <View>
        <FlatList
          ListHeaderComponent={this.header()}
          keyExtractor={item => item.nome}
          data={this.props.tipos}
          numColumns={2}
          renderItem={({item}) => this.tipos(item)}/>
      </View>

    )

  }


}
