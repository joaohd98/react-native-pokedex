import React from "react";
import {GlobalProps} from "../../../../../redux/props";
import {ListaPokemonsModel} from "../../../view/services/lista-pokemons-model";
import {DetalhesModel} from "./detalhes-model";

export namespace DetalhesProps {

  export interface Props extends GlobalProps {

    pokemonSelecionado?: ListaPokemonsModel.ViewModel;
    pokemonDetalhes?: DetalhesModel.ViewModel;
    outrosPokemons: ListaPokemonsModel.ViewModel[];
    carregando: boolean;
    erro: boolean;
    funcoes: {
      carregarDetalhes: (pokemon: ListaPokemonsModel.ViewModel, outrosPokemons: ListaPokemonsModel.ViewModel[]) => {},
      irParaOutrosDetalhes: (pokemon: ListaPokemonsModel.ViewModel, outrosPokemons: ListaPokemonsModel.ViewModel[]) => {},
    }

  }


}
