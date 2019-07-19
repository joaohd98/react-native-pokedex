import React, {Component} from "react";
import {TextInput, View, Text, TouchableHighlight, Keyboard, FlatList} from "react-native";
import {Colors} from "../../../../helpers/colors/colors";
import Icon from 'react-native-vector-icons/FontAwesome';
import {PokedexCSS} from "../../pokedex-css";
import {PokedexProps} from "../../service/PokedexProps";
import {PokedexModel} from "../../service/PokedexModel";

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

      console.log(pokemon);


    }, 50);

  };

  mudarTextoInput = (texto: string) => {

    let filtro = this.props.pesquisa;

    filtro.valores.nome = texto;

    this.props.filtrarPokemons(this.props.pokemons, filtro);

    if(this.props.flatList.current)
      this.props.flatList.current.scrollToOffset({animated: false, offset: 0});
    
  };

  renderInput = () => {

    return (
      <View style={this.css.inputView}>
        <Icon name="search" size={15} style={this.css.icon}/>
        <TextInput autoCorrect={false} placeholder={"Nome ou número"} value={this.props.pesquisa.valores.nome} onChangeText={text => this.mudarTextoInput(text)}
                   onFocus={() => this.mostrarAutoComplete(true)} onBlur={() => this.mostrarAutoComplete(false)}
                   style={this.css.textInput}/>
      </View>
    );

  };

  renderAutoComplete = () => {

    let pokemons = ['Pokemon1', 'Pokemon2', 'Pokemon3', 'Pokemon4'];
    let itens: Element[] = [];

    for(let index in pokemons) {

      let pokemon = pokemons[index];

      itens.push(
        <TouchableHighlight key={index} onPress={() => this.selecionarPokemonAutoComplete(pokemon)}  underlayColor={Colors.blue}>
          <View style={this.css.column} >
            <Text style={this.css.columnText}>{ pokemon }</Text>
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
