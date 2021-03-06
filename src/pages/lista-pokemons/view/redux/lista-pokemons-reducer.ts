import React from "react";
import {FlatList} from "react-native";
import {ListaPokemonsProps} from "../services/lista-pokemons-props";
import {ListaPokemonsModel} from "../services/lista-pokemons-model";
import {ListaPokemonsAction, ListaPokemonsConst} from "./lista-pokemons-action";
import {FiltroInteractor} from "../../sub-views/filtro/services/filtro-interactor";

export const ListaPokemonsInitalState: ListaPokemonsProps.Props = {
  pokemons: [],
  pesquisa: FiltroInteractor.filtroValoresIniciais(),
  flatList: React.createRef<FlatList<ListaPokemonsModel.ViewModel>>(),
  limite: 10,
  carregando: true,
  erro: false,
  funcoes: {
    carregarPokemons: () => ListaPokemonsAction.carregarPokemons(),
    adicionarQuantidade: () => ListaPokemonsAction.adicionarQuantidade(),
    pesquisarPokemon: (pokemons, pesquisa) => ListaPokemonsAction.pesquisarPokemon(pokemons, pesquisa),
    irParaDetalhes: (pokemons, outrosPokemons) => ListaPokemonsAction.irParaDetalhes(pokemons, outrosPokemons),
    irParaFiltro: (pokemons, pesquisa) => ListaPokemonsAction.irParaFiltro(pokemons, pesquisa),
  },
  atualizar: false,
};

export const listaPokemonsReducer = (state = ListaPokemonsInitalState, action: { type: ListaPokemonsConst, payload: any }) => {

  switch (action.type) {

    case ListaPokemonsConst.LISTA_POKEMON_CARREGANDO:
      return {
        ...state,
        carregando: true,
        erro: false,
        atualizar: !state.atualizar,
      };

    case ListaPokemonsConst.LISTA_POKEMON_CARREGADO:
      return {
        ...state,
        pokemons: action.payload.pokemons,
        pesquisa: {
          filtro: action.payload.filtro,
          valores: {
            ...state.pesquisa.valores,
            numeros: action.payload.filtro.numeros
          }
        },
        ...action.payload,
        erro: false,
        carregando: false,
        atualizar: !state.atualizar,
      };

    case ListaPokemonsConst.LISTA_POKEMON_ERRO_CARREGAR:
      return {
        ...state,
        erro: true,
        carregando: false,
        atualizar: !state.atualizar,
      };

    case ListaPokemonsConst.LISTA_POKEMON_ADICIONAR_QUANTIDADE: {
      return {
        ...state,
        limite: state.limite + 10,
        atualizar: !state.atualizar,
      }
    }

    case ListaPokemonsConst.LISTA_POKEMON_PESQUISAR: {

      return {
        ...state,
        pokemons: action.payload.pokemons,
        pesquisa: action.payload.pesquisa,
        limite: JSON.stringify(action.payload.pesquisa.valores) == JSON.stringify(state.pesquisa.valores) ? state.limite : 10,
        atualizar: !state.atualizar,
      }
    }


    case ListaPokemonsConst.LISTA_POKEMON_FILTRAR: {

      return {
        ...state,
        pokemons: action.payload.pokemons,
        pesquisa: {filtro: state.pesquisa.filtro, valores: action.payload.filtro_valores},
        limite: JSON.stringify(action.payload.pesquisa_valores) == JSON.stringify(state.pesquisa.valores) ? state.limite : 10,
        atualizar: !state.atualizar,
      }
    }

    default:
      return state

  }

};


