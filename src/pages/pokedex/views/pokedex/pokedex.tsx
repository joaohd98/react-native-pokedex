import React, {Component} from "react";
import {Button, Text, View} from "react-native";
import {PokedexInput} from "./input/pokedex-input";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {PokedexHeader} from "./header/header";
import {PokedexCSS} from "./pokedex-css";
import {PokedexList} from "./list/pokedex-list";
import {PokedexProps} from "../../service/pokedex-props";
import {PokedexInitalState} from "../../redux/pokedex-reducer";

class PokedexPage extends Component<PokedexProps.Props> {

  static navigationOptions = PokedexHeader.Header;

  componentDidMount() {

    this.props.funcoes.carregarPokemons();

  }

  componentDidUpdate(prevProps: Readonly<PokedexProps.Props>, prevState: Readonly<{}>, snapshot?: any): void {

    let mostrarFiltro = this.props.navigation.getParam('mostrarFiltro');

    if(!this.props.carregando && !this.props.erro && !mostrarFiltro)
      this.props.navigation.setParams({mostrarFiltro: true});

    else if((this.props.carregando || this.props.erro) && mostrarFiltro)
      this.props.navigation.setParams({mostrarFiltro: false});

    if(JSON.stringify(this.props.pesquisa.valores) !== JSON.stringify(prevProps.pesquisa.valores))
      this.props.flatList.current!.scrollToOffset({ animated: false, offset: 0 });

  }

  mostrarErro() {

    let css = PokedexCSS.MOSTRAR_MENSAGEM;

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
        <PokedexInput {...props}/>
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

const mapDispatchToProps = (dispatch, ownProps) => ({
  funcoes: bindActionCreators(PokedexInitalState.funcoes, dispatch)
});

export const Pokedex = connect(mapStateToProps, mapDispatchToProps)(PokedexPage);
