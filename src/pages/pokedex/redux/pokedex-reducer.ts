import {PokedexConst} from "./pokedex-action";
import {PokedexProps} from "../service/pokedex-props";
import React from "react";
import {FlatList} from "react-native";
import {PokedexModel} from "../service/pokedex-model";
import {PokedexInteractor} from "../service/pokedex-interactor";

const INITIAL_STATE: PokedexProps.Props = {
  pokemons: [],
  pesquisa: PokedexInteractor.filtroValoresIniciais(),
  flatList: React.createRef<FlatList<PokedexModel.ViewModel>>(),
  limite: 10,
  carregando: true,
  erro: false,
  carregarPokemons: () => {},
  adicionarLimite: () => {},
  filtrarPokemons: (pokemons, filtro) => {}
};

const pokedexReducer = (state = INITIAL_STATE, action: {type: PokedexConst, payload: any}) => {

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
        pesquisa: action.payload.filtro,
        limite: 10,
      }
    }

    default:
      return state

  }

};


export default pokedexReducer
