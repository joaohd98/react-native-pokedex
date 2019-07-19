import {Dimensions} from "react-native";

export class Helpers {

  static pegarPorcentagem(porcentagem: number) {

    return Dimensions.get("screen").width * (porcentagem / 100);

  }

  static removerDuplicados(array: any[]) {

    let set = new Set(array);

    return Array.from(set);

  }

  static removerAcentosMinusculo(texto: string) {

    texto = texto.toLowerCase();

    texto = texto.replace(new RegExp("\\s", 'g'),"");
    texto = texto.replace(new RegExp("[àáâãäå]", 'g'),"a");
    texto = texto.replace(new RegExp("æ", 'g'),"ae");
    texto = texto.replace(new RegExp("ç", 'g'),"c");
    texto = texto.replace(new RegExp("[èéêë]", 'g'),"e");
    texto = texto.replace(new RegExp("[ìíîï]", 'g'),"i");
    texto = texto.replace(new RegExp("ñ", 'g'),"n");
    texto = texto.replace(new RegExp("[òóôõö]", 'g'),"o");
    texto = texto.replace(new RegExp("œ", 'g'),"oe");
    texto = texto.replace(new RegExp("[ùúûü]", 'g'),"u");
    texto = texto.replace(new RegExp("[ýÿ]", 'g'),"y");
    texto = texto.replace(new RegExp("\\W", 'g'),"");

    return texto;

  }

}
