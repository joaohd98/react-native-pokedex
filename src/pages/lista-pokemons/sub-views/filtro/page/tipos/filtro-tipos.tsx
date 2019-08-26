import React, {Component} from "react";
import {FlatList, Text, TouchableWithoutFeedback, View} from "react-native";
import {FiltroCSS} from "../filtro-css";
import {FiltroHeader} from "../header/filtro-header";
import {FiltroProps} from "../../services/filtro-props";
import {ListaPokemonsInteractor} from "../../../../view/services/lista-pokemons-interactor";

export class FiltroTipos extends Component<FiltroProps.States> {

  private pegarTipos = (tipo) => {

    let css = FiltroCSS.TIPOS_FRAQUEZAS;

    let {backgroundColor, borderBottomColor, color} = ListaPokemonsInteractor.pegarCorFundoHabilidade(tipo);

    return (
      <View key={tipo} style={{...css.tipo, backgroundColor, borderBottomColor}}>
        <Text style={{...css.tipoTexto, color}}>{ tipo }</Text>
      </View>
    );

  };

  tipos(item) {

    let css = FiltroCSS.TIPOS_FRAQUEZAS;

    const backgroundColor = (selecionado: boolean) => selecionado ? "#30a7d7" : "#F2F2F2";
    const selecionar = (campo: string) => this.atualizar(item, campo);

    return (
      <View style={css.rowTipos}>
        { this.pegarTipos(item.nome) }
        <View style={css.fraquezaForca}>
          <TouchableWithoutFeedback onPress={() => selecionar('tipo')} >
            <View style={{...css.fraquezaForcaBalao, backgroundColor: backgroundColor(item.tipo)}}>
              <Text style={css.centralizar}>T</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => selecionar('fraqueza')} >
            <View style={{...css.fraquezaForcaBalao, backgroundColor: backgroundColor(item.fraqueza)}}>
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

  renderSubtitle() {

    return (
      <Text>
        <Text style={{fontWeight: "bold"}}>T</Text> = Tipo <Text style={{fontWeight: "bold"}}>F</Text> = Fraqueza
      </Text>
    );

  }

  render() {

    return (

      <View>
        <FlatList
          ListHeaderComponent={<FiltroHeader titulo={"Tipo e Fraqueza"} subTitle={this.renderSubtitle()} />}
          keyExtractor={item => item.nome}
          data={this.props.tipos}
          numColumns={2}
          renderItem={({item}) => this.tipos(item)}/>
      </View>

    )

  }

}
