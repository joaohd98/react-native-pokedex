import {ApiRetornos} from "../../../services";

export namespace PokedexModel {

  export interface Request {}

  export interface Response {
    cod: ApiRetornos
    retorno?: [{
      abilities: string[];
      detailPageURL: string;
      weight: number;
      weakness: string[];
      number: string;
      height: number;
      collectibles_slug: string;
      featured: string;
      slug: string;
      name: string;
      ThumbnailAltText: string;
      ThumbnailImage: string;
      id: number;
      type: string[];
    }]
  }

  export interface ViewModel {
    foto: string,
    numero: string,
    nome: string,
    peso: number,
    altura: number,
    tipos: string[],
    fraquezas: string[],
    habilidades: string[],
    visivel: boolean,
    filtrado: boolean
  }

  export namespace Detalhes {

    export interface Request {
      nome: string
    }

    export interface Response {
      cod: ApiRetornos
      retorno?: [{
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
      }]
    }

    export interface ViewModel {
      foto: string, //
      nome: string, //
      numero: string, //
      numeroAdj: number, //
      numeroAnt: number, //
      atributos: {
        hp: number,
        attack: number,
        defense: number,
        specialAttack: number,
        specialDefense: number,
        speed: number
      },
      descricao: string,
      altura: number, //
      peso: number, //
      genero: string,
      categoria: string,
      habilidades: [{
        nome: string, //
        descricao: string
      }],
      tipos: string[], //
      fraquezas: string[], //
      evolucoes?: [{
        foto: string, //
        nome: string, //
        numero: string, //
        tipos: string[], //
      }]
    }

  }

}



