import React from "react";
import {Component} from "react";
import { View} from "react-native";
import {PokedexInput} from "./components/input/pokedex-input";
import {PokedexProps} from "./redux/pokedexReducer";
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {PokedexAction} from "./redux/pokedexAction";
import {PokedexHeader} from "./components/header/header";
import {PokedexList} from "./components/list/pokedex-list";

interface Props extends PokedexProps{
  carregarPokemons: () => {}
}

class PokedexPage extends Component<Props> {

  static navigationOptions = PokedexHeader.Header;

  componentDidMount() {

    this.props.carregarPokemons()

  }

  render() {

    let props = this.props;

    return (
      <View>
        <PokedexInput />
        <PokedexList pokemons={props.pokemons} carregando={props.carregando} erro={props.erro}/>
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

