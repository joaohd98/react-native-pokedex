export namespace FiltroModel {

  export interface FiltroValoresModel {

    filtro: {
      nomes: string[];
      habilidades: string[];
      tipos: string[];
      numeros: { minimo: number, maximo: number },
    };

    valores: ValoresModel

  }

  export interface ValoresModel {
    nome: string;
    habilidadeEscolhida: string;
    tiposEscolhidos: string[];
    fraquezasEscolhidas: string[];
    numeros: { minimo: number, maximo: number },
    alturas: { pequeno: boolean, medio: boolean, grande: boolean },
    pesos: { leve: boolean, medio: boolean, pesado: boolean }
  }

  export interface FormModel {
    tipos: {
      nome: string;
      tipo: boolean;
      fraqueza: boolean
    }[]
    intervaloNumeros: {
      limites: number[],
      valores: number[],
    }
    habilidades: {
      todas: string[]
      selecionada: string,
    }
    altura: { pequeno: boolean, medio: boolean, grande: boolean },
    peso: { leve: boolean, medio: boolean, pesado: boolean },
  }

}






