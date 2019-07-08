import React from "react";
import {Component} from "react";
import {Pokedex} from "../pages/pokedex/pokedex";
import {View} from "react-native";

export class Layout extends Component {

  render(){

    return (
      <View style={{flex: 1}}>
        <Pokedex/>
      </View>
    )

  }

}
