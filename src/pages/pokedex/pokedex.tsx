import React from "react";
import {Component} from "react";
import {Text, View, Image, ImageSourcePropType} from "react-native";

export class Pokedex extends Component {

  //https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png


  render() {

    let teste: ImageSourcePropType = {
      uri: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
      width: 200,
      height: 200,
    };

    return (
      <View style={{flex: 1, margin: 30}}>
        <View style={{backgroundColor: "#F2F2F2", justifyContent: "center", alignItems: "center", alignContent: "center", borderRadius: 10 }}>
          <Image source={teste} />
        </View>
        <View style={{marginLeft: 15, marginTop: 2}}>
          <View>
            <Text style={{color: '#919191', fontWeight: "bold", lineHeight: 25, fontSize: 15}}>N˚ 001</Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={{color: "#313131", fontSize: 20}}>Bulbasaur</Text>
          </View>
          <View style={{flexDirection: "row", marginTop: 5}}>
            <Text style={{width: 110, borderRadius: 3, fontSize: 11, lineHeight: 18, letterSpacing: 1.5, backgroundColor: 'yellow', textAlign: "center", marginRight: 3}}>Grass</Text>
            <Text style={{width: 110, borderRadius: 3, fontSize: 11, lineHeight: 18, letterSpacing: 1.5, backgroundColor: 'red', textAlign: "center", marginLeft: 3, color: "white"}}>Poison</Text>
          </View>
        </View>
      </View>
    )

  }

}
