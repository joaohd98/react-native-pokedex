import React, {RefObject} from "react";
import {FlatList} from "react-native";
import {GlobalProps} from "../../../../redux/props";
import {ListaPokemonsModel} from "./lista-pokemons-model";
import {FiltroModel} from "../../sub-views/filtro/services/filtro-model";

export namespace ListaPokemonsProps {

  export interface Props extends GlobalProps {

    pokemons: ListaPokemonsModel.ViewModel[];
    flatList: RefObject<FlatList<ListaPokemonsModel.ViewModel>>;
    limite: number;
    pesquisa: FiltroModel.FiltroValoresModel;
    carregando: boolean;
    erro: boolean;
    funcoes: {
      carregarPokemons: () => void;
      adicionarQuantidade: () => void;
      pesquisarPokemon: (pokemons: ListaPokemonsModel.ViewModel[], pesquisa: FiltroModel.FiltroValoresModel) => void,
      irParaDetalhes: (pokemon: ListaPokemonsModel.ViewModel, outrosPokemons: ListaPokemonsModel.ViewModel[]) => void,
      irParaFiltro: (pokemons: ListaPokemonsModel.ViewModel[], pesquisa: FiltroModel.FiltroValoresModel) => void,
    }
  }


}
