import React from "react";
import {ListaPokemonsModel} from "../../../view/services/lista-pokemons-model";
import {GlobalProps} from "../../../../../redux/props";
import {FiltroModel} from "./filtro-model";

export namespace FiltroProps {

  export interface Props extends GlobalProps {

    pokemons: ListaPokemonsModel.ViewModel[];

    filtro: {
      nomes: string[];
      habilidades: string[];
      tipos: string[];
      numeros: { minimo: number, maximo: number },
    };

    valores: FiltroModel.Form

    aplicarFiltros: (pesquisa: FiltroProps.Props, filtro: FiltroProps.States) => void;
    redefinirFiltros: (filtro: FiltroProps.Props) => void;

  }

  export interface States {

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
