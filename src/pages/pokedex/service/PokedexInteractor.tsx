import {PokedexService} from "../../../services/pokedex/PokedexService";
import {PokedexModel} from "./PokedexModel";
import {Pokedex} from "../pokedex";
import ViewModel = PokedexModel.ViewModel;

export class PokedexInteractor {

  pegarPokemons(pokedex: Pokedex) {

    PokedexService.pegarTodosPokemons((fetch: PokedexModel.Response) => {

      if(!fetch.retorno)
        return;

      let pokemons: ViewModel[] = [];

      for(let pokemon of fetch.retorno){

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

      pokedex.renderPokecard(pokemons);


    }, (fetch: PokedexModel.Response) => {

      pokedex.erroPokecard(fetch.cod);

    })

  }

}
