import {FiltroProps} from "./filtro-props";
import {FiltroModel} from "./filtro-model";

export class FiltroInteractor {

  static filtroValoresIniciais(): FiltroProps.Props {

    return {
      pokemons: [],
      filtro: {
        nomes: [],
        habilidades: ["Todas"],
        tipos: [],
        numeros: {minimo: -1, maximo: -1}
      },
      valores: {
        nome: "",
        habilidadeEscolhida: "Todas",
        tiposEscolhidos: [],
        fraquezasEscolhidas: [],
        alturas: {pequeno: false, medio: false, grande: false},
        pesos: {leve: false, medio: false, pesado: false},
        numeros: {minimo: -1, maximo: -1}
      },
      aplicarFiltros: (filtro) => {
      },
      redefinirFiltros: () => {
      }
    }

  }

  static redifinirValoresFiltro(pesquisa: FiltroProps.Props): FiltroModel.Form {

    return {
      nome: pesquisa.valores.nome,
      habilidadeEscolhida: "Todas",
      tiposEscolhidos: [],
      fraquezasEscolhidas: [],
      alturas: {pequeno: false, medio: false, grande: false},
      pesos: {leve: false, medio: false, pesado: false},
      numeros: {minimo: pesquisa.filtro.numeros.minimo, maximo: pesquisa.filtro.numeros.maximo}
    }

  }

  static propsToForm(props: FiltroProps.Props): FiltroProps.States {

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
      limites: [props.filtro.numeros.minimo, props.filtro.numeros.maximo],
      valores: [props.valores.numeros.minimo, props.valores.numeros.maximo]
    };

    /*
     * Habilidades
     */


    let habilidadesForm = {
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

  static formToProps(pesquisa: FiltroProps.Props, props: FiltroProps.States): FiltroModel.Form {

    let fraquezas: string[] = [];
    let tipos: string[] = [];


    for (let item of props.tipos) {

      if (item.tipo)
        tipos.push(item.nome);

      if (item.fraqueza)
        fraquezas.push(item.nome);

    }

    return {
      nome: pesquisa.valores.nome,
      habilidadeEscolhida: props.habilidades.selecionada,
      tiposEscolhidos: tipos,
      fraquezasEscolhidas: fraquezas,
      alturas: props.altura,
      pesos: props.peso,
      numeros: {minimo: props.intervaloNumeros.valores[0], maximo: props.intervaloNumeros.valores[1]}
    }

  }


}
