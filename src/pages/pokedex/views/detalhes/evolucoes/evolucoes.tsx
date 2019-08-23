import React, {Component} from 'react'
import {View, Text, ImageBackground, FlatList, Image, ImageSourcePropType} from "react-native";
import {DetalhesCSS} from "../detalhes-css";
import {images} from "../../../../../assets";
import {Helpers} from "../../../../../helpers/helpers";
import {PokedexInteractor} from "../../../service/pokedex-interactor";
import Icon from 'react-native-vector-icons/FontAwesome';

export class DetalhesEvolucoes extends Component {

  private css = DetalhesCSS.evolucoes;

  renderTypes() {

    let tipos = ["grass", "poison"];

    let elementos: JSX.Element[] = [];

    let tamanho = tipos.length;

    for(let i = 0; i < tamanho; i++) {

      let tipo = tipos[i];

      let { backgroundColor, borderBottomColor, color } = PokedexInteractor.pegarCorFundoHabilidade(tipo);

      elementos.push(
        <View style={{...this.css.typesContent, backgroundColor, borderBottomColor}} key={i}>
          <Text style={{...this.css.typesText, color}}>{tipo}</Text>
        </View>
      )

    }

    return elementos

  }

  renderCard() {

    let imagem: ImageSourcePropType = {
      uri: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      width: 150,
      height: 150,
    };


    return (

      <View style={[this.css.cardView, this.css.cardSize]}>
        <View style={this.css.cardIMG}>
          <Image source={imagem}/>
        </View>
        <View style={this.css.nameNumberLine}>
          <Text style={this.css.nameText}>Bulbassaur</Text>
          <Text style={this.css.numberText}>Nº 001</Text>
        </View>
        <View style={this.css.typeLine}>
          { this.renderTypes() }
        </View>
      </View>

    )

  }

  render() {

    return (
      <ImageBackground source={images.body} style={this.css.view} borderRadius={20}>
        <Text style={this.css.title}>Evoluções</Text>
        <FlatList horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} style={this.css.cardSize}
                  data={['1', '2', '3']}  keyExtractor={(teste) => teste} renderItem={() => this.renderCard()} />
      </ImageBackground>
    )

  }

}
