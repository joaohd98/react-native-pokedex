import {PokedexModel} from "./PokedexModel";

export class PokedexInteractor {

  static pegarPokemons(fetch: PokedexModel.Response) {

    if(!fetch.retorno)
      return;

    let pokemons: PokedexModel.ViewModel[] = [];

    for(let pokemon of fetch.retorno) {

      let view: PokedexModel.ViewModel = {
        foto: pokemon.ThumbnailImage,
        numero: pokemon.number,
        nome: pokemon.name,
        altura: pokemon.height,
        peso: pokemon.weight,
        tipos: pokemon.type,
        fraquezas: pokemon.weakness,
        habilidades: pokemon.abilities,
        visivel: true
      };

      pokemons.push(view);

    }

    return pokemons;

  }

}
