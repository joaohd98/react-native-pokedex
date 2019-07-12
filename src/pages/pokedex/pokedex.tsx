import React from "react";
import {Component} from "react";
import {ScrollView, View} from "react-native";
import {PokedexCard} from "./components/card/pokedex-card";
import {PokedexInput} from "./components/input/pokedex-input";
import {PokedexCSS} from "./pokedex-css";
import {PokedexInteractor} from "./service/PokedexInteractor";
import {PokedexModel} from "./service/PokedexModel";
import {ApiRetornos} from "../../services";

interface Props {
  navigation: any,
  carregando: boolean,
  erro: boolean
}

export class Pokedex extends Component<Props> {

  static navigationOptions = PokedexCSS.Header;

  interector = new PokedexInteractor();

  componentDidMount() {

    this.interector.pegarPokemons(this);

  }

  renderPokecard(pokemons: PokedexModel.ViewModel[]) {


  }

  erroPokecard(erro: ApiRetornos) {


  }

  render() {

    let css = PokedexCSS.CSS;

    return (
      <View>
        <PokedexInput />
        <ScrollView style={css.scrollView}>
          <PokedexCard />
          <PokedexCard />
          <PokedexCard />
          <PokedexCard />
          <PokedexCard />
          <PokedexCard />
          <PokedexCard />
          <PokedexCard />
          <PokedexCard />
          <PokedexCard />
          <PokedexCard />
          <PokedexCard />
          <PokedexCard />
          <PokedexCard />
        </ScrollView>
      </View>
    )

  }

}
