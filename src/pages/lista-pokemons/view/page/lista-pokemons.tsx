import React, {Component} from "react";
import {Button, Text, View} from "react-native";
import {ListaPokemonsInput} from "./input/input";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {ListaPokemonsList} from "./list/list";
import {ListaPokemonsProps} from "../services/lista-pokemons-props";
import {ListaPokemonsCss} from "./lista-pokemons-css";
import {ListaPokemonsInitalState} from "../redux/lista-pokemons-reducer";
import {StatesReducers} from "../../../../redux/reducer";
import {ListaPokemonsHeader} from "./header/header";


class PokedexPage extends Component<ListaPokemonsProps.Props> {

  static navigationOptions = ListaPokemonsHeader.Header;

  componentDidMount() {

    this.props.funcoes.carregarPokemons();

    this.props.navigation.setParams({
      mostrarFiltro: false,
      irParaFiltro: () => this.props.funcoes.irParaFiltro(this.props.pokemons, this.props.pesquisa),
    });

  }

  componentDidUpdate(prevProps: Readonly<ListaPokemonsProps.Props>, prevState: Readonly<{}>, snapshot?: any): void {

    let mostrarFiltro = this.props.navigation.getParam('mostrarFiltro');

    if(!this.props.carregando && !this.props.erro && !mostrarFiltro)
      this.props.navigation.setParams({mostrarFiltro: true});

    else if((this.props.carregando || this.props.erro) && mostrarFiltro)
      this.props.navigation.setParams({mostrarFiltro: false});

  }

  mostrarErro() {

    let css = ListaPokemonsCss.MOSTRAR_MENSAGEM;

    return (
      <View style={css.view}>
        <Text style={css.titulo}>Ooops!</Text>
        <Text style={css.subTitulo}>Não foi possível buscar Pokemons.</Text>
        <Button onPress={this.props.funcoes.carregarPokemons} title={"Tentar Novamente"} />
      </View>
    )

  };

  mostrarPokemons() {

    let props = this.props;

    return (
      <View>
        <ListaPokemonsInput {...props}/>
        <ListaPokemonsList {...props} />
      </View>
    )

  }

  render() {

    return (
      <View>
        { this.props.erro ? this.mostrarErro() : this.mostrarPokemons() }
      </View>
    )

  }

}

const mapStateToProps = (state: StatesReducers) => {
  return state.listaPokemonsReducer
};

const mapDispatchToProps = dispatch => ({
  funcoes: bindActionCreators(ListaPokemonsInitalState.funcoes, dispatch)
});

export const ListaPokemons = connect(mapStateToProps, mapDispatchToProps)(PokedexPage);
