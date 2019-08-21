import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Animated} from "react-native";
import {DetalhesCSS} from "../detalhes-css";
import Icon from 'react-native-vector-icons/FontAwesome';

interface States {
  mostrarHabilidade: boolean,
  alturaCard: number,
  cardfadeAnim: Animated.Value
}

export class DetalhesInformacoes extends Component<{}, States> {

  state = {
    mostrarHabilidade: false,
    alturaCard: 0,
    cardfadeAnim: new Animated.Value(0)
  };

  private css = DetalhesCSS.informacoes;

  mostrarDescricao() {

    return (
      <View style={{...this.css.abilitiesView, height: this.state.alturaCard}} >
        <Animated.View style={{...this.css.abilitiesSubView, height: this.state.alturaCard - 20, opacity: this.state.cardfadeAnim}} >
          <View style={this.css.row}>
            <View style={this.css.abilitiesTitle}>
              <Text style={this.css.abilitiesTitleText}>Ability Info</Text>
            </View>
            <TouchableOpacity style={this.css.abilitiesCloseButton} onPress={() => this.mudarCard(false)}>
              <Icon name={"close"} color={"#FFF"} size={25}/>
              <Text style={this.css.abilitiesCloseButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
          <View style={this.css.abilitiesNameTextContent}>
            <Text style={this.css.abilitiesName}>
              Overgrow
            </Text>
          </View>
          <View style={this.css.abilitiesNameTextContent}>
            <Text style={this.css.abilitiesText}>
              Powers up Grass-type moves when the Pokémon is in trouble.
            </Text>
          </View>
        </Animated.View>
      </View>
    )

  }

  mostrarCard() {

    return (
      <View style={this.css.view} onLayout={event => this.setState({ alturaCard: event.nativeEvent.layout.height }) }>
        <View style={this.css.row}>
          <View style={this.css.line}>
            <Text style={this.css.word1}>Height</Text>
            <Text style={this.css.word2}>1.0 m</Text>
          </View>
          <View style={this.css.line}>
            <Text style={this.css.word1}>Category</Text>
            <Text style={this.css.word2}>Seed</Text>
          </View>
        </View>
        <View style={{...this.css.row, paddingTop: 15}}>
          <View style={this.css.line}>
            <Text style={this.css.word1}>Weigth</Text>
            <Text style={this.css.word2}>13.0 kg</Text>
          </View>
          <View style={this.css.line}>
            <Text style={this.css.word1}>Abilities</Text>
            <View style={this.css.row}>
              <View>
                <Text style={this.css.word2}>
                  Overgrow
                </Text>
              </View>
              <TouchableOpacity style={{marginLeft: 10}} onPress={() => this.mudarCard(true)}>
                <Icon name={"question-circle"} style={{fontSize: 20, color: "#FFF"}} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{...this.css.row, paddingTop: 15}}>
          <View style={this.css.line}>
            <Text style={this.css.word1}>Gender</Text>
            <View style={this.css.row}>
              <View style={{marginRight: 5}}>
                <Icon name={"mars"} style={{fontSize: 25}} />
              </View>
              <View style={{marginLeft: 5}}>
                <Icon name={"venus"} style={{fontSize: 25}}/>
              </View>
            </View>
          </View>
        </View>
      </View>
    )

  }

  mudarCard(mostrarHabilidade) {

    let toValue = mostrarHabilidade ? 1 : 0;

    let config = {
      toValue: toValue,
      duration: 500
    };

    Animated.timing(this.state.cardfadeAnim, config).start(() => {

      this.setState({ mostrarHabilidade });

    });


  }

  render() {

    return this.state.mostrarHabilidade ? this.mostrarDescricao() : this.mostrarCard();

  }

}
