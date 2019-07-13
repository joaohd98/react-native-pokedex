import {StyleSheet} from "react-native";
import {Colors} from "../../../../helpers/colors/colors";

export class PokedexListCss {

  static MOSTRAR_CARDS = StyleSheet.create({
    scrollView: {
      marginBottom: 50
    }
  });


  static MOSTRAR_SEM_CARDS = StyleSheet.create({
    view: {
      borderColor: Colors.red,
      borderWidth: 2,
      margin: 10,
      marginTop: 40,
      padding: 10
    },
    titulo: {
      color: Colors.red,
      marginBottom: 10,
      fontWeight: '500',
      fontSize: 16
    },
    subTitulo: {
      color: Colors.gray,
      fontWeight: 'bold',
      fontSize: 15,
      marginBottom: 15
    },
    itemView: {
      flexDirection: "row",
      marginBottom: 10
    },
    item: {
      color: Colors.gray,
      fontWeight: '500',
      fontSize: 14,
      paddingLeft: 10
    },
    ponto: {
      color: Colors.gray,
      fontSize: 15,
      marginRight: 10
    }
  });


  static MOSTRAR_SKELETON = StyleSheet.create({

  });


  static MOSTRAR_ERRO = StyleSheet.create({

  });

}
