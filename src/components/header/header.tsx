import {Component} from "react";
import React from "react";
import {View, Text, Button} from "react-native";

export class Header extends Component {

  render() {

    return (

      <View style={{flex: 1, flexDirection: "row", alignContent: "center"}}>
        <View style={{flex: 0.2, marginTop: "auto"}}>
          <Button title={"T1"} onPress={() => {}} />
        </View>
        <View style={{flex: 0.6, marginTop: "auto", marginBottom: "auto"}}>
          <Text style={{textAlign: "center"}}>OOO</Text>
        </View>
        <View style={{flex: 0.2, marginTop: "auto"}}>
          <Button title={"T2"} onPress={() => {}} />
        </View>
      </View>
    );

  }

}
