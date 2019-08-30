import React, {Component} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {DetalhesCSS} from "../detalhes-css";
import {DetalhesProps} from "../../services/detalhes-props";

export class DetalhesHeader extends Component<DetalhesProps.Props> {

  private css = DetalhesCSS.header;

  render() {

    let detalhes = this.props.pokemonDetalhes!;

    return (
      <View style={this.css.view}>
        <TouchableOpacity
          onPress={() => this.props.funcoes.irParaOutrosDetalhes(detalhes.numeroAnt, this.props.outrosPokemons)}>
          <View style={this.css.subView}>
            <View style={[this.css.content, this.css.contentLeft]} >
              <View style={{flex: 0.3}}>
                <Text style={this.css.textLeft}>
                  <Icon name="chevron-circle-left" style={this.css.icon}/>
                </Text>
              </View>
              <View style={{flex: 0.7}}>
                <Text style={[this.css.text, this.css.textLeft]}>Nº {detalhes.numeroAnt.numero}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.funcoes.irParaOutrosDetalhes(detalhes.numeroAdj, this.props.outrosPokemons)}>
          <View style={this.css.subView}>
            <View style={[this.css.content, this.css.contentRight]}>
              <View style={{flex: 0.7}}>
                <Text style={[this.css.text, this.css.textRight]}>Nº {detalhes.numeroAdj.numero}</Text>
              </View>
              <View style={{flex: 0.3}}>
                <Text style={this.css.textRight}>
                  <Icon name="chevron-circle-right" style={this.css.icon}/>
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )

  }

}
