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

      if (i < tamanho - 1) {

        let pokemonAnterior = fetch.retorno[i + 1];

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
    filtro.tipos = Helpers.ordenarArray(filtro.tipos);

    return { pokemons: pokemons, filtro: filtro };

  }

  static filtrarPokemons(pokemons: PokedexModel.ViewModel[], filtro: PokedexProps.Filtro) {

    for (let pokemon of pokemons) {

      /*
       * Nome
       */

      let nome = filtro.valores.nome == "" || Helpers.compararStrings(Helpers.eNumero(filtro.valores.nome.charAt(0)) ? pokemon.numero : pokemon.nome, filtro.valores.nome);

      /*
       * Tipos
       */

      let tamanhoTipos = filtro.valores.tiposEscolhidos.length;

      let tipo = pokemon.tipos.filter(tipo => filtro.valores.tiposEscolhidos.indexOf(tipo) > -1).length ==  tamanhoTipos || tamanhoTipos == 0;

      /*
       * Fraquezas
       */

      let tamanhoFraquezas = filtro.valores.fraquezasEscolhidas.length;

      let fraqueza = pokemon.fraquezas.filter(fraqueza => filtro.valores.fraquezasEscolhidas.indexOf(fraqueza.toLowerCase()) > -1).length == tamanhoFraquezas || tamanhoFraquezas == 0;

      /*
       * Intervalo numeros
       */

      let numeros = parseInt(pokemon.numero) >= filtro.valores.numeros.minimo && parseInt(pokemon.numero) <= filtro.valores.numeros.maximo;

      /*
       * Habilidade
       */

      let habilidades = (pokemon.habilidades.indexOf(filtro.valores.habilidadeEscolhida) > -1 || filtro.valores.habilidadeEscolhida == "Todas");

      /*
       * Altura
       */

      let alturaPequena = (altura) => (altura >= 0 && altura <= 1.2);
      let alturaMedia = (altura) => (altura > 1.2 && altura <= 2.1);
      let alturaGrande = (altura) => (altura > 2.1);

      let altura: boolean;

      if(!filtro.valores.alturas.pequeno && !filtro.valores.alturas.medio && !filtro.valores.alturas.grande)
        altura = true;

      else {

        if(filtro.valores.alturas.pequeno && alturaPequena(pokemon.altura))
          altura = true;

        else if(filtro.valores.alturas.medio && alturaMedia(pokemon.altura))
          altura = true;

        else if(filtro.valores.alturas.grande && alturaGrande(pokemon.altura))
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

      if(!filtro.valores.pesos.leve && !filtro.valores.pesos.medio && !filtro.valores.pesos.pesado)
        peso = true;

      else {

        if(filtro.valores.pesos.leve && pesoLeve(pokemon.peso))
          peso = true;

        else if(filtro.valores.pesos.medio && pesoMedio(pokemon.peso))
          peso = true;

        else if(filtro.valores.pesos.pesado && pesoPesado(pokemon.peso))
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

  static scrollPokemons(pokemons: PokedexModel.ViewModel[], limite: number) {

    let pokemonScroll: PokedexModel.ViewModel[] = [];
    let tamanho = pokemons.length;

    for (let i = 0; i < limite && i < tamanho; i++)
      pokemonScroll.push(pokemons[i]);

    return pokemonScroll

  }

  static filtroValoresIniciais(): PokedexProps.Filtro {

    return {
      pokemons: [],
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
      },
      aplicarFiltros: (filtro) => {},
      redefinirFiltros: () => {}
    }

  }

  static redifinirValoresFiltro(pesquisa: PokedexProps.Filtro): PokedexProps.FiltroPropsValues {

    return {
      nome: pesquisa.valores.nome,
      habilidadeEscolhida: "Todas",
      tiposEscolhidos: [],
      fraquezasEscolhidas: [],
      alturas: { pequeno: false, medio: false, grande: false },
      pesos:  { leve: false, medio: false, pesado: false },
      numeros: { minimo: pesquisa.filtro.numeros.minimo, maximo: pesquisa.filtro.numeros.maximo}
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
        tipo: props.valores.tiposEscolhidos.find(tipoPokemon => tipoPokemon == tipo) != undefined,
        fraqueza: props.valores.fraquezasEscolhidas.find(fraquezaPokemon => fraquezaPokemon == tipo) != undefined,
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

    let alturaForm = {
      ...props.valores.alturas
    };

    /*
     * Peso
     */

    let pesoForm = {
      ...props.valores.pesos
    };

    /*
     * Fim
     */

    return {
      tipos: tiposForm,
      intervaloNumeros: intervaloNumerosForm,
      habilidades: habilidadesForm,
      altura: alturaForm,
      peso: pesoForm,
    };

  }

  static formToProps(pesquisa: PokedexProps.Filtro, props: PokedexProps.FiltroForm): PokedexProps.FiltroPropsValues {

    let fraquezas: string[] = [];
    let tipos: string[] = [];


    for(let item of props.tipos) {

      if(item.tipo)
        tipos.push(item.nome);

      if(item.fraqueza)
        fraquezas.push(item.nome);

    }

    return {
      nome: pesquisa.valores.nome,
      habilidadeEscolhida: props.habilidades.selecionada,
      tiposEscolhidos: tipos,
      fraquezasEscolhidas: fraquezas,
      alturas: props.altura,
      pesos: props.peso,
      numeros: { minimo: props.intervaloNumeros.valores[0], maximo: props.intervaloNumeros.valores[1] }
    }

  }

  static formatarDetalhesPokemon(pokemon: PokedexModel.Detalhes.Response) {

  }

}
