import React, {Component} from "react";
import {StyleSheet, TextInput, View} from "react-native";
import {Colors} from "../../../helpers/colors/colors";
import Icon from 'react-native-vector-icons/FontAwesome';

export class PokedexInput extends Component{

  style = StyleSheet.create({
    view: {
      flexDirection: "row"
    },
    icon: {
      top: 15,
      left: 25,
      color: Colors.gray
    },
    textInput: {
      flex: 0.94,
      marginTop: 10,
      borderWidth: 1,
      padding: 5,
      paddingLeft: 30,
      height: 30,
      fontSize: 16,
      color: Colors.gray,
      borderColor: Colors.gray
    }
  });

  render() {

    return (
      <View style={this.style.view}>
        <Icon name="search" size={20} style={this.style.icon}/>
        <TextInput placeholder={"Nome ou número"} style={this.style.textInput}/>
      </View>
    );

  }

}
