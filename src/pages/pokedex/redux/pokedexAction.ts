import {PokedexService} from "../../../services/pokedex/PokedexService";
import {PokedexInteractor} from "../service/PokedexInteractor";

export enum PokedexConst {

  CARREGADO_POKEMONS,
  ERRO_CARREGAR_POKEMONS,

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

  }

}
