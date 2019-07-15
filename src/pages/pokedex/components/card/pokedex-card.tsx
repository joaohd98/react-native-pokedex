import {ImageSourcePropType, Text, View, Image, Animated, Easing} from "react-native";
import React, {Component} from "react";
import {Icones} from "../../../../helpers/icones/icones";
import {PokedexCSS} from "../../pokedex-css";
import {PokedexModel} from "../../service/PokedexModel";
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';


interface Props {
  pokemon?: PokedexModel.ViewModel,
  skeleton?: boolean
}

export class PokedexCard extends Component<Props>{

  private pegarTipos = (pokemon) => {

    let css = PokedexCSS.PokedexCard;
    let elementos: Element[] = [];

    for(let tipo of pokemon.tipos)
      elementos.push(<Text key={tipo} style={css.habilidade}>{tipo}</Text>);

    return elementos

  };

  private mostrarSemCards = () => {

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

  private gerarCard = (pokemon: PokedexModel.ViewModel) => {

    let css = PokedexCSS.PokedexCard;

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
            { this.pegarTipos(pokemon) }
          </View>
        </View>
      </View>
    );

  };

  private gerarCardSkeleton = () => {

    let css = PokedexCSS.PokedexCard;
    let cssSkeleton = PokedexCSS.PokedexCardSkeleton;

    return (
      <View style={css.card}>
        <View style={css.imagem}>
          <ShimmerPlaceHolder style={cssSkeleton.imagem} autoRun={true}/>
          {/*<Animated.View style={} />*/}
        </View>
        <View style={css.cardContent}>
          <View>
            {/*<Animated.Text style={cssSkeleton.numero}/>*/}
            <ShimmerPlaceHolder style={cssSkeleton.numero} autoRun={true}/>
          </View>
          <View style={css.nomeContent}>
            {/*<Animated.Text style={cssSkeleton.nome}/>*/}
            <ShimmerPlaceHolder style={cssSkeleton.nome} autoRun={true}/>
          </View>
          <View style={css.habilidadesContent}>
            {/*<Animated.Text style={cssSkeleton.habilidades}/>*/}
            <ShimmerPlaceHolder style={cssSkeleton.habilidades} autoRun={true}/>
          </View>
        </View>
      </View>
    )

  };



  render() {

    let props = this.props;

    return props.pokemon ? this.gerarCard(props.pokemon) : props.skeleton ? this.gerarCardSkeleton() : this.mostrarSemCards();

  }


}
