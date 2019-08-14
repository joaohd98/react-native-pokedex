import React from "react";
import {TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  navigation?: any;
}

export class PokedexHeader extends React.Component<Props> {

  static Header = ({navigation}) => {

    return ({
      headerTitle: 'Pokédex',
      headerTitleContainerStyle: {
        justifyContent: "flex-start",
        left: 5,

      },
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('filtro')}>
          <Icon name="bars" size={30} color="#000"/>
        </TouchableOpacity>
      )
    });

  };

}
