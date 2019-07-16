import React, {Component} from "react";
import {PokedexModel} from "../../service/PokedexModel";
import {PokedexCard} from "../card/pokedex-card";
import {PokedexCSS} from "../../pokedex-css";
import {Animated, Easing, FlatList, ScrollView, StyleSheet, Text, View} from "react-native";
import {PokedexInteractor} from "../../service/PokedexInteractor";
import {Colors} from "../../../../helpers/colors/colors";
import {images} from "../../../../assets";

interface Props {
  pokemons: PokedexModel.ViewModel[],
  carregando: boolean,
  limite: number,
  adicionarLimite: () => {}
}

export class PokedexList extends Component<Props>{

  private carrregarPokemons = false;
  private RotateValueHolder = new Animated.Value(0);

  componentDidMount = () => {

    this.StartImageRotateFunction();

  };

  /*
   * Skeleton
   */
  renderListSkeleton = () => {

    let cards: Element[] = [];

    for(let i = 0; i <= 5; i++)
        cards.push(<PokedexCard key={i} skeleton={true}/>);

    return (
      <ScrollView scrollEnabled={false}>
        { cards }
      </ScrollView>
    )

  };

  /*
   * Lista Pokemons
   */
  renderList = () => {

    let tamanho = this.props.pokemons.length;
    let pokemons = PokedexInteractor.scrollPokemons(this.props.pokemons, this.props.limite);

    return (
      <FlatList
        data={pokemons}
        style={PokedexCSS.PokedexCard.view}
        keyExtractor={item => item.numero}
        renderItem={iterator  => <PokedexCard pokemon={iterator.item} />}
        onMomentumScrollBegin={() => { this.carrregarPokemons = true; }}
        onEndReached={this.carregarPokemons}
        onEndReachedThreshold={0.01}
        ListEmptyComponent={<PokedexCard/>}
        ListFooterComponent={tamanho >= this.props.limite && tamanho > 0 ? this.infiniteScroll() : <View />}
      />
    )

  };

  StartImageRotateFunction = () => {

    this.RotateValueHolder.setValue(0);

    Animated.timing(this.RotateValueHolder, {
      toValue: 1,
      duration: 250,
      easing: Easing.linear,
    }).start(this.StartImageRotateFunction);

  };

  infiniteScroll = () => {

    let css = StyleSheet.create({
      view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        fontWeight: "400",
        fontSize: 18,
        lineHeight: 50,
        letterSpacing: 0.25,
        color: Colors.gray
      },
      image: {
        width: 40,
        height: 40,

      }
    });

    const rotate = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <View style={css.view}>
        <Animated.Image source={images.pokeball} style={{...css.image, transform: [{rotate}]}} />
        <Text style={css.text}>Carregando Pokémons...</Text>
      </View>
    )

  };

  carregarPokemons = () => {

    if(!this.carrregarPokemons)
      return;

    setTimeout(() => {this.carrregarPokemons = false; this.props.adicionarLimite(); }, 500);

  };

  /*
   * Render
   */
  render = () => {

    return this.props.carregando ? this.renderListSkeleton() : this.renderList();

  };

}
