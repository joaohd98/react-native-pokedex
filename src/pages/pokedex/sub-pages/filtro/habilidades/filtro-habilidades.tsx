import * as React from "react";
import {Picker, Modal, Text, View, TouchableHighlight, TextInput, Image, TouchableOpacity} from "react-native";
import {PokedexProps} from "../../../service/PokedexProps";
import {FiltroCSS} from "../filtro-css";
import {Helpers} from "../../../../../helpers/helpers";
import {images} from "../../../../../assets";

interface teste {
  modalVisible: boolean;
}

export class FiltroHabilidades extends React.Component<PokedexProps.FiltroForm, teste> {

  state = {
    modalVisible: false,
  };

  header() {

    let css = FiltroCSS.HEADER;

    return (
      <View>
        <Text style={css.title}>Habilidade</Text>
      </View>
    )

  }

  gerarItens() {

    let itens = [];

    // let itens: Item[] = [];
    //
    // for (let habilidade of this.props.habilidades.todas) {
    //
    //   itens.push({
    //     label: habilidade,
    //     value: habilidade,
    //     key: habilidade,
    //   })
    //
    // }

    return itens;

  }

  selecionarHabilidade(item) {

    this.props.habilidades.selecionada = item;

    // this.setState(this.props.habilidades);

  }

  renderInput() {

    const texto = this.props.habilidades.selecionada ? this.props.habilidades.selecionada : "Todos";

    const css = FiltroCSS.HABILIDADES;

    const abrirModal = () => this.setState({modalVisible: true});

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
      <Modal visible={this.state.modalVisible} transparent={true}>
        <View style={css.modal}>
          <View style={css.selectView}>
            <TouchableOpacity style={css.selectBotoes}>
              <Text style={css.selectBotoesTexto}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={css.selectBotoes}>
              <Text style={css.selectBotoesTexto}>Selecionar</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Picker>{ itens }</Picker>
          </View>
        </View>
      </Modal>
    )
  }

  render() {

    const css = FiltroCSS.HABILIDADES;

    const placeholder = {
      label: 'Todas',
      value: null,
    };

    return (
      <View>
        { this.header() }
        { this.renderInput() }
        { this.renderModal() }
      </View>
    );

  }

}
