import React, {Component} from "react";
import {View, Image, Text} from "react-native";
import {images} from "../../assets";
import {LoginCSS} from "./login-css";

export class Login extends Component {

  render() {

    return (
      <View style={LoginCSS.view}>
        <Image source={images.pokeball} style={LoginCSS.logo}/>
        <Text style={LoginCSS.titulo}>PokeDex</Text>
      </View>
    )

  }

}