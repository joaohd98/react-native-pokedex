import * as React from "react";
import {
  Picker,
  Modal,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import {PokedexProps} from "../../../service/PokedexProps";
import {FiltroCSS} from "../filtro-css";
import {images} from "../../../../../assets";

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

    let itens: JSX.Element[] = [
      <Picker.Item key={"Todas"} label={"Todas"} value={""}/>
    ];

    for (let habilidade of this.props.habilidades.todas)
      itens.push(<Picker.Item key={habilidade} label={habilidade} value={habilidade} />);

    return (
      <Modal visible={this.state.modalVisivel} transparent={true}>
        <TouchableWithoutFeedback onPress={this.cancelar.bind(this)}>
          <View style={css.transparent}/>
        </TouchableWithoutFeedback>
        <View style={css.modal}>
          <View style={css.selectView}>
            <TouchableOpacity style={css.selectBotoes} onPress={this.cancelar.bind(this)}>
              <Text style={css.selectBotoesTexto}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={css.selectBotoes} onPress={this.selecionarHabilidade.bind(this)}>
              <Text style={css.selectBotoesTexto}>Selecionar</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Picker onValueChange={item => this.rolarHabilidade(item)} selectedValue={this.state.selecionado}>{ itens }</Picker>
          </View>
        </View>
      </Modal>
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
