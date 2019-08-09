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
    modal: {
      height: Helpers.pegarPorcentagem(100, "height"),
      width: Helpers.pegarPorcentagem(100, "width"),
      backgroundColor: "#25252595",
    },
    select: {
      height: Helpers.pegarPorcentagem(40, "height"),
      width: Helpers.pegarPorcentagem(60, "width"),
      backgroundColor: "#FFF",
      borderRadius: 20,
      position: "absolute",
      top: Helpers.pegarPorcentagem(30, "height"),
      bottom: Helpers.pegarPorcentagem(30, "height"),
      left: Helpers.pegarPorcentagem(20, "width"),
      right: Helpers.pegarPorcentagem(20, "width"),
    },
    selectTitle: {
      paddingVertical: 5,
      borderWidth: 1,
      borderColor: "#f5f5f5",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20
    },
    selectTitleText: {
      textAlign: "center",
      fontSize: 18,
      fontWeight: "400",
      letterSpacing: 1
    },
    selecItemClick: {
      flexDirection: "row",
      paddingVertical: 5
    },
    selectItem: {
      height: 20,
    },
    selectItemIcon: {
      paddingHorizontal: Helpers.pegarPorcentagem(2, "width"),
      width: 30,
    },
    selectView: {
      flexDirection: "row"
    },
    selectButtons: {
      flex: 0.5,
      borderLeftWidth: 1,
      borderTopWidth: 0.5,
      borderColor: Colors.black
    },
    selectButtonsText: {
      textAlign: "center",
      padding: 8,
      fontSize: 15,
      color: Colors.link,
    }
  })


}
