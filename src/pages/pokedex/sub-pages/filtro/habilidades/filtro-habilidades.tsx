import * as React from "react";
import {
  Modal,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {PokedexProps} from "../../../service/PokedexProps";
import {FiltroCSS} from "../filtro-css";
import {images} from "../../../../../assets";
import Icon from 'react-native-vector-icons/FontAwesome';

interface State {
  selecionado: string,
  modalVisivel: boolean
}

export class FiltroHabilidades extends React.Component<PokedexProps.FiltroForm, State> {

  state = {
    selecionado: this.props.habilidades.selecionada,
    modalVisivel: false,
  };

  header() {

    let css = FiltroCSS.HEADER;

    return (
      <View>
        <Text style={css.title}>Habilidade</Text>
      </View>
    )

  }

  renderInput() {

    const texto = this.props.habilidades.selecionada ? this.props.habilidades.selecionada : "Todas";

    const css = FiltroCSS.HABILIDADES;

    const abrirModal = () => this.setState({modalVisivel: true});

    return (
      <TouchableHighlight onPress={abrirModal}>
        <View style={css.inputView}>
          <Image style={css.icon} source={images.pokeballWhite} />
          <TextInput value={texto}  style={css.input} editable={false} onTouchStart={abrirModal}/>
        </View>
      </TouchableHighlight>
    )

  }

  renderModal() {

    const css = FiltroCSS.HABILIDADES;

    return (
      <Modal visible={this.state.modalVisivel} transparent={true}>
        <View style={css.modal}>
          {/*<View style={css.selectView}>*/}
          {/*  <TouchableOpacity style={css.selectBotoes} onPress={this.cancelar.bind(this)}>*/}
          {/*    <Text style={css.selectBotoesTexto}>Cancelar</Text>*/}
          {/*  </TouchableOpacity>*/}
          {/*  <TouchableOpacity style={css.selectBotoes} onPress={this.selecionarHabilidade.bind(this)}>*/}
          {/*    <Text style={css.selectBotoesTexto}>Selecionar</Text>*/}
          {/*  </TouchableOpacity>*/}
          {/*</View>*/}
          <View>
            <View>

            </View>
            <FlatList
              data={this.props.habilidades.todas} keyExtractor={(item) => item} renderItem={({item}) => this.renderItem(item) } />
          </View>
        </View>
      </Modal>
    )

  }

  renderItem(item: string) {

    return (
      <TouchableOpacity style={{flexDirection: "row"}}>
        <View style={{}}>
          <Icon name="check" size={10} color="#000"/>
        </View>
        <View style={{}}>
          <Text>
            { item }
          </Text>
        </View>

      </TouchableOpacity>
    )
  }

  rolarHabilidade(item) {

    this.setState({selecionado: item});

  }

  selecionarHabilidade() {

    this.props.habilidades.selecionada = this.state.selecionado;

    this.setState({
      ...this.props,
      modalVisivel: false,
      selecionado: this.props.habilidades.selecionada
    })

  }

  cancelar() {

    this.setState({
      modalVisivel: false,
      selecionado: this.props.habilidades.selecionada
    });

  }

  render() {

    const css = FiltroCSS.HABILIDADES;

    return (
      <View style={css.view}>
        { this.header() }
        { this.renderInput() }
        { this.renderModal() }
      </View>
    );

  }

}
