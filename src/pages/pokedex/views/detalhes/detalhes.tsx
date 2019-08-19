import React from "react";
import {Component} from "react";
import {View, Text} from "react-native";
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import {PokedexProps} from "../../service/pokedex-props";
import {Helpers} from "../../../../helpers/helpers";
import Icon from 'react-native-vector-icons/FontAwesome';

class DetalhesPage extends Component<PokedexProps.DetalhesProps> {

  //https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png

  render() {

    let menores = Helpers.pegarPorcentagem(10, "width");
    let maiores = Helpers.pegarPorcentagem(50, "width");

    return (
      <View style={{flexDirection: "row"}}>
        <View style={{width: menores, height: 100, backgroundColor: "#a4a4a4", transform: [{ rotate: '60deg'}]}} />
        <View style={{width: maiores, height: 50, backgroundColor: "#a4a4a4", marginLeft: menores * -1, flexDirection: "row", paddingTop: 15, paddingHorizontal: 15, zIndex: 100, elevation: 100, borderRightWidth: 0.5, borderRightColor: "#FFF"}}>
          <View style={{flex: 0.3}}>
            <Text style={{textAlign: "left"}}>
              <Icon name="chevron-circle-left" size={25} color={"#FFF"}/>
            </Text>
          </View>
          <View style={{flex: 0.7}}>
            <Text style={{fontSize: 20, fontWeight: "bold", color: "white", textAlign: "left"}}>Nº 001</Text>
          </View>
        </View>
        <View style={{width: maiores, height: 50, backgroundColor: "#a4a4a4", marginRight: menores * -1, flexDirection: "row", paddingTop: 15, paddingHorizontal: 15, zIndex: 100, elevation: 100, borderLeftWidth: 0.5, borderLeftColor: "#FFF"}}>
          <View style={{flex: 0.7}}>
            <Text style={{fontSize: 20, fontWeight: "bold", color: "white", textAlign: "right"}}>Nº 002</Text>
          </View>
          <View style={{flex: 0.3}}>
            <Text style={{textAlign: "right"}}>
              <Icon name="chevron-circle-right" size={25} color={"#FFF"}/>
            </Text>
          </View>
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

