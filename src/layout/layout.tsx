import React from "react";
import {Component} from "react";
import {Pokedex} from "../pages/pokedex/pokedex";
import {View} from "react-native";
import {Header} from "../components/header/header";

export class Layout extends Component {

  render(){

    return (
      <View style={{flex: 1, flexDirection: "column"}}>
        <View style={{flex: 0.07, backgroundColor: "#A1A"}}>
          <Header/>
        </View>
        <View style={{flex: 0.93}}>
          <Pokedex/>
        </View>
      </View>
    )

  }

}
