import {PokedexService} from "../../../../services/pokedex/PokedexService";
import {ListaPokemonsInteractor} from "../services/lista-pokemons-interactor";
import {ListaPokemonsModel} from "../services/lista-pokemons-model";
import {Navigation} from "../../../../helpers/navigation";
import {FiltroConst} from "../../sub-views/filtro/redux/filtro-action";
import {FiltroInteractor} from "../../sub-views/filtro/services/filtro-interactor";
import {FiltroModel} from "../../sub-views/filtro/services/filtro-model";
import {DetalhesConst} from "../../sub-views/detalhes/redux/detalhes-action";

export enum ListaPokemonsConst {

  LISTA_POKEMON_CARREGADO = "LISTA_POKEMON_CARREGADO",
  LISTA_POKEMON_CARREGANDO = "LISTA_POKEMON_CARREGANDO",
  LISTA_POKEMON_ERRO_CARREGAR = "LISTA_POKEMON_ERRO_CARREGAR",
  LISTA_POKEMON_ADICIONAR_QUANTIDADE = "LISTA_POKEMON_ADICIONAR_QUANTIDADE",
  LISTA_POKEMON_PESQUISAR = "LISTA_POKEMON_PESQUISAR",
  LISTA_POKEMON_FILTRAR = "LISTA_POKEMON_FILTRAR"

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

      dispatch({
        type: ListaPokemonsConst.LISTA_POKEMON_PESQUISAR,
        payload: {
          pokemons: ListaPokemonsInteractor.filtrarPokemons(pokemons, pesquisa.valores),
          pesquisa: pesquisa,
        }
      })

    }

  };

  static irParaDetalhes = (pokemon: ListaPokemonsModel.ViewModel, outrosPokemons: ListaPokemonsModel.ViewModel[]) => {

    return dispatch => {

      dispatch({
        type: DetalhesConst.DETALHES_ENTRAR_PAGINA,
        payload: {
          pokemonSelecionado: pokemon,
          outrosPokemons: outrosPokemons
        }
      });

      Navigation.navigate('detalhes');

    }

  };


  static irParaFiltro = (pokemons: ListaPokemonsModel.ViewModel[], pesquisa: FiltroModel.FiltroValoresModel) => {

    return dispatch => {

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
