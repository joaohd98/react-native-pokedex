import {StyleSheet} from "react-native";
import {Colors} from "../../../../helpers/colors/colors";

export class FiltroCSS {

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
    }
  });

}
