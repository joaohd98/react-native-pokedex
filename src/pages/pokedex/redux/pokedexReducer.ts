import {PokedexModel} from "../service/PokedexModel";
import {PokedexConst} from "./pokedexAction";
import {act} from "react-test-renderer";

interface PokedexPropsPesquisa {

  filtro: {
    nomes: string[],
    habilidades: string[],
    tipos: string[],
    numeros: { minimo: number, maximo: number }
  },
  valores: {
    nome: string,
    habilidadesEscolhida: string[],
    tiposEscolhidos: string[],
    fraquezasEscolhidas: string[],
    alturas: string[],
    pesos: string[],
    numeros: { minimo: number, maximo: number }
  }

}

export interface PokedexProps {

  pokemons: PokedexModel.ViewModel[]
  limite: number,
  pesquisa: PokedexPropsPesquisa
  carregando: boolean,
  erro: boolean,
  carregarPokemons: () => void,
  adicionarLimite: () => void,

}

const INITIAL_STATE: PokedexProps = {
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
  limite: 10,
  carregando: true,
  erro: false,
  carregarPokemons: () => {},
  adicionarLimite: () => {},
};

const pokedexReducer = (state = INITIAL_STATE, action: {type: PokedexConst, payload: any}) => {

  console.log(action.payload);

  switch (action.type) {

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

    default:
      return state

  }

};


export default pokedexReducer
