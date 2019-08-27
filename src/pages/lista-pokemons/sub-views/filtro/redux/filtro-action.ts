export enum FiltroConst {

  FILTRO_ENTRAR_PAGINA,
  FILTRO_APLICAR,
  FILTRO_REDEFINIR,

}

export class FiltroAction {

  static aplicarFiltros = () => {

    return dispatch => {

      dispatch({
        type: FiltroConst.FILTRO_APLICAR,
        payload: {
        }
      })

    }

  };

  static redefinirFiltros = () => {

    return dispatch => {

      dispatch({
        type: FiltroConst.FILTRO_REDEFINIR,
        payload: {
        }
      })

    }

  };


}
