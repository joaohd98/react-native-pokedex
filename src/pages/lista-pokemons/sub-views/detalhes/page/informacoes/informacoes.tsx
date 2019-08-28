import React, {Component} from 'react'
import {Animated, Text, TouchableOpacity, View} from "react-native";
import {DetalhesCSS} from "../detalhes-css";
import Icon from 'react-native-vector-icons/FontAwesome';
import {DetalhesModel} from "../../services/detalhes-model";
import {PokemonGender} from "../../services/detalhes-interactor";

interface States {
  alturaCard: number,
  mostrarHabilidade: boolean
  cardfadeAnim: Animated.Value,
  categoriaSelecionada: {
    nome: string,
    descricao: string
  }
}

export class DetalhesInformacoes extends Component<DetalhesModel.ViewModel, States> {

  private css = DetalhesCSS.informacoes;

  state = {
    alturaCard: 0,
    mostrarHabilidade: false,
    cardfadeAnim: new Animated.Value(0),
    categoriaSelecionada: {
      nome: "",
      descricao: ""
    }
  };

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

  mostrarDescricao() {

    let view = (
      <Animated.View
        style={{...this.css.abilitiesSubView, height: this.state.alturaCard - 10, opacity: this.state.cardfadeAnim}}>
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
            {this.state.categoriaSelecionada.nome}
          </Text>
        </View>
        <View style={this.css.abilitiesNameTextContent}>
          <Text style={this.css.abilitiesText}>
            {this.state.categoriaSelecionada.descricao}
          </Text>
        </View>
      </Animated.View>
    );

    return this.state.mostrarHabilidade ? view : null

  }

  mostrarGenero() {

    switch (this.props.genero) {

      case PokemonGender.masculino:
        return (
          <View style={this.css.row}>
            <View>
              <Icon name={"mars"} style={{fontSize: 25}}/>
            </View>
          </View>
        );

      case PokemonGender.feminino:
        return (
          <View style={this.css.row}>
            <View>
              <Icon name={"venus"} style={{fontSize: 25}}/>
            </View>
          </View>
        );

      case PokemonGender.desconhecido:
        return (
          <View style={this.css.row}>
            <Text style={this.css.word2}>Unknown</Text>
          </View>
        );

      default:
        return (
          <View style={this.css.row}>
            <View style={{marginRight: 5}}>
              <Icon name={"mars"} style={{fontSize: 25}}/>
            </View>
            <View style={{marginLeft: 5}}>
              <Icon name={"venus"} style={{fontSize: 25}}/>
            </View>
          </View>
        );

    }

  }

  mostrarHabilidades() {

    let habilidades: JSX.Element[] = [];

    this.props.habilidades.forEach(habilidade => {

      const mudarCard = () => {

        this.setState({categoriaSelecionada: habilidade});

        this.mudarCard(true);

      };

      habilidades.push(
        <View style={this.css.row} key={habilidade.nome}>
          <View style={{marginBottom: 10, width: 80}}>
            <Text style={this.css.word2}>
              {habilidade.nome}
            </Text>
          </View>
          <TouchableOpacity style={{marginLeft: 10}} onPress={() => mudarCard()}>
            <Icon name={"question-circle"} style={{fontSize: 20, color: "#FFF"}}/>
          </TouchableOpacity>
        </View>
      );
    });

    return habilidades;

  }

  render() {

    return (
      <View style={this.css.view} onLayout={event => this.setState({ alturaCard: event.nativeEvent.layout.height }) }>
        { this.mostrarDescricao() }
        <View style={{flexDirection: "row"}}>
          <View style={{flex: 0.5}}>
            <View style={{...this.css.line}}>
              <Text style={this.css.word1}>Height</Text>
              <Text style={this.css.word2}>{this.props.altura} m</Text>
            </View>
            <View style={{...this.css.line, paddingTop: 15}}>
              <Text style={this.css.word1}>Weigth</Text>
              <Text style={this.css.word2}>{this.props.peso} kg</Text>
            </View>
            <View style={{...this.css.line, paddingTop: 15}}>
              <Text style={this.css.word1}>Gender</Text>
              {this.mostrarGenero()}
            </View>
          </View>
          <View style={{flex: 0.5}}>
            <View style={this.css.line}>
              <Text style={this.css.word1}>Abilities</Text>
              {this.mostrarHabilidades()}
            </View>
          </View>
        </View>
      </View>
    );

  }

}
