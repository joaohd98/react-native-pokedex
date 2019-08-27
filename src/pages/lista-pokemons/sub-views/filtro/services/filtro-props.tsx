import React from "react";
import {ListaPokemonsModel} from "../../../view/services/lista-pokemons-model";
import {GlobalProps} from "../../../../../redux/props";
import {FiltroModel} from "./filtro-model";

export namespace FiltroProps {

  export interface Props extends GlobalProps {

    pokemons: ListaPokemonsModel.ViewModel[],
    filtro: FiltroModel.FormModel;
    funcoes: {
      aplicarFiltros: (pokemons: ListaPokemonsModel.ViewModel[], filtro: FiltroModel.FormModel) => void,
      redefinirFiltros: (filtro: FiltroModel.FormModel) => void
    },
  }

}
