import {PokedexModel} from "./PokedexModel";
import {RefObject} from "react";
import {FlatList} from "react-native";
import {GlobalProps} from "../../../redux/GlobalProps";

export namespace PokedexProps {

  export interface Filtro {

    filtro: {
      nomes: string[];
      habilidades: string[];
      tipos: string[];
      numeros: { minimo: number, maximo: number },
    };

    valores: {
      nome: string;
      habilidadeEscolhida: string;
      tiposEscolhidos: string[];
      fraquezasEscolhidas: string[];
      numeros: { minimo: number, maximo: number },
      alturas: { pequeno: boolean, medio: boolean, grande: boolean },
      pesos: { leve: boolean, medio: boolean, pesado: boolean }
    }

  }

  export interface Props extends GlobalProps {

    pokemons: PokedexModel.ViewModel[];
    flatList: RefObject<FlatList<PokedexModel.ViewModel>>;
    limite: number;
    pesquisa: Filtro;
    carregando: boolean;
    erro: boolean;
    carregarPokemons: () => void;
    adicionarLimite: () => void;
    filtrarPokemons: (pokemon, filtro) => void

  }

  export interface FiltroForm {
    tipos: {
      nome: string;
      tipo: boolean;
      fraqueza: boolean
    }[],
    intervaloNumeros: {
      limites: { minimo: number, maximo: number },
      valores: { minimo: number, maximo: number },
    }
    habilidades: {
      todas: string[]
      selecionada: string,
    },
    altura: { pequeno: boolean, medio: boolean, grande: boolean },
    peso: { leve: boolean, medio: boolean, pesado: boolean }
  }

}
