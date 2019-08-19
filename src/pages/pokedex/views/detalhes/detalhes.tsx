import React from "react";
import {Component} from "react";
import {View, Text} from "react-native";
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import {PokedexProps} from "../../service/pokedex-props";
import {Helpers} from "../../../../helpers/helpers";

class DetalhesPage extends Component<PokedexProps.DetalhesProps> {

  //https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png

  render() {

    let menores = Helpers.pegarPorcentagem(10, "width");
    let maiores = Helpers.pegarPorcentagem(50, "width");

    return (
      <View style={{flexDirection: "row"}}>
        <View style={{width: menores, height: 100, backgroundColor: "#a4a4a4", transform: [{ rotate: '60deg'}]}} />
        <View style={{width: maiores, height: 50, backgroundColor: "#a4a4a4", marginLeft: menores * -1}}>
          <Text style={{textAlign: "right"}}>N 2</Text>
        </View>
        <View style={{width: maiores, height: 50, backgroundColor: "#a4a4a4", marginRight: menores * -1}}>
            <Text style={{textAlign: "left"}}>N 3</Text>
        </View>
        <View style={{width: menores, height: 100, backgroundColor: "#a4a4a4", transform: [{ rotate: '120deg'}]}} />
      </View>
    )

  }

}

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({

  }, dispatch)
);

export const Detalhes = connect(mapStateToProps, mapDispatchToProps)(DetalhesPage);

