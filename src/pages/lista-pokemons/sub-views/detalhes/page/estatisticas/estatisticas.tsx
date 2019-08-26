import React, {Component} from 'react';
import {Text, View} from "react-native";
import {DetalhesCSS} from "../detalhes-css";

export class DetalhesEstatisticas extends Component {

  private css = DetalhesCSS.estatistica;

  renderColumn(nome: string) {

    let skills: JSX.Element[] = [];
    let numAleatorio = Math.floor(Math.random() * 10);

    for(let i = 10; i >= 1; i--)
      skills.push(<Text key={i} style={{...this.css.skill, borderColor: numAleatorio >= i ? "#30a7d7" : "#FFF" }} />);

    return (
      <View key={nome} style={this.css.column}>
        { skills }
        <Text style={this.css.text}>{ nome }</Text>
      </View>
    )

  }

  render() {

    let atributos = [
      'HP',
      'Attack',
      'Defense',
      'Special Attack',
      'Special Defense',
      'Speed',
    ];

    let elements: JSX.Element[] = [];

    atributos.forEach((atributo) => elements.push(this.renderColumn(atributo)));

    return (
      <View style={this.css.view}>
        <Text style={this.css.title}>Estatistica</Text>
        <View style={this.css.subView}>
          { elements }
        </View>
      </View>
    )

  }

}
