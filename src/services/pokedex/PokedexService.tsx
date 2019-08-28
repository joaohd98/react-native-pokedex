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

      let response = await fetch('https://pokeapi.co/api/v2/pokemon/' + dados.nome.toLowerCase());

      let pokemonDetalhes: DetalhesModel.ResponsePokemon = await response.json();
      let speciesDetalhes = await PokedexService.pegarEspeciePokemon(pokemonDetalhes);
      let abilitiesDetalhes = await PokedexService.pegarHabilidadesPokemon(pokemonDetalhes);
      let evolutionDetalhes = await PokedexService.pegarEvolucoesPokemon(speciesDetalhes);

      let request: DetalhesModel.Response = {
        cod: ApiRetornos.sucesso,
        retorno: {
          pokemon: pokemonDetalhes,
          species: speciesDetalhes,
          abilities: abilitiesDetalhes,
          evolution: evolutionDetalhes
        }
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

  private static async pegarEspeciePokemon(pokemon: DetalhesModel.ResponsePokemon) {

    let retorno: DetalhesModel.ResponseSpecie = await (await fetch('https://pokeapi.co/api/v2/pokemon-species/' + pokemon.id)).json();

    return retorno

  }

  private static async pegarHabilidadesPokemon(pokemon: DetalhesModel.ResponsePokemon) {

    let retornos: DetalhesModel.ResponseAbilities[] = [];

    for (let dados of pokemon.abilities) {

      let ability = dados.ability;

      let response = await fetch(ability.url);

      retornos.push(await response.json());

    }

    return retornos;

  }

  private static async pegarEvolucoesPokemon(pokemon: DetalhesModel.ResponseSpecie) {

    let retorno: DetalhesModel.ResponseEvolution = await (await fetch(pokemon.evolution_chain.url)).json();
    let chain = retorno.chain;

    let evolucoes: DetalhesModel.ResponseSpecie[] = [];

    while (chain) {

      evolucoes.push(await (await fetch(chain.species.url)).json());

      chain = chain.evolves_to[0];

    }

    return evolucoes;

  }

}
