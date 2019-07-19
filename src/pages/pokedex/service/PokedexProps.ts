import {PokedexModel} from "./PokedexModel";

export namespace PokedexProps {

  export interface Filtro {

    filtro: {
      nomes: string[],
      habilidades: string[],
      tipos: string[],
      numeros: { minimo: number, maximo: number }
    },
    valores: {
      nome: string,
      habilidadesEscolhida: string[],
      tiposEscolhidos: string[],
      fraquezasEscolhidas: string[],
      alturas: string[],
      pesos: string[],
      numeros: { minimo: number, maximo: number }
    }

  }

  export interface Props {

    pokemons: PokedexModel.ViewModel[]
    limite: number,
    pesquisa: Filtro
    carregando: boolean,
    erro: boolean,
    carregarPokemons: () => void,
    adicionarLimite: () => void,

  }

}
