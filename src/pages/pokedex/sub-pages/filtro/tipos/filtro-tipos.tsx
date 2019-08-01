import React, {Component} from "react";
import {FlatList, Text, TouchableHighlight, TouchableWithoutFeedback, View} from "react-native";
import {FiltroCSS} from "../filtro-css";
import {PokedexProps} from "../../../service/PokedexProps";
import {PokedexInteractor} from "../../../service/PokedexInteractor";

interface Props extends PokedexProps.FiltroForm{
  setState: Function
}

export class FiltroTipos extends Component<Props> {

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
          <TouchableWithoutFeedback onPress={() => this.atualizar(item, 'tipo')} >
            <View style={{...css.fraquezaForcaBalao, backgroundColor: (item.tipo ? "#30a7d7" : "#F2F2F2")}}>
              <Text style={css.centralizar}>T</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.atualizar(item, 'fraqueza')} >
            <View style={{...css.fraquezaForcaBalao, backgroundColor: (item.fraqueza ? "#30a7d7" : "#F2F2F2")}}>
              <Text style={css.centralizar}>F</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    )

  }

  atualizar(item, campo) {

    item[campo] = !item[campo];

    this.setState(this.props);

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
