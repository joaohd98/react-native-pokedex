import {Helpers} from "../../../../helpers/helpers";
import {FiltroInteractor} from "../../sub-views/filtro/services/filtro-interactor";
import {ListaPokemonsModel} from "./lista-pokemons-model";
import {FiltroModel} from "../../sub-views/filtro/services/filtro-model";

export class ListaPokemonsInteractor {

  static pokemonsExcluidos = [
    'Meltan',
    'Melmetal'
  ];
  static pegarPokemons(fetch: ListaPokemonsModel.Response) {

    if (!fetch.retorno)
      return;

    let pokemons: ListaPokemonsModel.ViewModel[] = [];

    let filtro = FiltroInteractor.filtroValoresIniciais().filtro;

    let tamanho = fetch.retorno.length;

    for (let i = 0; i < tamanho; i++) {

      let pokemon = fetch.retorno[i];

      if (ListaPokemonsInteractor.pokemonsExcluidos.find(pokemonExcluido => Helpers.compararStrings(pokemonExcluido, pokemon.name)) != undefined)
        continue;

      if (i < tamanho - 1) {

        let pokemonAnterior = fetch.retorno[i + 1];

        if (pokemonAnterior.id == pokemon.id)
          continue;

      }

      let view: ListaPokemonsModel.ViewModel = {
        foto: pokemon.ThumbnailImage,
        fotoCheia: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + pokemon.number + ".png",
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

      ListaPokemonsInteractor.pegarFiltroPokemon(filtro, view);

    }

    filtro.habilidades = Helpers.ordenarArray(filtro.habilidades, ["Todas"]);
    filtro.tipos = Helpers.ordenarArray(filtro.tipos);

    return {pokemons: pokemons, filtro: filtro};

  }

  static filtrarPokemons(pokemons: ListaPokemonsModel.ViewModel[], filtro: FiltroModel.ValoresModel) {

    for (let pokemon of pokemons) {

      /*
       * Nome
       */

      let nome = filtro.nome == "" || Helpers.compararStrings(Helpers.eNumero(filtro.nome.charAt(0)) ? pokemon.numero : pokemon.nome, filtro.nome);

      /*
       * Tipos
       */

      let tamanhoTipos = filtro.tiposEscolhidos.length;

      let tipo = pokemon.tipos.filter(tipo => filtro.tiposEscolhidos.indexOf(tipo) > -1).length == tamanhoTipos || tamanhoTipos == 0;

      /*
       * Fraquezas
       */

      let tamanhoFraquezas = filtro.fraquezasEscolhidas.length;

      let fraqueza = pokemon.fraquezas.filter(fraqueza => filtro.fraquezasEscolhidas.indexOf(fraqueza.toLowerCase()) > -1).length == tamanhoFraquezas || tamanhoFraquezas == 0;

      /*
       * Intervalo numeros
       */

      let numeros = parseInt(pokemon.numero) >= filtro.numeros.minimo && parseInt(pokemon.numero) <= filtro.numeros.maximo;

      /*
       * Habilidade
       */

      let habilidades = (pokemon.habilidades.indexOf(filtro.habilidadeEscolhida) > -1 || filtro.habilidadeEscolhida == "Todas");

      /*
       * Altura
       */

      let alturaPequena = (altura) => (altura >= 0 && altura <= 1.2);
      let alturaMedia = (altura) => (altura > 1.2 && altura <= 2.1);
      let alturaGrande = (altura) => (altura > 2.1);

      let altura: boolean;

      if (!filtro.alturas.pequeno && !filtro.alturas.medio && !filtro.alturas.grande)
        altura = true;

      else {

        if (filtro.alturas.pequeno && alturaPequena(pokemon.altura))
          altura = true;

        else if (filtro.alturas.medio && alturaMedia(pokemon.altura))
          altura = true;

        else if (filtro.alturas.grande && alturaGrande(pokemon.altura))
          altura = true;

        else
          altura = false;

      }

      /*
       * Peso
       */

      let pesoLeve = (peso) => (peso >= 0 && peso <= 45);
      let pesoMedio = (peso) => (peso > 45 && peso <= 226);
      let pesoPesado = (peso) => (peso > 226.3);

      let peso = false;

      if (!filtro.pesos.leve && !filtro.pesos.medio && !filtro.pesos.pesado)
        peso = true;

      else {

        if (filtro.pesos.leve && pesoLeve(pokemon.peso))
          peso = true;

        else if (filtro.pesos.medio && pesoMedio(pokemon.peso))
          peso = true;

        else if (filtro.pesos.pesado && pesoPesado(pokemon.peso))
          peso = true;

        else
          peso = false

      }

      //Visivel
      pokemon.visivel = (nome && tipo && fraqueza && numeros && habilidades && peso && altura);

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

  static pegarCorFundoHabilidade(tipo: string): { backgroundColor: string, borderTopColor: string, borderBottomColor: string, color: string } {

    let [preto, branco] = ['#212121', '#fff'];

    let cores = {
      grass: {backgroundColor: "#9bcc50", borderTopColor: "#9bcc50", borderBottomColor: "#9bcc50", color: branco},
      poison: {backgroundColor: "#b97fc9", borderTopColor: "#b97fc9", borderBottomColor: "#b97fc9", color: branco},
      fire: {backgroundColor: "#fd7d24", borderTopColor: "#fd7d24", borderBottomColor: "#fd7d24", color: branco},
      flying: {backgroundColor: "#3dc7ef", borderTopColor: "#3dc7ef", borderBottomColor: "#bdb9b8", color: preto},
      water: {backgroundColor: "#4592c4", borderTopColor: "#4592c4", borderBottomColor: "#4592c4", color: branco},
      bug: {backgroundColor: "#729f3f", borderTopColor: "#729f3f", borderBottomColor: "#729f3f", color: branco},
      normal: {backgroundColor: "#a4acaf", borderTopColor: "#a4acaf", borderBottomColor: "#a4acaf", color: branco},
      electric: {backgroundColor: "#eed535", borderTopColor: "#eed535", borderBottomColor: "#eed535", color: preto},
      ground: {backgroundColor: "#f7de3f", borderTopColor: "#f7de3f", borderBottomColor: "#ab9842", color: preto},
      fairy: {backgroundColor: "#fdb9e9", borderTopColor: "#fdb9e9", borderBottomColor: "#fdb9e9", color: preto},
      fighting: {backgroundColor: "#f366b9", borderTopColor: "#f366b9", borderBottomColor: "#d56723", color: branco},
      psychic: {backgroundColor: "#f366b9", borderTopColor: "#f366b9", borderBottomColor: "#f366b9", color: branco},
      rock: {backgroundColor: "#a38c21", borderTopColor: "#a38c21", borderBottomColor: "#a38c21", color: branco},
      ice: {backgroundColor: "#51c4e7", borderTopColor: "#51c4e7", borderBottomColor: "#51c4e7", color: preto},
      ghost: {backgroundColor: "#7b62a3", borderTopColor: "#7b62a3", borderBottomColor: "#7b62a3", color: branco},
      dragon: {backgroundColor: "#53a4cf", borderTopColor: "#53a4cf", borderBottomColor: "#f16e57", color: branco},
      dark: {backgroundColor: "#707070", borderTopColor: "#707070", borderBottomColor: "#707070", color: branco},
      steel: {backgroundColor: "#9eb7b8", borderTopColor: "#9eb7b8", borderBottomColor: "#9eb7b8", color: preto},
    };

    return cores[tipo];

  };

  static scrollPokemons(pokemons: ListaPokemonsModel.ViewModel[], limite: number) {

    let pokemonScroll: ListaPokemonsModel.ViewModel[] = [];
    let tamanho = pokemons.length;

    for (let i = 0; i < limite && i < tamanho; i++)
      pokemonScroll.push(pokemons[i]);

    return pokemonScroll

  }

  private static pegarFiltroPokemon(filtro, pokemon: ListaPokemonsModel.ViewModel) {

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

}
