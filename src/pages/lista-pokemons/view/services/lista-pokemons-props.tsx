import React, {RefObject} from "react";
import {FlatList} from "react-native";
import {GlobalProps} from "../../../../redux/props";
import {ListaPokemonsModel} from "./lista-pokemons-model";
import {FiltroProps} from "../../sub-views/filtro/services/filtro-props";

export namespace ListaPokemonsProps {

  export interface Props extends GlobalProps {

    pokemons: ListaPokemonsModel.ViewModel[];
    flatList: RefObject<FlatList<ListaPokemonsModel.ViewModel>>;
    limite: number;
    pesquisa: FiltroProps.Props;
    carregando: boolean;
    erro: boolean;
    funcoes: {
      carregarPokemons: () => void;
      adicionarQuantidade: () => void;
      pesquisarPokemon: (pokemons: ListaPokemonsModel.ViewModel[], pesquisa: FiltroProps.Props) => void,
      irParaDetalhes: (pokemon: ListaPokemonsModel.ViewModel) => void
    }
  }


}
