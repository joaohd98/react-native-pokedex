import {ImageSourcePropType, Text, View, Image, Animated} from "react-native";
import React from "react";
import {Icones} from "../../../../helpers/icones/icones";
import {PokedexCSS} from "../../pokedex-css";

export class PokedexCard{

  private static pegarTipos = (pokemon) => {

    let css = PokedexCSS.PokedexCard;
    let elementos: Element[] = [];

    for(let tipo of pokemon.tipos)
      elementos.push(<Text key={tipo} style={css.habilidade}>{tipo}</Text>);

    return elementos

  };

  static gerarCard = (iterator) => {

    let css = PokedexCSS.PokedexCard;
    let pokemon = iterator.item;

    let imagem: ImageSourcePropType = {
      uri: pokemon.foto,
      width: 200,
      height: 200,
    };

    return (
      <View style={css.card}>
        <View style={css.imagem}>
          <Image source={imagem} />
        </View>
        <View style={css.cardContent}>
          <View>
            <Text style={css.numero}>N˚ {pokemon.numero}</Text>
          </View>
          <View style={css.nomeContent}>
            <Text style={css.nome}>{pokemon.nome}</Text>
          </View>
          <View style={css.habilidadesContent}>
            { PokedexCard.pegarTipos(pokemon) }
          </View>
        </View>
      </View>
    );

  };
  
  static gerarCardSkeleton = (index: number) => {

    let css = PokedexCSS.PokedexCard;
    let cssSkeleton = PokedexCSS.PokedexCardSkeleton;

    return (
      <View key={index} style={css.card}>
        <View style={css.imagem}>
          <Animated.View style={cssSkeleton.imagem} />
        </View>
        <View style={css.cardContent}>
          <View>
            <Animated.Text style={cssSkeleton.numero}/>
          </View>
          <View style={css.nomeContent}>
            <Animated.Text style={cssSkeleton.nome}/>
          </View>
          <View style={css.habilidadesContent}>
            <Animated.Text style={cssSkeleton.habilidades}/>
          </View>
        </View>
      </View>
    )

  };

  static mostrarSemCards = () => {

    let css = PokedexCSS.MOSTRAR_MENSAGEM;

    return (
      <View style={css.view}>
        <Text style={css.titulo}>Nenhum Pokémon corresponde à sua pesquisa!</Text>
        <Text style={css.subTitulo}>Experimente estas sugestões para encontrar um Pokémon:</Text>
        <View style={css.itemView}>
          <Text style={css.ponto}>{Icones.ponto}</Text>
          <Text style={css.item}>Reduza o número de parâmetros de pesquisa.</Text>
        </View>
        <View style={css.itemView}>
          <Text style={css.ponto}>{Icones.ponto}</Text>
          <Text style={css.item}>Procure apenas por um tipo de Pokémon de cada vez.</Text>
        </View>
        <View style={css.itemView}>
          <Text style={css.ponto}>{Icones.ponto}</Text>
          <Text style={css.item}>Tente procurar por tamanhos e formas diferentes.</Text>
        </View>
      </View>
    );

  };

}
