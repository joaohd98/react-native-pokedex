import {ApiRetornos} from "../../../../services";

export namespace ListaPokemonsModel {

  export interface Request {
  }

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

}



