import {PokedexModel} from "./pokedex-model";
import {RefObject} from "react";
import {FlatList, ScrollView} from "react-native";
import {GlobalProps} from "../../../redux/props";

export namespace PokedexProps {

  export interface Props extends GlobalProps {

    pokemons: PokedexModel.ViewModel[];
    flatList: RefObject<FlatList<PokedexModel.ViewModel>>;
    limite: number;
    pesquisa: Filtro;
    carregando: boolean;
    erro: boolean;
    carregarPokemons: () => void;
    adicionarLimite: () => void;
    filtrarPokemons: (pokemon, filtro) => void,
    irParaDetalhes: (pokemon: PokedexModel.ViewModel) => void

  }

  export interface Filtro extends GlobalProps{

    pokemons: PokedexModel.ViewModel[];

    filtro: {
      nomes: string[];
      habilidades: string[];
      tipos: string[];
      numeros: { minimo: number, maximo: number },
    };

    valores: FiltroPropsValues

    aplicarFiltros: (pesquisa: PokedexProps.Filtro, filtro: PokedexProps.FiltroForm) => void;
    redefinirFiltros: (filtro: PokedexProps.Filtro) => void;

  }

  export interface FiltroPropsValues {

    nome: string;
    habilidadeEscolhida: string;
    tiposEscolhidos: string[];
    fraquezasEscolhidas: string[];
    numeros: { minimo: number, maximo: number },
    alturas: { pequeno: boolean, medio: boolean, grande: boolean },
    pesos: { leve: boolean, medio: boolean, pesado: boolean }

  }

  export interface FiltroForm {

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


  export interface DetalhesProps {

    pokemon: PokedexModel.ViewModel;
    outrosPokemons: PokedexModel.ViewModel[];


  }

}
