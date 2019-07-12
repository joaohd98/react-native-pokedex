import {PokedexModel} from "../service/PokedexModel";
import {PokedexConst} from "./pokedexAction";

export interface PokedexProps {
  pokemons: PokedexModel.ViewModel[]
  carregando: boolean,
  erro: boolean
}

const INITIAL_STATE: PokedexProps = {
  pokemons: [],
  carregando: true,
  erro: false
};

const pokedexReducer = (state = INITIAL_STATE, action: {type: PokedexConst, payload: any}) => {

  switch (action.type) {

    // case PokedexConst.CARREGARPOKEMONS:
    //
    //   console.log("aqui dentro");
    //
    //   break;
    default:
      return state
  }

};


export default pokedexReducer
