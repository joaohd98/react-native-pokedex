import React, {Component} from "react";
import {Animated, Easing, Image, ScrollView, Text, View} from "react-native";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {DetalhesHeader} from "./header/header";
import {DetalhesNomeImagem} from "./nome-imagem/nome-imagem";
import {DetalhesDescricao} from "./descricao/descricao";
import {DetalhesInformacoes} from "./informacoes/informacoes";
import {DetalhesEvolucoes} from "./evolucoes/evolucoes";
import {DetalhesEstatisticas} from "./estatisticas/estatisticas";
import {DetalhesTipoFraqueza} from "./tipo-fraqueza/tipo-fraqueza";
import {DetalhesCSS} from "./detalhes-css";
import {DetalhesProps} from "../services/detalhes-props";
import {StatesReducers} from "../../../../../redux/reducer";
import {DetalhesInitalState} from "../redux/detalhes-reducer";
import {gifs} from "../../../../../assets";
import {Helpers} from "../../../../../helpers/helpers";
import {DetalhesNavBar} from "./nav-bar/nav-bar";

interface States {
  pikachuPositionValueHolder: Animated.Value;
  textoCarregando: string
}

class DetalhesPage extends Component<DetalhesProps.Props, States> {

  static navigationOptions = DetalhesNavBar.Header;

  css = DetalhesCSS.detalhes;

  state = {
    pikachuPositionValueHolder: new Animated.Value(0),
    textoCarregando: "Carregando",
  };

  componentDidMount() {

    this.inicializarPokemon();

  }

  componentDidUpdate(prevProps: Readonly<DetalhesProps.Props>, prevState: Readonly<States>, snapshot?: any): void {

    if (prevProps.carregando != this.props.carregando && this.props.carregando) {

      this.startMoveImageFunction();
      this.startChangeTextLoading();

    }

    if (prevProps.pokemonSelecionado!.numero != this.props.pokemonSelecionado!.numero) {
      
      this.props.navigation.setParams({
        nomePokemon: this.props.pokemonSelecionado!.nome,
      });

    }

  }

  inicializarPokemon() {


    this.props.funcoes.carregarDetalhes(this.props.pokemonSelecionado!, this.props.outrosPokemons);

    this.props.navigation.setParams({
      nomePokemon: this.props.pokemonSelecionado!.nome,
    });

    this.startMoveImageFunction();
    this.startChangeTextLoading();

  }


  renderCarregando() {

    let css = DetalhesCSS.carregamento;

    return (
      <View style={css.view}>
        <Animated.View style={{left: this.state.pikachuPositionValueHolder}}>
          <Image source={gifs.pikachuRunning} width={200} height={200}/>
        </Animated.View>
        <View style={css.viewText}>
          <View style={css.marginView}/>
          <Text style={css.text}> {this.state.textoCarregando} </Text>
          <View style={css.marginView}/>
        </View>
      </View>
    )

  }

  startMoveImageFunction() {

    let posicao = Helpers.pegarPorcentagem(50, "width") + 130;

    this.state.pikachuPositionValueHolder.setValue(posicao * -1);

    Animated.timing(this.state.pikachuPositionValueHolder, {
      toValue: posicao,
      duration: 1600,
      easing: Easing.linear,
    }).start(() => {
      if (this.props.carregando)
        this.startMoveImageFunction();
    });

  };

  startChangeTextLoading() {

    setTimeout(() => {

      if (this.state.textoCarregando.length < 13)
        this.setState({textoCarregando: this.state.textoCarregando + "."});

      else
        this.setState({textoCarregando: "Carregando"});

      if (this.props.carregando)
        this.startChangeTextLoading();

    }, 400);

  }


  renderPokemon() {

    return (
      <ScrollView>
        <DetalhesHeader {...this.props}/>
        <View style={this.css.view}>
          <DetalhesNomeImagem {...this.props} />
        </View>
        <View style={this.css.view}>
          <DetalhesEstatisticas {...this.props} />
        </View>
        <View style={this.css.view}>
          <DetalhesDescricao {...this.props}  />
        </View>
        <View style={this.css.view}>
          <DetalhesInformacoes {...this.props}  />
        </View>
        <View style={this.css.view}>
          <DetalhesTipoFraqueza {...this.props}  />
        </View>
        <View style={this.css.view}>
          <DetalhesEvolucoes {...this.props} />
        </View>
      </ScrollView>
    )

  }

  render() {

    return this.props.carregando ? this.renderCarregando() : this.renderPokemon();

  }

}

const mapStateToProps = (state: StatesReducers) => {
  return state.detalhesReducer
};

const mapDispatchToProps = dispatch => ({
  funcoes: bindActionCreators(DetalhesInitalState.funcoes, dispatch)
});

export const Detalhes = connect(mapStateToProps, mapDispatchToProps)(DetalhesPage);
