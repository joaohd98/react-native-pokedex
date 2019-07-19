import {PokedexConst} from "./pokedexAction";
import {PokedexProps} from "../service/PokedexProps";
import React from "react";
import {FlatList} from "react-native";
import {PokedexModel} from "../service/PokedexModel";

const INITIAL_STATE: PokedexProps.Props = {
  pokemons: [],
  pesquisa: {
    filtro: {
      nomes: [],
      habilidades: [],
      tipos: [],
      numeros: { minimo: -1, maximo: -1 }
    },
    valores: {
      nome: "",
      habilidadesEscolhida: [],
      tiposEscolhidos: [],
      fraquezasEscolhidas: [],
      alturas: [],
      pesos: [],
      numeros: { minimo: -1, maximo: -1 }
    }
  },
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
