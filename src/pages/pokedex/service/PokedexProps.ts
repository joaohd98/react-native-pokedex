import {PokedexModel} from "./PokedexModel";
import {Ref, RefObject} from "react";
import {FlatList} from "react-native";

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

    pokemons: PokedexModel.ViewModel[],
    flatList: RefObject<FlatList<PokedexModel.ViewModel>>,
    limite: number,
    pesquisa: Filtro
    carregando: boolean,
    erro: boolean,
    carregarPokemons: () => void,
    adicionarLimite: () => void,
    filtrarPokemons: (pokemons, filtro) => void

  }

}
