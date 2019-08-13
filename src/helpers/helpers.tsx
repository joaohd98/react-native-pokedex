import {Dimensions} from "react-native";

export class Helpers {

  static pegarPorcentagem(porcentagem: number, tipo: "width" | "height") {

    let tamanho = tipo == "width" ? Dimensions.get("screen").width : Dimensions.get("screen").height;

    return tamanho * (porcentagem / 100);

  }

  static eNumero(texto: string) {

    return !isNaN(parseInt(texto));

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

  static compararStrings(t1: string, t2: string) {

    return Helpers.removerAcentosMinusculo(t1).includes(Helpers.removerAcentosMinusculo(t2))
  }

  static ordenarArray(habilidades: string[], excessoes: string[]) {

    return habilidades.sort((a, b) => {

      if(excessoes.indexOf(a) > -1 || excessoes.indexOf(b) > -1)
        return 1;

      if (a < b)
        return -1;

      if (a > b)
        return 1;

      return 0;

    });

  }

}
