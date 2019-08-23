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

  REDEFINIR_FILTROS,
  APLICAR_FILTROS

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

  static irParaDetalhes = (pokemon: PokedexModel.ViewModel) => {

    return dispatch => {

      dispatch({type: ""});

    }

  };

  static filtrarPokemons = (pokemons: PokedexModel.ViewModel[], filtro: PokedexProps.Filtro) => {

    return dispatch => {

      dispatch({ type: PokedexConst.CARREGANDO });

      dispatch({
        type: PokedexConst.FILTRAR_POKEMON,
        payload: {
          pokemons: PokedexInteractor.filtrarPokemons(pokemons, filtro),
          pesquisa: filtro,
        }
      })

    }

  };

  static aplicarFiltros = (pesquisa: PokedexProps.Filtro, filtro: PokedexProps.FiltroForm) => {

    return dispatch => {

      dispatch({ type: PokedexConst.CARREGANDO });

      let filtoValores = PokedexInteractor.formToProps(pesquisa, filtro);

      dispatch({
        type: PokedexConst.APLICAR_FILTROS,
        payload: {
          pokemons: PokedexInteractor.filtrarPokemons(pesquisa.pokemons, {...pesquisa, valores: filtoValores}),
          filtro_valores: filtoValores,
        }
      })

    }

  };

  static redefinirFiltros = (pesquisa: PokedexProps.Filtro) => {

    return dispatch => {

      let filtoValores = PokedexInteractor.redifinirValoresFiltro(pesquisa);

      dispatch({
        type: PokedexConst.REDEFINIR_FILTROS,
        payload: {
          pokemons: PokedexInteractor.filtrarPokemons(pesquisa.pokemons, {...pesquisa, valores: filtoValores}),
          filtro_valores: filtoValores,
        }
      })

    }

  };

}
