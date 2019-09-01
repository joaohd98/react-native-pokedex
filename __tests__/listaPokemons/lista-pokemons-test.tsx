import React from 'react';
import {ListaPokemonsInitalState} from "../../src/pages/lista-pokemons/view/redux/lista-pokemons-reducer";
import {ListaPokemons} from "../../src/pages/lista-pokemons/view/page/lista-pokemons";
import {generateStore, renderShallow} from "../../src/jest/setup";

describe('Testing ListaPokemons', () => {

  it('Render InitialState', () => {

    let values = ListaPokemonsInitalState;

    values.carregando = false;

    const wrapper = renderShallow(<ListaPokemons/>, generateStore(values));

    expect(wrapper.dive()).toMatchSnapshot();

  });

});
