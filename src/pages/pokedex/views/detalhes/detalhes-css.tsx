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


}
