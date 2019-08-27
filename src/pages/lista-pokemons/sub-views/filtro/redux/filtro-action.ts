import {ListaPokemonsConst} from "../../../view/redux/lista-pokemons-action";
import {FiltroInteractor} from "../services/filtro-interactor";
import {ListaPokemonsModel} from "../../../view/services/lista-pokemons-model";
import {FiltroModel} from "../services/filtro-model";
import {ListaPokemonsInteractor} from "../../../view/services/lista-pokemons-interactor";
import {Navigation} from "../../../../../helpers/navigation";

export enum FiltroConst {

  FILTRO_ENTRAR_PAGINA = "FILTRO_ENTRAR_PAGINA",
  FILTRO_REDEFINIR = "FILTRO_REDEFINIR",

}

export class FiltroAction {

  static aplicarFiltros = (pokemons: ListaPokemonsModel.ViewModel[], filtro: FiltroModel.FormModel) => {

    return dispatch => {

      let valores = FiltroInteractor.formToProps(filtro);

      dispatch({
        type: ListaPokemonsConst.LISTA_POKEMON_FILTRAR,
        payload: {
          pokemons: ListaPokemonsInteractor.filtrarPokemons(pokemons, valores),
          filtro_valores: valores
        }
      });

      Navigation.back();

    }

  };

  static redefinirFiltros = (filtro: FiltroModel.FormModel) => {

    return dispatch => {

      dispatch({
        type: FiltroConst.FILTRO_REDEFINIR,
        payload: {
          filtro: FiltroInteractor.formValoresIniciais(filtro)
        }
      })

    }

  };


}
