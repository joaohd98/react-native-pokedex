import React, {Component} from "react";
import {PokedexProps} from "../../../service/PokedexProps";
import {View, Text, YellowBox} from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import {Helpers} from "../../../../../helpers/helpers";
import {FiltroCSS} from "../filtro-css";

export class FiltroIntervalo extends Component<PokedexProps.FiltroForm> {

  header() {

    let css = FiltroCSS.HEADER;

    return (
      <View>
        <Text style={css.title}>Intervalo de números</Text>
      </View>
    )

  }

  render() {

    //
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);

    let limites = this.props.intervaloNumeros.limites;
    let valores = this.props.intervaloNumeros.valores;

    const mudarValores = (novosValores: number[]) => {

      this.props.intervaloNumeros.valores = novosValores;
      this.setState(this.props);

    };

    return (
      <View>
        {this.header()}
        <View style={{flexDirection: "row"}}>
          <MultiSlider
            trackStyle={{backgroundColor: '#5e5e5e'}}
            selectedStyle={{backgroundColor: "#bdc3c7"}}
            values={valores}
            sliderLength={Helpers.pegarPorcentagem(90, "width")}
            min={limites[0]}
            max={limites[1]}
            allowOverlap={false}
            snapped={false}
            onValuesChangeFinish={novosValores => mudarValores(novosValores)}
          />
        </View>
        <View style={{flexDirection: "row"}}>
          <View style={{flex: 0.5}}>
            <Text style={{textAlign: "left", fontSize: 16, fontWeight: "800", color: "#FFF"}}>{valores[0]}</Text>
          </View>
          <View style={{flex: 0.5}}>
            <Text style={{textAlign: "right", fontSize: 16, fontWeight: "800", color: "#FFF"}}>{valores[1]}</Text>
          </View>
        </View>
      </View>
    )
  }
}

