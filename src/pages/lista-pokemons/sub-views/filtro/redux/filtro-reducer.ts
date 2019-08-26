import {FiltroConst} from "./filtro-action";

export const ListaPokemonsInitalState = {};


export const filtroReducer = (state = ListaPokemonsInitalState, action: { type: FiltroConst, payload: any }) => {

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


