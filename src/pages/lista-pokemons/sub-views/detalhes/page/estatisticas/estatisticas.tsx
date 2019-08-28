import React, {Component} from 'react';
import {Text, View} from "react-native";
import {DetalhesCSS} from "../detalhes-css";
import {DetalhesModel} from "../../services/detalhes-model";

export class DetalhesEstatisticas extends Component<DetalhesModel.ViewModel> {

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

    let atributos = [
      {nome: "HP", valor: this.props.atributos.hp},
      {nome: "Attack", valor: this.props.atributos.attack},
      {nome: "Defense", valor: this.props.atributos.defense},
      {nome: "Special Attack", valor: this.props.atributos.specialAttack},
      {nome: "Special Defense", valor: this.props.atributos.specialDefense},
      {nome: "Speed", valor: this.props.atributos.speed}
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
