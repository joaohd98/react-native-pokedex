import {PokedexModel} from "../../pages/pokedex/service/PokedexModel";
import {ApiRetornos} from "../index";

export class PokedexService {

  static async pegarTodosPokemons(sucesso: Function, falha: Function) {

    try {

      let response = await fetch('https://www.pokemon.com/br/api/pokedex/kalos');

      let request: PokedexModel.Response = {
        cod: ApiRetornos.sucesso,
        retorno: await response.json()
      };

      sucesso(request);

    } catch (error) {

      let erro: ApiRetornos = (error.toString() === "TypeError: Network request failed") ? ApiRetornos.semInternet : ApiRetornos.erroInterno;

      let request: PokedexModel.Response = {
        cod: erro,
      };

      falha(request);

    }

  }

}
