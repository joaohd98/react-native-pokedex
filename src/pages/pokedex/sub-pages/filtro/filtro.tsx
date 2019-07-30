import React from "react";
import {Component} from "react";
import {View, Text, FlatList, ScrollView} from "react-native";
import {Helpers} from "../../../../helpers/helpers";
import {FiltroCSS} from "./filtro-css";
import {PokedexProps} from "../../service/PokedexProps";
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';

class FiltroPage extends Component<PokedexProps.Filtro> {

  /*
   * TIPOS
   */

  header() {

    let css = FiltroCSS.TIPOS_FRAQUEZAS;

    return (
      <View>
        <Text style={css.title}>Tipo e Fraqueza</Text>
        <Text style={css.subTitle}>
          <Text style={css.strong}>T</Text> = Tipo  <Text style={css.strong}>F</Text> = Fraqueza
        </Text>
      </View>
    )
  }

  tipos(item) {

    let css = FiltroCSS.TIPOS_FRAQUEZAS;

    return (
      <View key={item}  style={{flexDirection: "row", flex: 1, marginVertical: 5}}>
        <View style={{flex: 0.6, marginHorizontal: 2.5, backgroundColor: 'red', padding: 5, borderRadius: 20}}>
          <Text style={{textAlign: "center"}}>DRAGON</Text>
        </View>
        <View style={{flex: 0.2, marginHorizontal: 2, backgroundColor: 'red', padding: 5, borderRadius: 100}}>
          <Text style={{textAlign: "center"}}>T</Text>
        </View>
        <View style={{flex: 0.2, marginHorizontal: 2, backgroundColor: 'red', padding: 5, borderRadius: 100}}>
          <Text style={{textAlign: "center"}}>F</Text>
        </View>
      </View>
    )
  }

  renderTipos() {

    return (
      <View>
        <FlatList
          ListHeaderComponent={this.header()}
          data={['', '', '', '']}
          numColumns={2}
          renderItem={({item}) => this.tipos(item)} />
      </View>

    )
  }

  render() {

    console.log(this.props);

    return (
      <ScrollView style={{backgroundColor: "#424242", flex: 1, paddingHorizontal: Helpers.pegarPorcentagem(5)}}>
        {this.renderTipos()}
      </ScrollView>
    )

  }

}



const mapStateToProps = (state) => {
  return state.pokedexReducer.pesquisa
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
);

export const Filtro = connect(mapStateToProps, mapDispatchToProps)(FiltroPage);
