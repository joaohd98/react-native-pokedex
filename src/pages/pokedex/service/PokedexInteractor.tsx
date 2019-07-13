import {PokedexModel} from "./PokedexModel";

export class PokedexInteractor {

  static pegarPokemons(fetch: PokedexModel.Response) {

    if(!fetch.retorno)
      return;

    let pokemons: PokedexModel.ViewModel[] = [];
    let tamanho = fetch.retorno.length;

    for(let i = 0; i < tamanho; i++) {

      let pokemon = fetch.retorno[i];

      if(i > 0) {

        let pokemonAnterior = fetch.retorno[i - 1];

        if(pokemonAnterior.id == pokemon.id)
          continue;

      }

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
