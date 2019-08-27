import {PokedexService} from "../../../../services/pokedex/PokedexService";
import {ListaPokemonsInteractor} from "../services/lista-pokemons-interactor";
import {ListaPokemonsModel} from "../services/lista-pokemons-model";
import {Navigation} from "../../../../helpers/navigation";
import {FiltroConst} from "../../sub-views/filtro/redux/filtro-action";
import {FiltroInteractor} from "../../sub-views/filtro/services/filtro-interactor";
import {FiltroModel} from "../../sub-views/filtro/services/filtro-model";

export enum ListaPokemonsConst {

  LISTA_POKEMON_CARREGADO,
  LISTA_POKEMON_CARREGANDO,
  LISTA_POKEMON_ERRO_CARREGAR,
  LISTA_POKEMON_ADICIONAR_QUANTIDADE,
  LISTA_POKEMON_PESQUISAR,

}

export class ListaPokemonsAction {

  static carregarPokemons = () => {

    return dispatch => {

      dispatch({type: ListaPokemonsConst.LISTA_POKEMON_CARREGANDO});

      PokedexService.pegarTodosPokemons(request => {

        dispatch({
          type: ListaPokemonsConst.LISTA_POKEMON_CARREGADO,
          payload: ListaPokemonsInteractor.pegarPokemons(request)
        })

      }, () => {

        dispatch({
          type: ListaPokemonsConst.LISTA_POKEMON_ERRO_CARREGAR,
        })

      });

    }

  };

  static adicionarQuantidade = () => {

    return dispatch => dispatch({type: ListaPokemonsConst.LISTA_POKEMON_ADICIONAR_QUANTIDADE})

  };

  static pesquisarPokemon = (pokemons: ListaPokemonsModel.ViewModel[], pesquisa: FiltroModel.FiltroValoresModel) => {

    return dispatch => {

      dispatch({type: ListaPokemonsConst.LISTA_POKEMON_CARREGANDO});

      dispatch({
        type: ListaPokemonsConst.LISTA_POKEMON_PESQUISAR,
        payload: {
          pokemons: ListaPokemonsInteractor.filtrarPokemons(pokemons, pesquisa),
          pesquisa: pesquisa,
        }
      })

    }

  };

  static irParaDetalhes = (pokemon: ListaPokemonsModel.ViewModel) => {

    return (dispatch, getState) => {

      Navigation.navigate('detalhes');

    }

  };


  static irParaFiltro = (pokemons: ListaPokemonsModel.ViewModel[], pesquisa: FiltroModel.FiltroValoresModel) => {

    return dispatch => {

      console.log(pesquisa);

      dispatch({
        type: FiltroConst.FILTRO_ENTRAR_PAGINA,
        payload: {
          pokemons: pokemons,
          filtro: FiltroInteractor.propsToForm(pesquisa)
        }
      });

      Navigation.navigate('filtro');

    }

  };


}
