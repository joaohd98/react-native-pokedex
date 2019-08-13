import {PokedexModel} from "./pokedex-model";
import {Helpers} from "../../../helpers/helpers";
import {PokedexProps} from "./pokedex-props";

export class PokedexInteractor {

  private static pegarFiltroPokemon(filtro, pokemon: PokedexModel.ViewModel) {

    filtro.nomes.push(pokemon.nome);

    for (let tipo of pokemon.tipos)
      filtro.tipos.push(tipo);

    for (let habilidade of pokemon.habilidades)
      filtro.habilidades.push(habilidade);

    let minimo = filtro.numeros.minimo;
    filtro.numeros.minimo = minimo === -1 || minimo > parseInt(pokemon.numero) ? parseInt(pokemon.numero) : minimo;

    let maximo = filtro.numeros.maximo;
    filtro.numeros.maximo = maximo === -1 || maximo < parseInt(pokemon.numero) ? parseInt(pokemon.numero) : maximo;

    filtro.tipos = Helpers.removerDuplicados(filtro.tipos);
    filtro.habilidades = Helpers.removerDuplicados(filtro.habilidades);

  }

  static pegarPokemons(fetch: PokedexModel.Response) {

    if (!fetch.retorno)
      return;

    let pokemons: PokedexModel.ViewModel[] = [];

    let filtro = PokedexInteractor.filtroValoresIniciais().filtro;

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

      PokedexInteractor.pegarFiltroPokemon(filtro, view);

    }

    filtro.habilidades = Helpers.ordenarArray(filtro.habilidades, ["Todas"]);

    return { pokemons: pokemons, filtro: filtro };

  }

  static filtrarPokemons(pokemons: PokedexModel.ViewModel[], filtro: PokedexProps.Filtro) {

    /*
     * Nome
     */

    for (let pokemon of pokemons) {

      if (!Helpers.compararStrings(Helpers.eNumero(filtro.valores.nome.charAt(0)) ? pokemon.numero : pokemon.nome, filtro.valores.nome))
        pokemon.visivel = false;

      else
        pokemon.visivel = true;
    }

    return pokemons;

  }

  static autoCompletePokemons(pokemonsNomes: string[], texto: string) {

    let autoComplete: string[] = [];

    if (texto.length == 0 || Helpers.eNumero(texto.charAt(0)))
      return [];

    for (let nome of pokemonsNomes) {

      if (Helpers.compararStrings(nome, texto))
        autoComplete.push(nome);

      if (autoComplete.length == 3)
        break;

    }

    return autoComplete;

  }

  static pegarCorFundoHabilidade(tipo: string): { borderTopColor: string, borderBottomColor: string, color: string } {

    let [preto, branco] = ['#212121', '#fff'];

    let cores = {
      grass: {borderTopColor: "#9bcc50", borderBottomColor: "#9bcc50", color: branco},
      poison: {borderTopColor: "#b97fc9", borderBottomColor: "#b97fc9", color: branco},
      fire: {borderTopColor: "#fd7d24", borderBottomColor: "#fd7d24", color: branco},
      flying: {borderTopColor: "#3dc7ef", borderBottomColor: "#bdb9b8", color: preto},
      water: {borderTopColor: "#4592c4", borderBottomColor: "#4592c4", color: branco},
      bug: {borderTopColor: "#729f3f", borderBottomColor: "#729f3f", color: branco},
      normal: {borderTopColor: "#a4acaf", borderBottomColor: "#a4acaf", color: branco},
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

  static scrollPokemons(pokemons: PokedexModel.ViewModel[], limite: number) {

    let pokemonScroll: PokedexModel.ViewModel[] = [];
    let tamanho = pokemons.length;

    for (let i = 0; i < limite && i < tamanho; i++)
      pokemonScroll.push(pokemons[i]);

    return pokemonScroll

  }

  static filtroValoresIniciais(): PokedexProps.Filtro {

    return {
      filtro: {
        nomes: [],
        habilidades: ["Todas"],
        tipos: [],
        numeros: { minimo: -1, maximo: -1 }
      },
      valores: {
        nome: "",
        habilidadeEscolhida: "Todas",
        tiposEscolhidos: [],
        fraquezasEscolhidas: [],
        alturas: { pequeno: false, medio: false, grande: false },
        pesos:  { leve: false, medio: false, pesado: false },
        numeros: { minimo: -1, maximo: -1 }
      }
    }

  }

  static propsToForm(props: PokedexProps.Filtro): PokedexProps.FiltroForm {

    /*
     * Tipos
     */

    let tiposForm: { nome: string, tipo: boolean, fraqueza: boolean }[] = [];

    for (let tipo of props.filtro.tipos) {

      tiposForm.push({
        nome: tipo,
        tipo: props.valores.tiposEscolhidos.find(tipoPokemon => tipoPokemon == tipo) == "string",
        fraqueza: props.valores.fraquezasEscolhidas.find(fraquezaPokemon => fraquezaPokemon == tipo) == "string",
      });

    }

    /*
     * Intervalo Numero
     */
    let intervaloNumerosForm = {
      limites: [ props.filtro.numeros.minimo, props.filtro.numeros.maximo],
      valores: [ props.valores.numeros.minimo, props.valores.numeros.maximo]
    };

    /*
     * Habilidades
     */


    let habilidadesForm =  {
      todas: props.filtro.habilidades,
      selecionada: props.valores.habilidadeEscolhida,
    };

    /*
     * Altura
     */

    let alturaForm = props.valores.alturas;

    /*
     * Peso
     */

    let pesoForm = props.valores.pesos;

    /*
     * Fim
     */

    let form: PokedexProps.FiltroForm = {
      tipos: tiposForm,
      intervaloNumeros: intervaloNumerosForm,
      habilidades: habilidadesForm,
      altura: alturaForm,
      peso: pesoForm
    };

    console.log(form);

    return form;

  }


}
