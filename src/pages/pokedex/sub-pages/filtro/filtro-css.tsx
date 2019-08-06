import {Platform, StyleSheet} from "react-native";
import {Colors} from "../../../../helpers/colors/colors";
import {Helpers} from "../../../../helpers/helpers";

export class FiltroCSS {

  static VIEW = StyleSheet.create({
    scrollView: {
      backgroundColor: "#424242",
      flex: 1,
      paddingHorizontal: Helpers.pegarPorcentagem(5, "width"),
    }
  });

  static HEADER = StyleSheet.create({
    title: {
      marginTop: 20,
      color: Colors.white,
      fontSize: 25,
      letterSpacing: 3,
      fontWeight: '400'
    },
    subTitle: {
      marginTop: 10,
      marginBottom: 20,
      fontSize: 18,
      color: Colors.white,
      fontWeight: '400'
    },
    strong: {
      fontWeight: "bold"
    },
  });

  static TIPOS_FRAQUEZAS = StyleSheet.create({
    rowTipos: {
      flexDirection: "row",
      flex: 1,
      marginVertical: 5
    },
    tipo: {
      flex: 0.55,
      borderRadius: 5,
      height: 30,
      borderTopWidth: 15,
      borderBottomWidth: 15,
      justifyContent: "center"
    },
    tipoTexto: {
      fontSize: 12,
      lineHeight: 20,
      letterSpacing: 2,
      textTransform: "capitalize",
      position: "absolute",
      justifyContent: "center",
      textAlign: "center",
      left: 0,
      right: 0
    },
    fraquezaForca: {
      flex: 0.45,
      flexDirection: "row",
      justifyContent: "center",
    },
    fraquezaForcaBalao: {
      backgroundColor: "#F2F2F2",
      padding: 5,
      borderRadius: 100,
      height: 30,
      width: 30,
      marginHorizontal: 2,
      justifyContent: "center"
    },
    centralizar: {
      textAlign: "center"
    },
    strong: {
      fontWeight: "bold"
    },
  });

  static HABILIDADES = StyleSheet.create({
    view: {
      marginVertical: 5
    },
    inputView: {
      flex: 1,
      flexDirection: "row",
      marginVertical: 5
    },
    icon: {
      top: Platform.OS === "ios" ? 19 : 23,
      left: 8,
      width: 25,
      height: 25,
      position: "absolute",
      zIndex: 100,
    },
    input: {
      flex: 1,
      backgroundColor: "#313131",
      paddingLeft: 40,
      marginTop: 10,
      borderRadius: 5,
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      color: '#FFF',
      fontWeight: "700",
      textTransform: "capitalize",
    },
    transparent: {
      height: Helpers.pegarPorcentagem(Platform.OS === "ios" ? 70 : 80, "height"),
      width: Helpers.pegarPorcentagem(100, "width"),
    },
    modal: {
      height: Helpers.pegarPorcentagem(Platform.OS === "ios" ? 30 : 20, "height"),
      width: Helpers.pegarPorcentagem(100, "width"),
      backgroundColor: "#FFF",
      position: "absolute",
      bottom: 0
    },
    selectView: {
      flexDirection: "row"
    },
    selectBotoes: {
      flex: 0.5,
      borderWidth: 1,
      borderLeftWidth: 0,
      borderColor: Colors.gray
    },
    selectBotoesTexto: {
      textAlign: "center",
      padding: 20,
      fontSize: 16,
      color: "blue",
    }
  })


}
