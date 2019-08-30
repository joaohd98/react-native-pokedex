import {ListaPokemonsModel} from "../../../view/services/lista-pokemons-model";
import {DetalhesModel} from "./detalhes-model";
import {Helpers} from "../../../../../helpers/helpers";

export enum PokemonGender {

  masculino,
  feminino,
  ambos,
  desconhecido

}

export class DetalhesInteractor {

  static formatarDetalhesPokemon(pokemon: ListaPokemonsModel.ViewModel, outrosPokemons: ListaPokemonsModel.ViewModel[], detalhes: DetalhesModel.Response): DetalhesModel.ViewModel {

    const pegarTextoFormatado = (str: string) => {

      let novaString = "";

      for (let i = 0; i < str.length; i++) {

        if (str[i] === "\n") {

          if (str[i - 1] !== ".") {
            novaString += "";
          } else {
            novaString += "\n";
          }

        } else if (str[i] === "," && str[i + 1] !== " ")
          novaString += ", ";

        else
          novaString += str[i];

      }


      return novaString;

    };

    const pegarAtributos = (numero: number) => numero / 20;

    const pegarGenero = (valor: number) => {

      switch (valor) {

        case 8:
          return PokemonGender.feminino;
        case 0:
          return PokemonGender.masculino;
        case -1:
          return PokemonGender.desconhecido;
        case 1:
          return PokemonGender.ambos;
        default:
          return PokemonGender.ambos;

      }

    };

    const pegarHabilidades = () => {

      let detalhesHabilidades = detalhes.retorno!.abilities;

      let habilidades: {
        nome: string, //
        descricao: string //
      }[] = [];

      detalhesHabilidades.forEach(habilidade => {

        habilidade.effect_entries.forEach(effect => {

          if (effect.language.name == "en")
            habilidades.push({
              nome: habilidade.name,
              descricao: pegarTextoFormatado(effect.effect).split(".")[0] + ".",
            })

        })

      });

      return habilidades;

    };

    const pegarEvolucoes = () => {

      let detalhesEvolucoes = detalhes.retorno!.evolution;

      let pokemons: ListaPokemonsModel.ViewModel[] = [];

      detalhesEvolucoes.forEach((evolucao) => {

        pokemons.push(
          outrosPokemons.find(outrosPokemon => Helpers.removerAcentosMinusculo(outrosPokemon.nome) == Helpers.removerAcentosMinusculo(evolucao.name))!
        )

      });

      return pokemons

    };

    const pegarNumeroAdjAnt = (tipo: "ant" | "adj") => {

      let tamanhoMaximo = outrosPokemons.length;

      if (tipo == "ant") {

        let numAnt = parseInt(pokemon.numero) - 2;

        if (numAnt < 1)
          return tamanhoMaximo - 1;

        return numAnt;

      } else {

        let numAdj = parseInt(pokemon.numero);

        if (numAdj >= tamanhoMaximo - 1)
          return 0;

        return numAdj;

      }


    };

    let detalhesPokemons = detalhes.retorno!.pokemon;
    let detalhesEspecie = detalhes.retorno!.species;

    return {
      foto: pokemon.fotoCheia, //
      nome: pokemon.nome, //
      numero: pokemon.numero, //
      numeroAdj: outrosPokemons[pegarNumeroAdjAnt('adj')], //
      numeroAnt: outrosPokemons[pegarNumeroAdjAnt('ant')], //
      atributos: {
        hp: pegarAtributos(detalhesPokemons.stats[0].base_stat), //
        attack: pegarAtributos(detalhesPokemons.stats[1].base_stat), //
        defense: pegarAtributos(detalhesPokemons.stats[2].base_stat), //
        specialAttack: pegarAtributos(detalhesPokemons.stats[3].base_stat), //
        specialDefense: pegarAtributos(detalhesPokemons.stats[4].base_stat), //
        speed: pegarAtributos(detalhesPokemons.stats[5].base_stat) //
      },
      descricao: pegarTextoFormatado(detalhesEspecie.flavor_text_entries.find(dados => dados.language.name == "en")!.flavor_text), //
      altura: pokemon.altura, //
      peso: pokemon.peso, //
      genero: pegarGenero(detalhesEspecie.gender_rate), //
      habilidades: pegarHabilidades(),
      tipos: pokemon.tipos, //
      fraquezas: pokemon.fraquezas, //
      evolucoes: pegarEvolucoes()
    }
  }

}
