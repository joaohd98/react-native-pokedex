import React, {Component} from "react";
import {PokedexProps} from "../../../service/PokedexProps";
import {View, Text} from "react-native";
import  MultiSlider from "@ptomasroos/react-native-multi-slider";
import {Helpers} from "../../../../../helpers/helpers";

export class FiltroIntervalo extends Component<PokedexProps.FiltroForm> {

  render() {

    let limites = this.props.intervaloNumeros.limites;
    let valores = this.props.intervaloNumeros.valores;

    return (
      <View>
        <View style={{flexDirection: "row"}}>
          <MultiSlider
            trackStyle={{backgroundColor:'#5e5e5e'}}
            selectedStyle={{backgroundColor:"#bdc3c7"}}
            values={[valores[0], valores[1]]}
            sliderLength={Helpers.pegarPorcentagem(90, "width")}
            min={limites[0]}
            max={limites[1]}
            allowOverlap={false}
            snapped={false}
            onValuesChangeFinish={novos_valores => {

              this.props.intervaloNumeros.valores = novos_valores;
              this.setState(this.props);

            }}
          />
        </View>
        <View style={{flexDirection: "row"}}>
          <View style={{flex: 0.5}}>
            <Text style={{textAlign: "left", fontSize: 16, fontWeight: "800", color: "#FFF"}}>{ valores[0] }</Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text style={{textAlign: "right", fontSize: 16, fontWeight: "800", color: "#FFF"}}>{ valores[1] }</Text>
          </View>
        </View>
      </View>
    )
  }
}

