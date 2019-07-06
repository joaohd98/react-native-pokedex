import React, { Component } from 'react';
import {TextInput, Text, View} from "react-native";
import {InputCSS} from "./input-css";

export class CustomInput extends Component {

  render() {

    return (
      <View style={InputCSS.view}>
        <TextInput style={InputCSS.input} placeholder={"Meu teste"} />
        <Text style={InputCSS.message}>wwww</Text>
      </View>
    )


  }

}
