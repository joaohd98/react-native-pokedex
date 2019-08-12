import * as React from "react";
import {
  Modal,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList, TouchableWithoutFeedback, Button,
} from "react-native";
import {PokedexProps} from "../../../service/PokedexProps";
import {FiltroCSS} from "../filtro-css";
import {images} from "../../../../../assets";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from "../../../../../helpers/colors/colors";
import {RefObject} from "react";
import {Helpers} from "../../../../../helpers/helpers";
import {FiltroHeader} from "../header/filtro-header";

interface State {
  flatList: RefObject<FlatList<string>>
  selecionado: string,
  modalVisivel: boolean
}

export class FiltroHabilidades extends React.Component<PokedexProps.FiltroForm, State> {

  state = {
    flatList: React.createRef<FlatList<string>>(),
    selecionado: this.props.habilidades.selecionada,
    modalVisivel: false,
  };

  UNSAFE_componentWillMount() {

    this.props.habilidades.todas.unshift("");

  }

  renderInput() {

    const texto = this.props.habilidades.selecionada ? this.props.habilidades.selecionada : "Todas";

    const css = FiltroCSS.HABILIDADES;

    const abrirModal = () => this.setState({modalVisivel: true});

    return (
      <TouchableWithoutFeedback onPress={abrirModal}>
        <View style={css.inputView}>
          <Image style={css.icon} source={images.pokeballWhite}/>
          <TextInput value={texto} style={css.input} editable={false} onTouchStart={abrirModal}/>
        </View>
      </TouchableWithoutFeedback>
    )

  }

  scrollToIndex() {

    let current = this.state.flatList.current;

    if(current) {

      const index = this.props.habilidades.todas.indexOf(this.props.habilidades.selecionada);

      current.scrollToIndex({animated: false, index: index});

    }


  }

  renderModal() {

    const css = FiltroCSS.HABILIDADES;

    const listaTamanho = (index: number) => ({
      length: FiltroCSS.LIST_ITEM_HEIGTH,
      offset: ( FiltroCSS.LIST_ITEM_HEIGTH * index + FiltroCSS.LIST_ITEM_BORDER_HEIGTH * index ) + 1,
      index: index
    });

    return (
      <Modal visible={this.state.modalVisivel} transparent={true} animationType="fade">
        <TouchableWithoutFeedback onPress={() => this.cancelar()}>
          <View style={css.modal}>
            <TouchableWithoutFeedback onPress={undefined}>
              <View style={css.select}>
                <View style={css.selectTitle}>
                  <Text style={css.selectTitleText}>Habilidades</Text>
                </View>
                <FlatList onLayout={this.scrollToIndex.bind(this)}
                  ref={this.state.flatList} style={css.selectList}
                  getItemLayout={(data, index) => listaTamanho(index) }
                  data={this.props.habilidades.todas} keyExtractor={item => item}
                  ItemSeparatorComponent={() => this.renderSeperator()} renderItem={({item}) => this.renderItem(item)}
                />
                <View style={css.selectView}>
                  <TouchableOpacity style={css.selectButtons} onPress={this.cancelar.bind(this)}>
                    <Text style={css.selectButtonsText}>Cancelar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={css.selectButtons} onPress={this.selecionarHabilidade.bind(this)}>
                    <Text style={css.selectButtonsText}>Selecionar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )

  }

  renderItem(item: string) {

    const css = FiltroCSS.HABILIDADES;
    const FonteTamanho = 15;

    const gerarIcone = (selecionado: boolean) => {

      if (selecionado)
        return (
          <View style={css.selectItemIcon}>
            <Icon name="check" size={FonteTamanho} color={Colors.link}/>
          </View>
        );

      else
        return (<View style={css.selectItemIcon}/>)

    };

    return (
      <TouchableOpacity style={css.selecItemClick} onPress={() => this.setState({selecionado: item})}>
        { gerarIcone(item == this.state.selecionado)}
        <View>
          <Text style={{fontSize: FonteTamanho, letterSpacing: 1, fontWeight: "300"}}>
            { item || "Todas"}
          </Text>
        </View>
      </TouchableOpacity>
    )

  }

  renderSeperator() {

    const css = FiltroCSS.HABILIDADES;

    return (<View style={css.selectBorder}/>)

  }

  selecionarHabilidade() {

    this.props.habilidades.selecionada = this.state.selecionado;

    this.setState({
      ...this.props,
      flatList: React.createRef<FlatList<string>>(),
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
        <FiltroHeader titulo={"Habilidade"} />
        {this.renderInput()}
        {this.renderModal()}
      </View>
    );

  }

}
