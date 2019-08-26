import {ApiRetornos} from "../index";
import {ListaPokemonsModel} from "../../pages/lista-pokemons/view/services/lista-pokemons-model";
import {DetalhesModel} from "../../pages/lista-pokemons/sub-views/detalhes/services/detalhes-model";

export class PokedexService {

  static async pegarTodosPokemons(sucesso: (request: ListaPokemonsModel.Response) => void, falha: (request: ListaPokemonsModel.Response) => void) {

    try {

      let response = await fetch('https://www.pokemon.com/br/api/pokedex/kalos');

      let request: ListaPokemonsModel.Response = {
        cod: ApiRetornos.sucesso,
        retorno: await response.json()
      };

      sucesso(request);

    } catch (error) {

      console.log(error);

      let erro: ApiRetornos = (error.toString() === "TypeError: Network request failed") ? ApiRetornos.semInternet : ApiRetornos.erroInterno;

      let request: ListaPokemonsModel.Response = {
        cod: erro,
      };

      falha(request);

    }

  }

  static async pegarDetalhesPokemons(dados: DetalhesModel.Request, sucesso: (request: DetalhesModel.Response) => void, falha: (request: DetalhesModel.Response) => void) {

    try {

      let response = await fetch('https://pokeapi.co/api/v2/pokemon/' + dados.nome);

      let request: DetalhesModel.Response = {
        cod: ApiRetornos.sucesso,
        retorno: await response.json()
      };

      sucesso(request);

    } catch (error) {

      console.log(error);

      let erro: ApiRetornos = (error.toString() === "TypeError: Network request failed") ? ApiRetornos.semInternet : ApiRetornos.erroInterno;

      let request: DetalhesModel.Response = {
        cod: erro,
      };

      falha(request);

    }

  }

}
