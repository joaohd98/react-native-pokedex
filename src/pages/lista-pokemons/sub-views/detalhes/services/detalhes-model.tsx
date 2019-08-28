import {ApiRetornos} from "../../../../../services";
import {PokemonGender} from "./detalhes-interactor";
import {ListaPokemonsModel} from "../../../view/services/lista-pokemons-model";

export namespace DetalhesModel {

  export interface Request {
    nome: string
  }

  export interface Response {
    cod: ApiRetornos
    retorno?: {
      pokemon: ResponsePokemon,
      species: ResponseSpecie,
      evolution: ResponseSpecie[],
      abilities: ResponseAbilities[],
    }
  }

  export interface ResponsePokemon {

    id: number;
    abilities: {
      ability: {
        name: string;
        url: string;
      };
      is_hidden: boolean;
      slot: number;
    }[];
    base_experience: number;
    forms: {
      name: string;
      url: string;
    }[];
    game_indices: {
      game_index: number;
      version: {
        name: string;
        url: string;
      };
    }[];
    height: number;
    held_items: any[];
    is_default: boolean;
    location_area_encounters: string;
    moves: {
      move: {
        name: string;
        url: string;
      };
      version_group_details: {
        level_learned_at: number;
        move_learn_method: {
          name: string;
          url: string;
        };
        version_group: {
          name: string;
          url: string;
        };
      }[]
    }[];
    name: string;
    order: number;
    species: {
      name: string;
      url: string;
    };
    sprites: {
      back_default: string;
      back_female?: any;
      back_shiny: string;
      back_shiny_female?: any;
      front_default: string;
      front_female?: any;
      front_shiny: string;
      front_shiny_female?: any;
    };
    stats: {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }[];
    types: {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }[]
    weight: number;

  }

  export interface ResponseEvolution {

    id: number;
    baby_trigger_item?: any;
    chain: {
      is_baby: boolean;
      species: {
        name: string;
        url: string;
      };
      evolves_to: ResponseEvolutionChain[];
    }

  }

  interface ResponseEvolutionChain {
    is_baby: boolean;
    species: {
      name: string;
      url: string;
    };
    evolves_to: ResponseEvolutionChain[]
  }

  export interface ResponseAbilities {

    "name": string;
    "effect_entries": {
      "effect": string,
      "language": {
        "name": string,
        "url": string
      },
      "short_effect": string
    }[],

  }

  export interface ResponseSpecie {

    id: number;
    name: string;
    gender_rate: number;
    "evolves_from_species": {
      "name": string,
      "url": string
    },
    "evolution_chain": {
      "url": string
    },
    flavor_text_entries: {
      "flavor_text": string,
      "language": {
        "name": string,
        "url": string
      },
      "version": {
        "name": string,
        "url": string
      }
    }[]

  }

  export interface ViewModel {

    foto: string, //
    nome: string, //
    numero: string, //
    numeroAdj: ListaPokemonsModel.ViewModel, //
    numeroAnt: ListaPokemonsModel.ViewModel, //
    atributos: {
      hp: number, //
      attack: number, //
      defense: number, //
      specialAttack: number, ///
      specialDefense: number, //
      speed: number //
    },
    descricao: string, //
    altura: number, //
    peso: number, //
    genero: PokemonGender, //
    categoria: string, //
    habilidades: {
      nome: string, //
      descricao: string //
    }[],
    tipos: string[], //
    fraquezas: string[], //
    evolucoes: ListaPokemonsModel.ViewModel[]

  }

}

