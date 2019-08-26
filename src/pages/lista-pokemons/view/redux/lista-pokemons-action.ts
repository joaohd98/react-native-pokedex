import {PokedexService} from "../../../../services/pokedex/PokedexService";
import {ListaPokemonsInteractor} from "../services/lista-pokemons-interactor";
import {ListaPokemonsModel} from "../services/lista-pokemons-model";
import {FiltroProps} from "../../sub-views/filtro/services/filtro-props";

export enum ListaPokemonsConst {

  LISTA_POKEMON_CARREGADO,
  LISTA_POKEMON_CARREGANDO,
  LISTA_POKEMON_ERRO_CARREGAR,
  LISTA_POKEMON_ADICIONAR_QUANTIDADE,
  LISTA_POKEMON_PESQUISAR,

  LISTA_POKEMON_IR_PARA_DETALHES,
  LISTA_POKEMON_IR_PARA_FILTRO,

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

  static pesquisarPokemon = (pokemons: ListaPokemonsModel.ViewModel[], pesquisa: FiltroProps.Props) => {

    return dispatch => {

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

    return (dispatch, navigation) => {

      dispatch({type: ""});

      navigation.navigate('detalhes');

    }

  };


  static irParaFiltro = (pokemon: ListaPokemonsModel.ViewModel) => {

    return (dispatch, navigation) => {

      dispatch({type: ""});

      navigation.navigate('detalhes');

    }

  };


}
