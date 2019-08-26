import React from "react";
import {GlobalProps} from "../../../../../redux/props";
import {ListaPokemonsModel} from "../../../view/services/lista-pokemons-model";

export namespace DetalhesProps {

  export interface Props extends GlobalProps {

    pokemon: ListaPokemonsModel.ViewModel;
    carregarDetalhes: () => void,
    carregando: boolean;
    erro: boolean;

  }


}
