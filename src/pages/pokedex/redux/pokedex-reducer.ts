import {PokedexAction, PokedexConst} from "./pokedex-action";
import {PokedexProps} from "../service/pokedex-props";
import {PokedexInteractor} from "../service/pokedex-interactor";
import React from "react";
import {FlatList} from "react-native";
import {PokedexModel} from "../service/pokedex-model";

export const PokedexInitalState: PokedexProps.Props = {
  pokemons: [],
  pesquisa: PokedexInteractor.filtroValoresIniciais(),
  flatList: React.createRef<FlatList<PokedexModel.ViewModel>>(),
  limite: 10,
  carregando: true,
  erro: false,
  funcoes: {
    carregarPokemons: () => PokedexAction.carregarPokemons(),
    adicionarLimite: () => PokedexAction.adicionarLimite(),
    filtrarPokemons: (pokemons, filtro) => PokedexAction.filtrarPokemons(pokemons, filtro),
    irParaDetalhes: (pokemons) => PokedexAction.irParaDetalhes(pokemons),
  }
};


const pokedexReducer = (state = PokedexInitalState, action: {type: PokedexConst, payload: any}) => {

  switch (action.type) {

    case PokedexConst.CARREGANDO:
      return {
        ...state,
        carregando: true,
        erro: false
      };

    case PokedexConst.CARREGADO_POKEMONS:
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
        carregando: false
      };

    case PokedexConst.ERRO_CARREGAR_POKEMONS:
      return {
        ...state,
        erro: true,
        carregando: false
      };

    case PokedexConst.ADICIONAR_LIMITE: {
      return {
        ...state,
        limite: state.limite + 10,
      }
    }

    case PokedexConst.FILTRAR_POKEMON: {
      return {
        ...state,
        pokemons: action.payload.pokemons,
        pesquisa: { ...state.pesquisa, valores: action.payload.pesquisa.valores },
        limite: 10,
        carregando: false,
      }
    }

    case PokedexConst.APLICAR_FILTROS: {

      return {
        ...state,
        pokemons: action.payload.pokemons,
        pesquisa: { ...state.pesquisa, valores: action.payload.filtro_valores },
        limite: JSON.stringify(action.payload.filtro_valores) == JSON.stringify(state.pesquisa.valores) ? state.limite : 10,
        carregando: false,
      }

    }

    case PokedexConst.REDEFINIR_FILTROS: {

      return {
        ...state,
        pokemons: action.payload.pokemons,
        pesquisa: { ...state.pesquisa, valores: action.payload.filtro_valores },
        limite: JSON.stringify(action.payload.filtro_valores) == JSON.stringify(state.pesquisa.valores) ? state.limite : 10,
        carregando: false,
      }

    }

    default:
      return state

  }

};


export default pokedexReducer
