import {PokedexModel} from "../service/PokedexModel";
import {PokedexConst} from "./pokedexAction";

export interface PokedexProps {
  pokemons: PokedexModel.ViewModel[],
  limite: number
  carregando: boolean,
  erro: boolean
}

const INITIAL_STATE: PokedexProps = {
  pokemons: [],
  limite: 10,
  carregando: true,
  erro: false
};

const pokedexReducer = (state = INITIAL_STATE, action: {type: PokedexConst, payload: any}) => {

  switch (action.type) {

    case PokedexConst.CARREGADO_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
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
