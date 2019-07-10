import React, {Component} from "react";
import { TextInput } from "react-native";

export class PokedexInput extends Component{

  render() {

    return (
      <TextInput placeholder={"teste editado"} style={{backgroundColor: "#A1A", lineHeight: 30}}/>
    );

  }

}
