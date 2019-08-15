import React from "react";
import {TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export class PokedexHeader extends React.Component {

  static Header = ({screenProps, navigation}) => {

    return ({
      headerTitle: 'Pokédex',
      headerTitleContainerStyle: {
        justifyContent: "flex-start",
        left: 5
      },
      headerRight: (
        navigation.getParam('mostrarFiltro') ?
          <TouchableOpacity onPress={() => navigation.navigate('filtro')}>
            <Icon name="bars" size={30} color="#000"/>
          </TouchableOpacity> : <View/>

      )
    });

  };

}
