export enum PokedexConst {

  CARREGARPOKEMONS,

}

export class PokedexAction {

  static carregarPokemons = () => ({
      type: PokedexConst.CARREGARPOKEMONS,
  });

}
