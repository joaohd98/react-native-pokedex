import React, {Component} from 'react'
import {FlatList, Image, ImageBackground, ImageSourcePropType, Text, View} from "react-native";
import {DetalhesCSS} from "../detalhes-css";
import {ListaPokemonsInteractor} from "../../../../view/services/lista-pokemons-interactor";
import {images} from "../../../../../../assets";
import {DetalhesModel} from "../../services/detalhes-model";
import {ListaPokemonsModel} from "../../../../view/services/lista-pokemons-model";
import {Helpers} from "../../../../../../helpers/helpers";

export class DetalhesEvolucoes extends Component<DetalhesModel.ViewModel> {

  private css = DetalhesCSS.evolucoes;

  renderTypes(evolucao: ListaPokemonsModel.ViewModel) {

    let tipos = evolucao.tipos;

    let elementos: JSX.Element[] = [];

    let tamanho = tipos.length;

    for(let i = 0; i < tamanho; i++) {

      let tipo = tipos[i];

      let {backgroundColor, borderBottomColor, color} = ListaPokemonsInteractor.pegarCorFundoHabilidade(Helpers.removerAcentosMinusculo(tipo));

      elementos.push(
        <View style={{...this.css.typesContent, backgroundColor, borderBottomColor}} key={i}>
          <Text style={{...this.css.typesText, color}}>{tipo}</Text>
        </View>
      )

    }

    return elementos

  }

  renderCard(evolucao: ListaPokemonsModel.ViewModel) {

    let imagem: ImageSourcePropType = {
      uri: evolucao.foto,
      width: 150,
      height: 150,
    };


    return (

      <View style={[this.css.cardView, this.css.cardSize]}>
        <View style={this.css.cardIMG}>
          <Image source={imagem}/>
        </View>
        <View style={this.css.nameNumberLine}>
          <Text style={this.css.nameText}>{evolucao.nome}</Text>
          <Text style={this.css.numberText}>Nº {evolucao.numero}</Text>
        </View>
        <View style={this.css.typeLine}>
          {this.renderTypes(evolucao)}
        </View>
      </View>

    )

  }

  renderTitle() {

    if (this.props.evolucoes.length > 1) {

      return (
        <View>
          <Text style={this.css.title}>Evoluções</Text>
        </View>
      )

    } else {

      return (
        <View>
          <Text style={{...this.css.title, paddingBottom: 10}}>Evoluções</Text>
          <Text style={this.css.subTitle}>Este Pokémon não evolui.</Text>
        </View>
      )
    }

  }

  render() {

    return (
      <ImageBackground source={images.body} style={this.css.view} borderRadius={20}>
        {this.renderTitle()}
        <FlatList horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} style={this.css.cardSize}
                  data={this.props.evolucoes} keyExtractor={(evolucao) => evolucao.numero}
                  renderItem={({item}) => this.renderCard(item)}/>
      </ImageBackground>
    )

  }

}
