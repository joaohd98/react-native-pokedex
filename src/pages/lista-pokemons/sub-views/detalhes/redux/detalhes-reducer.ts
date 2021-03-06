import {DetalhesAction, DetalhesConst} from "./detalhes-action";
import {DetalhesProps} from "../services/detalhes-props";

export const DetalhesInitalState: DetalhesProps.Props = {
  outrosPokemons: [],
  carregando: true,
  erro: false,
  atualizar: false,
  funcoes: {
    carregarDetalhes: (pokemon, outrosPokemons) => DetalhesAction.carregarDetalhes(pokemon, outrosPokemons),
    irParaOutrosDetalhes: (pokemon, outrosPokemons) => DetalhesAction.irParaOutrosDetalhes(pokemon, outrosPokemons),
  }
};

export const detalhesReducer = (state = DetalhesInitalState, action: { type: DetalhesConst, payload: any }) => {

  switch (action.type) {

    case DetalhesConst.DETALHES_ENTRAR_PAGINA: {

      return {
        ...state,
        pokemonSelecionado: action.payload.pokemonSelecionado,
        outrosPokemons: action.payload.outrosPokemons,
        atualizar: !state.atualizar
      }

    }

    case DetalhesConst.DETALHES_CARREGANDO: {

      return {
        ...state,
        carregando: true,
        erro: false,
        atualizar: !state.atualizar
      }

    }


    case DetalhesConst.DETALHES_CARREGADO: {

      return {
        ...state,
        pokemonDetalhes: action.payload.pokemonDetalhes,
        carregando: false,
        erro: false,
        atualizar: !state.atualizar
      }

    }


    case DetalhesConst.DETALHES_MUDADO_POKEMON: {

      return {
        ...state,
        pokemonDetalhes: action.payload.pokemonDetalhes,
        pokemonSelecionado: action.payload.pokemonSelecionado,
        carregando: false,
        erro: false,
        atualizar: !state.atualizar
      }

    }


    case DetalhesConst.DETALHES_ERRO_CARREGAR: {

      return {
        ...state,
        carregando: false,
        erro: true,
        atualizar: !state.atualizar
      }

    }

    default:
      return state

  }

};


