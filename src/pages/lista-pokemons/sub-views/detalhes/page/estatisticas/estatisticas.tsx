import React, {Component} from 'react';
import {Text, View} from "react-native";
import {DetalhesCSS} from "../detalhes-css";
import {DetalhesProps} from "../../services/detalhes-props";

export class DetalhesEstatisticas extends Component<DetalhesProps.Props> {

  private css = DetalhesCSS.estatistica;

  renderColumn(nome: string, valor: number) {

    let skills: JSX.Element[] = [];

    for(let i = 10; i >= 1; i--)
      skills.push(<Text key={i} style={{...this.css.skill, borderColor: valor >= i ? "#30a7d7" : "#FFF"}}/>);

    return (
      <View key={nome} style={this.css.column}>
        { skills }
        <Text style={this.css.text}>{ nome }</Text>
      </View>
    )

  }

  render() {

    let detalhes = this.props.pokemonDetalhes!;

    let atributos = [
      {nome: "HP", valor: detalhes.atributos.hp},
      {nome: "Attack", valor: detalhes.atributos.attack},
      {nome: "Defense", valor: detalhes.atributos.defense},
      {nome: "Special Attack", valor: detalhes.atributos.specialAttack},
      {nome: "Special Defense", valor: detalhes.atributos.specialDefense},
      {nome: "Speed", valor: detalhes.atributos.speed}
    ];

    let elements: JSX.Element[] = [];

    atributos.forEach((atributo) => elements.push(this.renderColumn(atributo.nome, atributo.valor)));

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
