import React, {Component} from "react";
import {PokedexProps} from "../../../service/pokedex-props";
import {Text, TouchableOpacity, View} from "react-native";
import {FiltroCSS} from "../filtro-css";
import Icon from 'react-native-vector-icons/FontAwesome';


export class FiltroBotoes extends Component<PokedexProps.FiltroForm> {

  private css = FiltroCSS.BOTOES;

  render() {

    return (
      <View style={this.css.view}>
        <TouchableOpacity>
          <View style={[this.css.buttonPesquisa, this.css.button]}>
            <View style={this.css.buttonPesquisaContainer}>
              <Icon style={this.css.buttonIcon} name="search" size={20} />
              <Text style={this.css.buttonText}>Pesquisar</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[this.css.buttonRedefinir, this.css.button]}>
            <Text style={this.css.buttonText}>Redefinir</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

}

