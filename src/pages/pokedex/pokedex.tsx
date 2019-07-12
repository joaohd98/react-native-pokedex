import React from "react";
import {Component} from "react";
import {ScrollView, View} from "react-native";
import {PokedexCard} from "./components/card/pokedex-card";
import {PokedexInput} from "./components/input/pokedex-input";
import {PokedexCSS} from "./pokedex-css";
import {PokedexInteractor} from "./service/PokedexInteractor";
import {PokedexModel} from "./service/PokedexModel";
import {ApiRetornos} from "../../services";
import {PokedexProps} from "./redux/pokedexReducer";
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {PokedexAction} from "./redux/pokedexAction";

interface Props extends PokedexProps{
  carregarPokemons: () => {}
}

class PokedexPage extends Component<Props> {

  static navigationOptions = PokedexCSS.Header;

  interector = new PokedexInteractor();

  componentDidMount() {

   // this.props.carregarPokemons()

  }

  renderPokecard(pokemons: PokedexModel.ViewModel[]) {


  }

  erroPokecard(erro: ApiRetornos) {


  }

  render() {

    let css = PokedexCSS.CSS;
    console.log(this.props);

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

const mapStateToProps = (state) => {
  return state.pokedexReducer
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    carregarPokemons: PokedexAction.carregarPokemons
  }, dispatch)
);

export const Pokedex = connect(mapStateToProps, mapDispatchToProps)(PokedexPage);

