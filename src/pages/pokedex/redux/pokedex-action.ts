import {PokedexService} from "../../../services/pokedex/PokedexService";
import {PokedexInteractor} from "../service/pokedex-interactor";
import {PokedexModel} from "../service/pokedex-model";
import {PokedexProps} from "../service/pokedex-props";

export enum PokedexConst {

  CARREGADO_POKEMONS,
  ERRO_CARREGAR_POKEMONS,

  ADICIONAR_LIMITE,
  CARREGANDO,

  FILTRAR_POKEMON,

}

export class PokedexAction {

  static carregarPokemons = () => {

    return dispatch => {

      dispatch({ type: PokedexConst.CARREGANDO });

      PokedexService.pegarTodosPokemons(request => {

        dispatch({
          type: PokedexConst.CARREGADO_POKEMONS,
          payload: PokedexInteractor.pegarPokemons(request)
        })

      }, () => {

        dispatch({
          type: PokedexConst.ERRO_CARREGAR_POKEMONS,
        })

      });

    }

  };

  static adicionarLimite = () => {

    return dispatch => dispatch({type: PokedexConst.ADICIONAR_LIMITE})

  };

  static filtrarPokemons = (pokemons: PokedexModel.ViewModel[], filtro: PokedexProps.Filtro) => {

    return dispatch => {

      dispatch({
        type: PokedexConst.ADICIONAR_LIMITE,
        payload: {
          pokemons: PokedexInteractor.filtrarPokemons(pokemons, filtro),
          pesquisa: filtro,
        }
      })

    }

  };



}
