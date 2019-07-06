import React, {Component} from "react";
import {View, Image, Text, Button, TextInput} from "react-native";
import {images} from "../../assets";
import {LoginCSS} from "./login-css";
import {CustomInput} from "../../components/Input/input";

export class Login extends Component {

  render() {

    return (
      <View style={LoginCSS.view}>
        <View style={LoginCSS.tituloLogo}>
          <Image source={images.pokeball} style={LoginCSS.logo} />
          <Text style={LoginCSS.titulo}>PokeDex</Text>
        </View>
        <CustomInput/>
        <CustomInput/>
        <Button title={"Entrar"} onPress={() => {}} />
      </View>
    )


  }

}
