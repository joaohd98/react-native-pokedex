import {TextStyle, ViewStyle} from "react-native";

interface Helper {
  card: ViewStyle,
  imagem: ViewStyle,
  cardContent: ViewStyle,
  numero: TextStyle,
  nomeContent: ViewStyle,
  nome: TextStyle,
  habilidadesContent: ViewStyle,
  habilidade: TextStyle,
}

export const PokedexCardCSS: Helper = {
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
    marginTop: 5
  },
  nome: {
    color: "#313131",
    fontSize: 20
  },
  habilidadesContent: {
    flexDirection: "row",
    marginTop: 5
  },
  habilidade: {
    width: 110,
    borderRadius: 3,
    fontSize: 11,
    lineHeight: 18,
    letterSpacing: 1.5,
    marginRight: 3,
    backgroundColor: 'yellow',
    textAlign: "center",
  }
};
