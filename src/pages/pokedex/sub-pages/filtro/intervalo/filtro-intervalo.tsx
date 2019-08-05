import React, {Component} from "react";
import {PokedexProps} from "../../../service/PokedexProps";
import {View, Text} from "react-native";
// import MultiSlider from "react-native-multi-slider";

interface Props extends PokedexProps.FiltroForm{
  setState: Function
}

export class FiltroIntervalo extends Component<Props> {

  render() {

    // let limites = this.props.intervaloNumeros.limites;
    // let valores = this.props.intervaloNumeros.valores;

    return (
      <View>
        {/*<MultiSlider min={limites.minimo} max={limites.maximo}/>*/}
        {/*<View style={{flexDirection: "row"}}>*/}
        {/*  <Text style={{flex: 0.5, textAlign: "left", color: "white", fontSize: 15, fontWeight: "600"}}>0</Text>*/}
        {/*  <Text style={{flex: 0.5, textAlign: "right", color: "white", fontSize: 15, fontWeight: "600"}}>809</Text>*/}
        {/*</View>*/}
      </View>
    )
  }
}

