import React, {Component} from 'react'
import {Animated, Text, TouchableOpacity, View} from "react-native";
import {DetalhesCSS} from "../detalhes-css";
import Icon from 'react-native-vector-icons/FontAwesome';

interface States {
  alturaCard: number,
  mostrarHabilidade: boolean
  cardfadeAnim: Animated.Value
}

export class DetalhesInformacoes extends Component<{}, States> {

  private css = DetalhesCSS.informacoes;

  state = {
    alturaCard: 0,
    mostrarHabilidade: false,
    cardfadeAnim: new Animated.Value(0)
  };

  mostrarDescricao() {

    let view = (
      <Animated.View style={{...this.css.abilitiesSubView, height: this.state.alturaCard - 10, opacity: this.state.cardfadeAnim}} >
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
    );

    return this.state.mostrarHabilidade ? view : null

  }

  mudarCard(mostrarHabilidade) {

    if(mostrarHabilidade) {

      this.setState({ mostrarHabilidade}, () => {

        let config = {
          toValue: 1,
          duration: 500
        };

        Animated.timing(this.state.cardfadeAnim, config).start();

      });
    }

    else {

      let config = {
        toValue: 0,
        duration: 500
      };

      Animated.timing(this.state.cardfadeAnim, config).start(() => {
        this.setState({mostrarHabilidade});
      });

    }


  }

  render() {

    return (
      <View style={this.css.view} onLayout={event => this.setState({ alturaCard: event.nativeEvent.layout.height }) }>
        { this.mostrarDescricao() }
        <View>
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
      </View>
    );

  }

}
