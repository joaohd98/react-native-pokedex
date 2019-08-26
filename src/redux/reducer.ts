import {combineReducers} from "redux";
import {listaPokemonsReducer} from "../pages/lista-pokemons/view/redux/lista-pokemons-reducer";
import {filtroReducer} from "../pages/lista-pokemons/sub-views/filtro/redux/filtro-reducer";
import {detalhesReducer} from "../pages/lista-pokemons/sub-views/detalhes/redux/detalhes-reducer";

export interface StatesReducers {
  listaPokemonsReducer,
  filtroReducer,
  detalhesReducer
}

let States: StatesReducers = {
  listaPokemonsReducer,
  filtroReducer,
  detalhesReducer
};

export default combineReducers(States);
