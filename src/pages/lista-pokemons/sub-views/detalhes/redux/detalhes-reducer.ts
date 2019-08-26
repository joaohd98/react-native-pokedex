import {DetalhesConst} from "./detalhes-action";

export const DetalhesInitalState = {};


export const detalhesReducer = (state = DetalhesInitalState, action: { type: DetalhesConst, payload: any }) => {

  switch (action.type) {

    // case ListaPokemonsConst.APLICAR_FILTROS: {
    //
    //   return {
    //     ...state,
    //     pokemons: action.payload.pokemons,
    //     pesquisa: { ...state.pesquisa, valores: action.payload.filtro_valores },
    //     limite: JSON.stringify(action.payload.filtro_valores) == JSON.stringify(state.pesquisa.valores) ? state.limite : 10,
    //     carregando: false,
    //   }
    //
    // }
    //
    // case ListaPokemonsConst.REDEFINIR_FILTROS: {
    //
    //   return {
    //     ...state,
    //     pokemons: action.payload.pokemons,
    //     pesquisa: { ...state.pesquisa, valores: action.payload.filtro_valores },
    //     limite: JSON.stringify(action.payload.filtro_valores) == JSON.stringify(state.pesquisa.valores) ? state.limite : 10,
    //     carregando: false,
    //   }
    //
    // }

    default:
      return state

  }

};


