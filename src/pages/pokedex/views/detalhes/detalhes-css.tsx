import {StyleSheet} from "react-native";
import {Helpers} from "../../../../helpers/helpers";

const menores = Helpers.pegarPorcentagem(10, "width");
const maiores = Helpers.pegarPorcentagem(50, "width");

export class DetalhesCSS {

  static header = StyleSheet.create({
    view: {
      flexDirection: "row"
    },
    subView: {
      flex: 0.5,
      flexDirection: "row"
    },
    border: {
      width: menores,
      height: 100,
      backgroundColor: "#a4a4a4"
    },
    borderLeft: {
      transform: [{rotate: '60deg'}]
    },
    borderRight: {
      transform: [{rotate: '120deg'}]
    },
    content: {
      width: maiores,
      height: 50,
      backgroundColor: "#a4a4a4",
      flexDirection: "row",
      paddingTop: 15,
      paddingHorizontal: 15,
      zIndex: 100,
      elevation: 100,
    },
    contentLeft: {
      marginLeft: menores * -1,
      borderRightWidth: 0.5,
      borderRightColor: "#FFF"
    },
    contentRight: {
      marginRight: menores * -1,
      borderLeftWidth: 0.5,
      borderLeftColor: "#FFF"
    },
    icon: {
      fontSize: 25,
      color: "#FFF"
    },
    text: {
      fontSize: 20,
      fontWeight: "bold",
      color: "white",
    },
    textLeft: {
      textAlign: "left",
    },
    textRight: {
      textAlign: "right"
    }
  });

  static nomeImagem = StyleSheet.create({
    view: {
      alignItems: "center",
      marginTop: -40
    },
    viewText: {
      flexDirection: "row"
    },
    text: {
      color: "#212121",
      paddingRight: 5,
      fontSize: 25,
      fontWeight: "600"
    },
    number: {
      color: "#616161",
      paddingLeft: 5,
      fontSize: 25,
      fontWeight: "600"
    },
    viewImage: {
      backgroundColor: "#F2F2F2",
      borderRadius: 5,
      marginTop: 10,
    },
    image: {
      minHeight: 215,
      minWidth: 215
    }
  });

  static descricao = StyleSheet.create({
    view: {
      marginVertical: 25,
      marginHorizontal: 50
    },
    text: {
      color: '#212121',
      fontSize: 17,
      lineHeight: 25
    }
  });

  static informacoes = StyleSheet.create({
    view: {
      backgroundColor: "#30a7d7",
      marginHorizontal: 50,
      padding: 15,
      borderRadius: 10
    },
    row: {
      flexDirection: "row"
    },
    line: {
      flex: 0.5,
      alignItems: "flex-start"
    },
    word1: {
      color: "#fff",
      fontSize: 20,
      paddingBottom: 2,
      fontWeight: "400"
    },
    word2: {
      color: "#212121",
      fontSize: 15,
      paddingTop: 2,
      fontWeight: "400"
    },
  })

}
