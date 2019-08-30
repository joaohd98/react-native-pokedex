import {Component} from "react";

export class DetalhesNavBar extends Component {

  static Header = ({navigation}) => {

    return ({
      headerTitle: navigation.getParam("nomePokemon"),
    });

  }

}
