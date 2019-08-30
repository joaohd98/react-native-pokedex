import {PokedexService} from "../../../../../services/pokedex/PokedexService";
import {ListaPokemonsModel} from "../../../view/services/lista-pokemons-model";
import {DetalhesInteractor} from "../services/detalhes-interactor";

export enum DetalhesConst {

  DETALHES_ENTRAR_PAGINA = "DETALHES_ENTRAR_PAGINA",

  DETALHES_CARREGANDO = "DETALHES_CARREGANDO",
  DETALHES_CARREGADO = "DETALHES_CARREGADO",
  DETALHES_MUDADO_POKEMON = "DETALHES_MUDADO_POKEMON",
  DETALHES_ERRO_CARREGAR = "DETALHES_ERRO_CARREGAR",

}

export class DetalhesAction {

  static carregarDetalhes = (pokemon: ListaPokemonsModel.ViewModel, outrosPokemons: ListaPokemonsModel.ViewModel[]) => {

    return dispatch => {

      dispatch({type: DetalhesConst.DETALHES_CARREGANDO});

      PokedexService.pegarDetalhesPokemons({nome: pokemon.nome}, request => {

        dispatch({
          type: DetalhesConst.DETALHES_CARREGADO,
          payload: {
            pokemonDetalhes: DetalhesInteractor.formatarDetalhesPokemon(pokemon, outrosPokemons, request)
          }
        })

      }, () => {

        dispatch({type: DetalhesConst.DETALHES_ERRO_CARREGAR,})

      });

    }

  };

  static irParaOutrosDetalhes = (pokemon: ListaPokemonsModel.ViewModel, outrosPokemons: ListaPokemonsModel.ViewModel[]) => {

    return dispatch => {

      dispatch({type: DetalhesConst.DETALHES_CARREGANDO});

      PokedexService.pegarDetalhesPokemons({nome: pokemon.nome}, request => {

        dispatch({
          type: DetalhesConst.DETALHES_MUDADO_POKEMON,
          payload: {
            pokemonSelecionado: pokemon,
            pokemonDetalhes: DetalhesInteractor.formatarDetalhesPokemon(pokemon, outrosPokemons, request)
          }
        })

      }, () => {

        dispatch({type: DetalhesConst.DETALHES_ERRO_CARREGAR,})

      });

    }

  };

}
