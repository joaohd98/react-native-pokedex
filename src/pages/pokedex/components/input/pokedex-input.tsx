import React, {Component} from "react";
import {Keyboard, Text, TextInput, TouchableHighlight, View} from "react-native";
import {Colors} from "../../../../helpers/colors/colors";
import Icon from 'react-native-vector-icons/FontAwesome';
import {PokedexCSS} from "../../pokedex-css";
import {PokedexProps} from "../../service/pokedex-props";
import {PokedexInteractor} from "../../service/pokedex-interactor";

interface States {
  color: string,
  mostrarAutoComplete: boolean
}

export class PokedexInput extends Component<PokedexProps.Props, States>{

  private css = PokedexCSS.InputAutoComplete;
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

    this.props.filtrarPokemons(this.props.pokemons, this.props.pesquisa);

    if(this.props.flatList.current)
      this.props.flatList.current.scrollToOffset({animated: false, offset: 0});

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

    let pokemonsNomes = PokedexInteractor.autoCompletePokemons(this.props.pesquisa.filtro.nomes, this.props.pesquisa.valores.nome);

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

    return <View style={this.css.list}>{ itens }</View>;

  };

  render = () => {

    return (
      <View style={this.css.view}>
        <View style={this.css.autoCompleteView}>
          { this.renderInput() }
          { this.state.mostrarAutoComplete ? this.renderAutoComplete() : <View/> }
        </View>
      </View>
    );

  }

}
