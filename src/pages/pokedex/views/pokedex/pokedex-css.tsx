import {StyleSheet} from "react-native";
import {Colors} from "../../../../helpers/colors/colors";
import {Helpers} from "../../../../helpers/helpers";

export class PokedexCSS {

  static MOSTRAR_MENSAGEM = StyleSheet.create({
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
    },
    button: {
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      width: Helpers.pegarPorcentagem(80, "width")
    }
  });

  static PokedexCard = StyleSheet.create({
    view: {
      paddingTop: 40,
    },
    card: {
      flex: 1,
      margin: 20
    },
    imagem: {
      backgroundColor: "#F2F2F2",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      borderRadius: 10
    },
    cardContent: {
      marginLeft: 15,
      marginTop: 2
    },
    numero: {
      color: '#919191',
      fontWeight: "bold",
      lineHeight: 25,
      fontSize: 15
    },
    nomeContent: {
      marginTop: 2.5
    },
    nome: {
      color: "#31311D",
      fontSize: 20,
      fontWeight: "700"
    },
    habilidadesContent: {
      flexDirection: "row",
      marginTop: 10,
    },
    habilidadeLabel: {
      width: 110,
      marginRight: 10,
      borderRadius: 3,
      borderTopWidth: 8,
      borderBottomWidth: 8,
    },
    habilidadeText: {
      fontSize: 12,
      lineHeight: 20,
      letterSpacing: 2,
      marginTop: -10,
      marginBottom: -10,
      textAlign: "center",
      textTransform: "capitalize",
      color: "blue"
    }
  });

  static PokedexCardSkeleton = StyleSheet.create({
    imagem: {
      width: 200,
      height: 160,
      margin: 20,
    },
    numero: {
      ...PokedexCSS.PokedexCard.numero,
      width: 80,
      height: 20,
      marginTop: 5
    },
    nome: {
      ...PokedexCSS.PokedexCard.nome,
      width: 140,
      height: 20,
      marginTop: 5
    },
    habilidades: {
      width: 230,
      height: 18,
    }
  });

  static InputAutoComplete = StyleSheet.create({
    view: {
      width: Helpers.pegarPorcentagem(100, "width"),
      position: 'absolute',
      zIndex: 999,
      elevation: 999,
    },
    autoCompleteView: {
      width: Helpers.pegarPorcentagem(100, "width") - Helpers.pegarPorcentagem(6, "width") * 2,
      marginHorizontal:  Helpers.pegarPorcentagem(6, "width"),
      marginVertical: 10,
      backgroundColor: "white",
    },
    inputView: {
      flex: 1,
      flexDirection: "row",
    },
    icon: {
      top: 7,
      left: 6,
      color: Colors.gray,
      position: "absolute"
    },
    textInput: {
      flex: 1,
      borderWidth: 1,
      padding: 5,
      paddingLeft: 25,
      height: 30,
      fontSize: 16,
      color: Colors.gray,
      borderColor: Colors.gray,
    },
    list: {
      borderColor: Colors.gray,
      borderWidth: 1,
      borderTopWidth: 0,
    },
    column: {
      paddingLeft: 25,
      paddingVertical: 10,
      backgroundColor: "white"
    },
    columnText: {
      fontSize: 14,
      color: Colors.black,
      fontWeight: "600"
    }
  });

}


