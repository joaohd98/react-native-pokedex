import {StyleSheet} from "react-native";
import {Colors} from "../../helpers/colors/colors";

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

  static PokedexCard = StyleSheet.create({
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
      marginTop: 10
    },
    habilidade: {
      width: 110,
      borderRadius: 3,
      fontSize: 11,
      lineHeight: 18,
      letterSpacing: 1.5,
      marginRight: 10,
      backgroundColor: 'yellow',
      textAlign: "center",
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


}

