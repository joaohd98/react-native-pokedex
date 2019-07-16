import {PokedexModel} from "./PokedexModel";

export class PokedexInteractor {

  static pegarCorFundoHabilidade(tipo: string): { borderTopColor: string, borderBottomColor: string, color: string } {

    let [preto, branco] = ['#212121', '#fff'];

    let cores = {
      grass: {borderTopColor: "#9bcc50", borderBottomColor: "#9bcc50", color: preto},
      poison: {borderTopColor: "#b97fc9", borderBottomColor: "#b97fc9", color: branco},
      fire: {borderTopColor: "#fd7d24", borderBottomColor: "#fd7d24", color: branco},
      flying: {borderTopColor: "#3dc7ef", borderBottomColor: "#bdb9b8", color: preto},
      water: {borderTopColor: "#4592c4", borderBottomColor: "#4592c4", color: branco},
      bug: {borderTopColor: "#729f3f", borderBottomColor: "#729f3f", color: branco},
      normal: {borderTopColor: "#a4acaf", borderBottomColor: "#a4acaf", color: preto},
      electric: {borderTopColor: "#eed535", borderBottomColor: "#eed535", color: preto},
      ground: {borderTopColor: "#f7de3f", borderBottomColor: "#ab9842", color: preto},
      fairy: {borderTopColor: "#fdb9e9", borderBottomColor: "#fdb9e9", color: preto},
      fighting: {borderTopColor: "#d56723", borderBottomColor: "#d56723", color: branco},
      psychic: {borderTopColor: "#f366b9", borderBottomColor: "#f366b9", color: branco},
      rock: {borderTopColor: "#a38c21", borderBottomColor: "#a38c21", color: branco},
      ice: {borderTopColor: "#51c4e7", borderBottomColor: "#51c4e7", color: preto},
      ghost: {borderTopColor: "#7b62a3", borderBottomColor: "#7b62a3", color: branco},
      dragon: {borderTopColor: "#53a4cf", borderBottomColor: "#f16e57", color: branco},
      dark: {borderTopColor: "#707070", borderBottomColor: "#707070", color: branco},
      steel: {borderTopColor: "#9eb7b8", borderBottomColor: "#9eb7b8", color: preto},
    };

    return cores[tipo];

  };

  static pegarPokemons(fetch: PokedexModel.Response) {

    if (!fetch.retorno)
      return;

    let pokemons: PokedexModel.ViewModel[] = [];
    let tamanho = fetch.retorno.length;

    for (let i = 0; i < tamanho; i++) {

      let pokemon = fetch.retorno[i];

      if (i > 0) {

        let pokemonAnterior = fetch.retorno[i - 1];

        if (pokemonAnterior.id == pokemon.id)
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
        visivel: true,
        filtrado: true,
      };

      pokemons.push(view);

    }

    return pokemons;

  }

  static scrollPokemons(pokemons: PokedexModel.ViewModel[], limite: number) {

    let pokemonScroll: PokedexModel.ViewModel[] = [];

    for (let i = 0; i < limite; i++)
      pokemonScroll.push(pokemons[i]);

    return pokemonScroll

  }


}
