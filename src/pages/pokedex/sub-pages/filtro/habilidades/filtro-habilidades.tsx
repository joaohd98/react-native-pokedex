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
import {Colors} from "../../../../../helpers/colors/colors";

interface State {
  selecionado: string,
  modalVisivel: boolean
}

export class FiltroHabilidades extends React.Component<PokedexProps.FiltroForm, State> {

  state = {
    selecionado: this.props.habilidades.selecionada || "Todas" ,
    modalVisivel: false,
  };

  UNSAFE_componentWillMount() {

    this.props.habilidades.todas.unshift("Todas");

  }

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
          <Image style={css.icon} source={images.pokeballWhite}/>
          <TextInput value={texto} style={css.input} editable={false} onTouchStart={abrirModal}/>
        </View>
      </TouchableHighlight>
    )

  }

  renderModal() {

    const css = FiltroCSS.HABILIDADES;

    return (
      <Modal visible={this.state.modalVisivel} transparent={true}>
        <View style={css.modal}>
          <View style={css.select}>
            <View style={css.selectTitle}>
              <Text style={css.selectTitleText}>Habilidades</Text>
            </View>
            <FlatList
              data={this.props.habilidades.todas} keyExtractor={(item) => item}
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
        </View>
      </Modal>
    )

  }

  renderItem(item: string) {

    const css = FiltroCSS.HABILIDADES;
    const FonteTamanho = 15;

    const clicarHabilidade = (item) => {

      this.setState({selecionado: item});

    };

    const gerarIcone = (selecionado: boolean) => {

      if(selecionado)
        return (
          <View style={css.selectItemIcon}>
            <Icon name="check" size={FonteTamanho} color={Colors.link}/>
          </View>
        );

      else
        return (<View style={css.selectItemIcon}/>)

    };

    return (
      <TouchableOpacity style={css.selecItemClick} onPress={() => clicarHabilidade(item)}>
        { gerarIcone(item == this.state.selecionado) }
        <View style={css.selectItem}>
          <Text style={{fontSize: FonteTamanho, letterSpacing: 1, fontWeight: "300"}}>
            {item}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderSeperator() {

    return (<View style={{borderColor: Colors.gray, borderBottomWidth: 1}} />)
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
        {this.header()}
        {this.renderInput()}
        {this.renderModal()}
      </View>
    );

  }

}
