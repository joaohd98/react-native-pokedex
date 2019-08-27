import {Platform, StyleSheet} from "react-native";
import {Colors} from "../../../../../helpers/colors/colors";
import {Helpers} from "../../../../../helpers/helpers";

export class FiltroCSS {

  static LIST_ITEM_HEIGTH = 30;

  static VIEW = StyleSheet.create({
    view: {
      paddingBottom: 80,
      backgroundColor: "#424242",
    },
    scrollView: {
      backgroundColor: "#424242",
      paddingBottom: 50,
      paddingHorizontal: Helpers.pegarPorcentagem(5, "width"),
    }
  });

  static HEADER = StyleSheet.create({
    view: {
      marginTop: 15,
      marginBottom: 5,
    },
    title: {
      color: Colors.white,
      fontSize: 25,
      letterSpacing: 3,
      fontWeight: '400'
    },
    subTitle: {
      marginTop: 10,
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
      justifyContent: "center",
      borderRadius: 5,
      height: 30,
      borderBottomWidth: 15,
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
      flex: 0.50,
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
      justifyContent: "center",

    },
    centralizar: {
      textAlign: "center"
    },
    strong: {
      fontWeight: "bold"
    },
  });

  static INTERVALO = StyleSheet.create({
    view: {
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center",
      marginBottom: 10
    },
    marker: {
      backgroundColor: "#FFF",
      height: 35,
      width: 35,
      borderRadius: 35,
      justifyContent: "center",
      alignItems: "center"
    },
    valuesView: {
      flexDirection: "row"
    },
    valueViewFlex: {
      flex: 0.5
    },
    valueViewText: {
      fontSize: 16,
      fontWeight: "800",
      color: "#FFF"
    },
    valueViewTextFirst: {
      textAlign: "left",
    },
    valueViewTextSecond: {
      textAlign: "right",
    }
  });

  static HABILIDADES = StyleSheet.create({
    view: {
    },
    inputView: {
      flex: 1,
      flexDirection: "row",
    },
    icon: {
      top: Platform.OS === "ios" ? 19 : 21,
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

    },
    inputText: {
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
      borderWidth: 0.1,
      borderColor: Colors.red,
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
      height: FiltroCSS.LIST_ITEM_HEIGTH,
      flexDirection: "row",
      paddingVertical: 5
    },
    selectItemIcon: {
      paddingHorizontal: Helpers.pegarPorcentagem(2, "width"),
      width: 30,
    },
    selectItemText: {
      letterSpacing: 1,
      textTransform: "capitalize",
      fontWeight: "300"
    },
    selectList: {
      borderWidth: 0.3,
      borderColor: Colors.black,
    },
    selectView: {
      flexDirection: "row"
    },
    selectButtons: {
      borderLeftWidth: 0.3,
      borderColor: Colors.black,
      flex: 0.5,
    },
    selectButtonsText: {
      textAlign: "center",
      padding: 8,
      fontSize: 15,
      fontWeight: "bold",
      color: Colors.link,
    }
  });

  static PESO_ALTURA = StyleSheet.create({
    list: {
      flex: 1,
      flexDirection: "row"
    },
    listItens: {
      flex: 0.3,
      marginHorizontal: 20
    },
    listItensImage:{
      height: Helpers.pegarPorcentagem(10, "height"),
      width: Helpers.pegarPorcentagem(25, "width"),
      borderRadius: 10
    }
  });

  static BOTOES = StyleSheet.create({
    view: {
      marginBottom: 20,
      position: "absolute",
      flexDirection: "row",
      bottom: 0,
    },
    touchableView: {
      flex: 0.5,
      alignItems: "center",
    },
    button: {
      padding: 12,
      borderRadius: 5,
      width: Helpers.pegarPorcentagem(40, "width")
    },
    buttonPesquisa: {
      backgroundColor: "#ee6b2f",
    },
    buttonPesquisaContainer: {
      flexDirection: "row",
      justifyContent: "center"
    },
    buttonRedefinir: {
      backgroundColor: "#a4a4a4",
    },
    buttonIcon: {
      color: "#FFF",
      marginRight: 5
    },
    buttonText: {
      fontSize: 20,
      textAlign: "center",
      color: "#FFF",
      fontWeight: "600",
      letterSpacing: 1
    }
  })

}
