import {ListaPokemonsModel} from "../../../view/services/lista-pokemons-model";
import {FiltroProps} from "../services/filtro-props";
import {FiltroInteractor} from "../services/filtro-interactor";
import {ListaPokemonsInteractor} from "../../../view/services/lista-pokemons-interactor";

export enum FiltroConst {

  CARREGADO_POKEMONS,
  ERRO_CARREGAR_POKEMONS,

  ADICIONAR_LIMITE,
  CARREGANDO,

  FILTRAR_POKEMON,
  APLICAR_FILTROS

}

export class FiltroActionAction {

  static filtrarPokemons = (pokemons: ListaPokemonsModel.ViewModel[], filtro: FiltroProps.Props) => {

    return dispatch => {

      dispatch({type: FiltroConst.CARREGANDO});

      dispatch({
        type: FiltroConst.FILTRAR_POKEMON,
        payload: {
          pokemons: ListaPokemonsInteractor.filtrarPokemons(pokemons, filtro),
          pesquisa: filtro,
        }
      })

    }

  };

  static aplicarFiltros = (pesquisa: FiltroProps.Props, filtro: FiltroProps.States) => {

    return dispatch => {

      dispatch({type: FiltroConst.CARREGANDO});

      let filtoValores = FiltroInteractor.formToProps(pesquisa, filtro);

      dispatch({
        type: FiltroConst.APLICAR_FILTROS,
        payload: {
          pokemons: ListaPokemonsInteractor.filtrarPokemons(pesquisa.pokemons, {...pesquisa, valores: filtoValores}),
          filtro_valores: filtoValores,
        }
      })

    }

  };


}
