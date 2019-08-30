import React from "react";
import {TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export class ListaPokemonsNavBar extends React.Component {

  static Header = ({navigation}) => {

    return ({
      headerTitle: 'Pokédex',
      headerRight: (
        navigation.getParam('mostrarFiltro') ?
          <TouchableOpacity onPress={() => navigation.getParam('irParaFiltro')()}>
            <Icon name="bars" size={30} color="#000"/>
          </TouchableOpacity> : <View/>
      )
    });

  };

}
