import {FiltroAction, FiltroConst} from "./filtro-action";
import {FiltroProps} from "../services/filtro-props";
import {FiltroInteractor} from "../services/filtro-interactor";

export const FiltroInitalState: FiltroProps.Props = {
  pokemons: [],
  filtro: FiltroInteractor.formValoresIniciais(),
  funcoes: {
    aplicarFiltros: () => FiltroAction.aplicarFiltros(),
    redefinirFiltros: () => FiltroAction.redefinirFiltros()
  }
};

export const filtroReducer = (state = FiltroInitalState, action: { type: FiltroConst, payload: any }) => {

  switch (action.type) {

    case FiltroConst.FILTRO_ENTRAR_PAGINA: {

      return {
        ...state,
        pokemons: action.payload.pokemons,
        filtro: action.payload.filtro,
      }

    }


    default:
      return state

  }

};


