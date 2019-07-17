import {Dimensions} from "react-native";

export class Helpers {

  static pegarPorcentagem(porcentagem: number) {

    return Dimensions.get("screen").width * (porcentagem / 100);

  }

}
