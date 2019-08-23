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

  static estatistica = StyleSheet.create({
    view: {
      flexDirection: "row",
      padding: 5,
      marginHorizontal: 10,
      backgroundColor: "#a4a4a4",
      justifyContent: "center"
    },
    column: {
      flex: 0.16,
      marginHorizontal: 6
    },
    skill: {
      borderWidth: 5,
      marginVertical: 3,
      height: 0
    },
    text: {
      fontWeight: "bold",
      fontSize: 10,
      textAlign: "center",
      marginVertical: 5,
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
    abilitiesView: {
      backgroundColor: "#30a7d7",
      marginHorizontal: 50,
      borderRadius: 10
    },
    abilitiesSubView: {
      backgroundColor: "#313131",
      borderRadius: 10,
      position: 'absolute',
      zIndex: 100,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    abilitiesTitle: {
      flex: 0.7,
      padding: 10
    },
    abilitiesTitleText: {
      marginLeft: 10,
      color: "#616161",
      fontWeight: "600",
      fontSize: 16
    },
    abilitiesCloseButton: {
      flex: 0.3,
      backgroundColor: "#000",
      padding: 10,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      alignItems: "center",
      flexDirection: "row"
    },
    abilitiesCloseButtonText: {
      marginLeft: 10,
      color: "#FFF",
      fontWeight: "600",
      fontSize: 15
    },
    abilitiesNameTextContent: {
      marginLeft: 10,
      padding: 10
    },
    abilitiesName: {
      color: "#FFF",
      fontWeight: "600",
      fontSize: 21,
      letterSpacing: 1
    },
    abilitiesText: {
      color: "#FFF",
      fontWeight: "400",
      fontSize: 16,
      letterSpacing: 1
    }

  });

  static tipoFraqueza = StyleSheet.create({
    view: {
      marginHorizontal: 50,
      marginVertical: 25,
    },
    title: {
      fontSize: 23,
      fontWeight: "400",
      color: "#212121"
    },
    typesWeakness: {
      marginVertical: 15,
      flexDirection: "row",
      paddingBottom: 25
    },
    typesWeaknessContent: {
      justifyContent: "center",
      borderRadius: 5,
      width: 90,
      height: 30,
      borderBottomWidth: 15,
      marginLeft: 5,
      paddingHorizontal:20,
      paddingVertical: 5
    },
    typesWeaknessText: {
      fontSize: 12,
      lineHeight: 20,
      letterSpacing: 2,
      textTransform: "capitalize",
      position: "absolute",
      justifyContent: "center",
      textAlign: "center",
      left: 0,
      right: 0
    }
  });

  static evolucoes = StyleSheet.create({
    view: {
      marginHorizontal: Helpers.pegarPorcentagem(10, "width"),
      marginVertical: 25,
      borderRadius: 15
    },
    title: {
      fontSize: 20,
      fontWeight: "400",
      color: "#FFF",
      lineHeight: 20,
      letterSpacing: 2,
      paddingHorizontal: 20,
      paddingVertical: 20
    },
    cardView: {
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      width: 300
    },
    cardIMG: {
      backgroundColor: "#616161",
      width: 200,
      height: 200,
      borderWidth: 5,
      borderRadius: 200,
      borderColor: "#FFF",
      alignItems: "center",
      justifyContent: "center"
    },
    cardSize: {
      width: Helpers.pegarPorcentagem(80, "width"),
    },
    nameNumberLine: {
      flexDirection: "row",
      marginVertical: 10
    },
    nameText: {
      color: "#FFF",
      marginRight: 2.5,
      fontSize: 20,
      fontWeight: "600"
    },
    numberText: {
      color: "#a4acaf",
      marginLeft: 2.5,
      fontSize: 20,
      fontWeight: "600"
    },
    typeLine: {
      flexDirection: "row",
      marginBottom: 10
    },
    typesContent: {
      justifyContent: "center",
      borderRadius: 5,
      width: 90,
      height: 30,
      borderBottomWidth: 15,
      marginLeft: 5,
      paddingHorizontal:20,
      paddingVertical: 5
    },
    typesText: {
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
  });
}
