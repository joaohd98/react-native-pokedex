import React, {Component} from "react";
import {PokedexProps} from "../../../service/pokedex-props";
import {Text, View, YellowBox} from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import {Helpers} from "../../../../../helpers/helpers";
import {FiltroHeader} from "../header/filtro-header";
import {FiltroCSS} from "../filtro-css";
import Icon from 'react-native-vector-icons/FontAwesome';

export class FiltroIntervalo extends Component<PokedexProps.FiltroForm> {

  private css = FiltroCSS.INTERVALO;

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
        <FiltroHeader titulo={"Intervalo de números"} />
        <View style={this.css.view}>
          <MultiSlider
            isMarkersSeparated={true}
            trackStyle={{backgroundColor: '#5e5e5e'}}
            selectedStyle={{backgroundColor: "#bdc3c7"}}
            values={valores}
            sliderLength={Helpers.pegarPorcentagem(80, "width")}
            min={limites[0]}
            max={limites[1]}
            snapped={false}
            customMarkerLeft={() =>
              <View style={this.css.marker}>
                <Icon name={"minus-circle"} size={35} color={"#000"} />
              </View>
            }
            customMarkerRight={() =>
              <View style={this.css.marker}>
                <Icon name={"plus-circle"} size={35} color={"#000"}/>
              </View>
            }
            onValuesChangeFinish={novosValores => mudarValores(novosValores)}
          />
        </View>
        <View style={this.css.valuesView}>
          <View style={this.css.valueViewFlex}>
            <Text style={[this.css.valueViewTextFirst, this.css.valueViewText]}>{valores[0]}</Text>
          </View>
          <View style={this.css.valueViewFlex}>
            <Text style={[this.css.valueViewTextSecond, this.css.valueViewText]}>{valores[1]}</Text>
          </View>
        </View>
      </View>
    )
  }
}

