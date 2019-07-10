import React, {Component} from "react";
import {TextInput, View} from "react-native";

export class PokedexInput extends Component{

  render() {

    return (
      <View>
        <TextInput placeholder={"teste editado"} style={{backgroundColor: "#AAA"}}/>
      </View>
    );

  }

}
