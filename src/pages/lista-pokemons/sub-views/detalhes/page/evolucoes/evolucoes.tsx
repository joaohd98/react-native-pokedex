import React, {Component} from 'react'
import {FlatList, Image, ImageBackground, ImageSourcePropType, Text, TouchableOpacity, View} from "react-native";
import {DetalhesCSS} from "../detalhes-css";
import {ListaPokemonsInteractor} from "../../../../view/services/lista-pokemons-interactor";
import {images} from "../../../../../../assets";
import {DetalhesModel} from "../../services/detalhes-model";
import {ListaPokemonsModel} from "../../../../view/services/lista-pokemons-model";
import {Helpers} from "../../../../../../helpers/helpers";
import Icon from 'react-native-vector-icons/FontAwesome';
import {DetalhesProps} from "../../services/detalhes-props";

export class DetalhesEvolucoes extends Component<DetalhesProps.Props> {

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

  renderCard(evolucao: ListaPokemonsModel.ViewModel, detalhes: DetalhesModel.ViewModel) {

    let imagem: ImageSourcePropType = {
      uri: evolucao.foto,
      width: 100,
      height: 100,
    };

    let indexPokemon = detalhes.evolucoes.findIndex(evolucaoTodas => Helpers.compararStrings(evolucaoTodas.numero, evolucao.numero));
    let tamanho = detalhes.evolucoes.length;
    let padding = Helpers.pegarPorcentagem(10, "width");

    return (
      <View style={[this.css.cardView, this.css.cardSize]}>
        <View style={{...this.css.cardIconAngle, paddingRight: padding}}>
          {indexPokemon > 0 ? <Icon name={"angle-left"} color={"#FFF"} size={50}/> : <View/>}
        </View>
        <View style={{flex: 0.7, justifyContent: "center", alignItems: "center"}}>
          <TouchableOpacity
            onPress={() => this.props.funcoes.irParaOutrosDetalhes(evolucao, this.props.outrosPokemons)}>
            <View style={this.css.cardIMG}>
              <Image source={imagem}/>
            </View>
          </TouchableOpacity>
          <View style={this.css.nameNumberLine}>
            <Text style={this.css.nameText}>{evolucao.nome}</Text>
            <Text style={this.css.numberText}>Nº {evolucao.numero}</Text>
          </View>
          <View style={this.css.typeLine}>
            {this.renderTypes(evolucao)}
          </View>
        </View>
        <View style={{...this.css.cardIconAngle, paddingLeft: padding}}>
          {indexPokemon < (tamanho - 1) ? <Icon name={"angle-right"} color={"#FFF"} size={50}/> : <View/>}
        </View>
      </View>
    )

  }

  renderTitle(detalhes: DetalhesModel.ViewModel) {

    if (detalhes.evolucoes.length > 1) {

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

    let detalhes = this.props.pokemonDetalhes!;

    let indexPokemon = detalhes.evolucoes.findIndex(evolucao => Helpers.compararStrings(evolucao.numero, detalhes.numero));

    let largura = Helpers.pegarPorcentagem(80, "width");
    
    return (
      <ImageBackground source={images.body} style={this.css.view} borderRadius={20}>
        {this.renderTitle(detalhes)}
        <FlatList horizontal={true} pagingEnabled={true} initialScrollIndex={indexPokemon}
                  showsHorizontalScrollIndicator={false} style={this.css.cardSize}
                  getItemLayout={(data, index) => ({length: largura, offset: largura * index, index})}
                  data={detalhes.evolucoes} keyExtractor={evolucao => evolucao.numero}
                  renderItem={({item}) => this.renderCard(item, detalhes)}/>
      </ImageBackground>
    )

  }

}
