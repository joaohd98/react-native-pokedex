import {StyleSheet} from "react-native";
import {Colors} from "../../../../helpers/colors/colors";
import {Helpers} from "../../../../helpers/helpers";

export class FiltroCSS {

  static VIEW = StyleSheet.create({
    scrollView: {
      backgroundColor: "#424242",
      flex: 1,
      paddingHorizontal: Helpers.pegarPorcentagem(5)
    }
  });

  static TIPOS_FRAQUEZAS = StyleSheet.create({
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
      backgroundColor: "red",
      padding: 5,
      borderRadius: 100,
      height: 30,
      width: 30,
      marginHorizontal: 2,
      justifyContent: "center"
    },
    centralizar: {
      textAlign: "center"
    }
  });

}
