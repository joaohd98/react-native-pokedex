import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from "react-native";
import {DetalhesCSS} from "../detalhes-css";
import Icon from 'react-native-vector-icons/FontAwesome';

export class DetalhesInformacoes extends Component {

  private css = DetalhesCSS.informacoes;

  render() {

    return (
      <View style={this.css.abilitiesView}>
        <View style={this.css.abilitiesSubView}>
          <View style={this.css.row}>
            <View style={this.css.abilitiesTitle}>
              <Text style={this.css.abilitiesTitleText}>Ability Info</Text>
            </View>
            <TouchableOpacity style={this.css.abilitiesCloseButton}>
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
        </View>
      </View>
    )

  }

}

{/*<View style={this.css.view}>*/}
{/*  <View style={this.css.row}>*/}
{/*    <View style={this.css.line}>*/}
{/*      <Text style={this.css.word1}>Height</Text>*/}
{/*      <Text style={this.css.word2}>1.0 m</Text>*/}
{/*    </View>*/}
{/*    <View style={this.css.line}>*/}
{/*      <Text style={this.css.word1}>Category</Text>*/}
{/*      <Text style={this.css.word2}>Seed</Text>*/}
{/*    </View>*/}
{/*  </View>*/}
{/*  <View style={{...this.css.row, paddingTop: 15}}>*/}
{/*    <View style={this.css.line}>*/}
{/*      <Text style={this.css.word1}>Weigth</Text>*/}
{/*      <Text style={this.css.word2}>13.0 kg</Text>*/}
{/*    </View>*/}
{/*    <View style={this.css.line}>*/}
{/*      <Text style={this.css.word1}>Abilities</Text>*/}
{/*      <View style={this.css.row}>*/}
{/*        <View>*/}
{/*          <Text style={this.css.word2}>*/}
{/*            Overgrow*/}
{/*          </Text>*/}
{/*        </View>*/}
{/*        <TouchableOpacity style={{marginLeft: 10}}>*/}
{/*          <Icon name={"question-circle"} style={{fontSize: 20, color: "#FFF"}} />*/}
{/*        </TouchableOpacity>*/}
{/*      </View>*/}
{/*    </View>*/}
{/*  </View>*/}
{/*  <View style={{...this.css.row, paddingTop: 15}}>*/}
{/*    <View style={this.css.line}>*/}
{/*      <Text style={this.css.word1}>Gender</Text>*/}
{/*      <View style={this.css.row}>*/}
{/*        <View style={{marginRight: 5}}>*/}
{/*          <Icon name={"mars"} style={{fontSize: 25}} />*/}
{/*        </View>*/}
{/*        <View style={{marginLeft: 5}}>*/}
{/*          <Icon name={"venus"} style={{fontSize: 25}}/>*/}
{/*        </View>*/}
{/*      </View>*/}
{/*    </View>*/}
{/*  </View>*/}
{/*</View>*/}
