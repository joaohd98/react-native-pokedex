import {Dimensions, StyleSheet} from "react-native";

let size = Dimensions.get('window').height * 0.20;

export const LoginCSS = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
  },
  tituloLogo: {
    alignItems: 'center'
  },
  logo: {
    height: size,
    width: size,
  },
  titulo: {
    fontFamily: 'Pokemon Solid',
    fontSize: 40,
    color: "#ffcb05",
    textShadowColor: "#2a75bb",
    textShadowOffset: {width: 3, height: 2},
    textShadowRadius: 1,
    letterSpacing: 2.5,
    padding: 5,
  },
  button: {

  }
});
