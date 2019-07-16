import {PokedexService} from "../../../services/pokedex/PokedexService";
import {PokedexInteractor} from "../service/PokedexInteractor";

export enum PokedexConst {

  CARREGADO_POKEMONS,
  ERRO_CARREGAR_POKEMONS,

  ADICIONAR_LIMITE

}

export class PokedexAction {

  static carregarPokemons = () => {

    return dispatch => {

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

    return dispatch => {

      dispatch({type: PokedexConst.ADICIONAR_LIMITE})

    }

  }

}
