import React, {Component} from 'react'
import {View, Text, ScrollView} from "react-native";
import {DetalhesCSS} from "../detalhes-css";
import {PokedexInteractor} from "../../../service/pokedex-interactor";

export class DetalhesTipoFraqueza extends Component {

  private css = DetalhesCSS.tipoFraqueza;

  renderTypes() {

    let tipos = ["grass", "poison"];

    let elementos: JSX.Element[] = [];

    let tamanho = tipos.length;

    for(let i = 0; i < tamanho; i++) {

      let tipo = tipos[i];

      let { backgroundColor, borderBottomColor, color } = PokedexInteractor.pegarCorFundoHabilidade(tipo);

      elementos.push(
        <View style={{...this.css.typesWeaknessContent, backgroundColor, borderBottomColor}} key={i}>
          <Text style={{...this.css.typesWeaknessText, color}}>{tipo}</Text>
        </View>
      )
    }

    return elementos

  }

  renderWeakness() {

    let fraquezas = ["fire", "flying", "ice", "psychic"];

    let elementos: JSX.Element[] = [];

    let tamanho = fraquezas.length;

    for(let i = 0; i < tamanho; i++) {

      let fraqueza = fraquezas[i];

      let { backgroundColor, borderBottomColor, color } = PokedexInteractor.pegarCorFundoHabilidade(fraqueza);

      elementos.push(
        <View style={{...this.css.typesWeaknessContent, backgroundColor, borderBottomColor}} key={i}>
          <Text style={{...this.css.typesWeaknessText, color}}>{fraqueza}</Text>
        </View>
      )
    }

    return elementos

  }

  render() {

    return (
      <View style={this.css.view}>
        <View>
          <Text style={this.css.title}>Type</Text>
          <ScrollView  style={this.css.typesWeakness} horizontal={true}>
            { this.renderTypes() }
          </ScrollView>
        </View>
        <View>
          <Text style={this.css.title}>Weakness</Text>
          <ScrollView style={this.css.typesWeakness} horizontal={true} >
            { this.renderWeakness() }
          </ScrollView>
        </View>
      </View>
    )

  }

}
