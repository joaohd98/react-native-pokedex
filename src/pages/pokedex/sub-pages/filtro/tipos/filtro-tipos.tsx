import React, {Component} from "react";
import {FlatList, Text, View} from "react-native";
import {FiltroCSS} from "../filtro-css";
import {PokedexProps} from "../../../service/PokedexProps";
import {PokedexInteractor} from "../../../service/PokedexInteractor";

export class FiltroTipos extends Component<PokedexProps.Filtro> {

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
        { this.pegarTipos(item) }
        <View style={css.fraquezaForca}>
          <View style={css.fraquezaForcaBalao}>
            <Text style={css.centralizar}>T</Text>
          </View>
          <View style={css.fraquezaForcaBalao}>
            <Text style={css.centralizar}>F</Text>
          </View>
        </View>
      </View>
    )
  }

  render() {

    return (

      <View>
        <FlatList
          ListHeaderComponent={this.header()}
          keyExtractor={item => item}
          data={this.props.filtro.tipos}
          numColumns={2}
          renderItem={({item}) => this.tipos(item)}/>
      </View>
    )
  }


}
