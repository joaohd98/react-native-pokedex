export namespace FiltroModel {

  export interface Form {
    nome: string;
    habilidadeEscolhida: string;
    tiposEscolhidos: string[];
    fraquezasEscolhidas: string[];
    numeros: { minimo: number, maximo: number },
    alturas: { pequeno: boolean, medio: boolean, grande: boolean },
    pesos: { leve: boolean, medio: boolean, pesado: boolean }
  }

}






