import React, {Component} from "react";
import {Button, Text, View} from "react-native";
import {PokedexInput} from "./input/pokedex-input";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {PokedexAction} from "../../redux/pokedex-action";
import {PokedexHeader} from "./header/header";
import {PokedexCSS} from "./pokedex-css";
import {PokedexList} from "./list/pokedex-list";
import {PokedexProps} from "../../service/pokedex-props";

class PokedexPage extends Component<PokedexProps.Props> {

  static navigationOptions = PokedexHeader.Header;

  componentDidMount() {

    this.props.carregarPokemons();


  }

  componentWillReceiveProps(nextProps: Readonly<PokedexProps.Props>, nextContext: any): void {

    let mostrarFiltro = this.props.navigation.getParam('mostrarFiltro');

    if(!nextProps.carregando && !nextProps.erro && !mostrarFiltro)
      this.props.navigation.setParams({mostrarFiltro: true});

    else if( (nextProps.carregando || nextProps.erro) && mostrarFiltro)
      this.props.navigation.setParams({mostrarFiltro: false});

  }

  mostrarErro() {

    let css = PokedexCSS.MOSTRAR_MENSAGEM;

    return (
      <View style={css.view}>
        <Text style={css.titulo}>Ooops!</Text>
        <Text style={css.subTitulo}>Não foi possível buscar Pokemons.</Text>
        <Button onPress={this.props.carregarPokemons} title={"Tentar Novamente"} />
      </View>
    )


  };

  mostrarPokemons() {

    let props = this.props;

    return (
      <View>
        { !props.carregando ? <PokedexInput {...props}/> : <View/> }
        {/*<Button title={"teste props"} onPress={() => console.log(props)} />*/}
        <PokedexList {...props} />
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

const mapStateToProps = (state) => {
  return state.pokedexReducer
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    carregarPokemons: PokedexAction.carregarPokemons,
    adicionarLimite: PokedexAction.adicionarLimite,
    filtrarPokemons: (pokemons, filtro) => PokedexAction.filtrarPokemons(pokemons, filtro),
  }, dispatch)
);

export const Pokedex = connect(mapStateToProps, mapDispatchToProps)(PokedexPage);
