import { StyleSheet } from "react-native";

export const LoginCSS = StyleSheet.create({
  view: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  logo: {
    height: 225,
    width: 225,
    marginBottom: 10
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

  }
});
