import React, {Component} from "react";
import {Keyboard, Text, TextInput, TouchableHighlight, View} from "react-native";
import {Colors} from "../../../../../helpers/colors/colors";
import Icon from 'react-native-vector-icons/FontAwesome';
import {ListaPokemonsProps} from "../../services/lista-pokemons-props";
import {ListaPokemonsCss} from "../lista-pokemons-css";
import {ListaPokemonsInteractor} from "../../services/lista-pokemons-interactor";

interface States {
  color: string,
  mostrarAutoComplete: boolean
}

export class ListaPokemonsInput extends Component<ListaPokemonsProps.Props, States> {

  private css = ListaPokemonsCss.InputAutoComplete;
  private keyboard = Keyboard;

  constructor(props){
    super(props);

    this.state = { color: Colors.gray, mostrarAutoComplete: false};

  }

  mostrarAutoComplete = (mostrar: boolean) => {

    this.setState({ mostrarAutoComplete: mostrar });

  };

  selecionarPokemonAutoComplete = (pokemon: string) => {

    setTimeout(() => {

      this.keyboard.dismiss();

      this.mostrarAutoComplete(false);

      this.props.pesquisa.valores.nome = pokemon;

      this.filtrarPokemons();

    }, 50);

  };

  mudarTextoInput = (texto: string) => {

    this.props.pesquisa.valores.nome = texto;

    this.filtrarPokemons();

  };

  filtrarPokemons = () => {

    this.props.funcoes.pesquisarPokemon(this.props.pokemons, this.props.pesquisa);

    this.props.flatList.current!.scrollToOffset({animated: false, offset: 0});

  };

  renderInput = () => {

    return (
      <View style={this.css.inputView}>
        <Icon name="search" size={15} style={this.css.icon}/>
        <TextInput autoCorrect={false} placeholder={"Nome ou número"} value={this.props.pesquisa.valores.nome}
                   onChangeText={text => this.mudarTextoInput(text)} style={this.css.textInput}
                   onFocus={() => this.mostrarAutoComplete(true)} onBlur={() => this.mostrarAutoComplete(false)}
                   />
      </View>
    );

  };

  renderAutoComplete = () => {

    let pokemonsNomes = ListaPokemonsInteractor.autoCompletePokemons(this.props.pesquisa.filtro.nomes, this.props.pesquisa.valores.nome);

    let itens: Element[] = [];

    for(let index in pokemonsNomes) {

      let nome = pokemonsNomes[index];

      itens.push(
        <TouchableHighlight key={index} onPress={() => this.selecionarPokemonAutoComplete(nome)}  underlayColor={Colors.blue}>
          <View style={this.css.column} >
            <Text style={this.css.columnText}>{ nome }</Text>
          </View>
        </TouchableHighlight>
      )

    }

    return itens.length > 0 ? <View style={this.css.list}>{itens}</View> : <View/>;

  };

  render = () => {

    let mostrarInput = !this.props.carregando && !this.props.erro;

    return (
      (!mostrarInput) ? <View/> :
      <View style={this.css.view}>
        <View style={this.css.autoCompleteView}>
          { this.renderInput() }
          { this.state.mostrarAutoComplete ? this.renderAutoComplete() : <View/> }
        </View>
      </View>
    );

  }

}
