import React, {Component }from 'react';
import datos from '../datos/index';


export default class Profesor extends Component{
    constructor(props){
        super(props);
        this.state={
            idDetalleSeleccionado: -1,
            profesores: datos.profesores,
            setVistaActual:this.setVistaActual,
            remove: this.remove,
            vistaActual:true,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
          vistaActual: !state.vistaActual
        }));
      }

    /**
   * Se utiliza para disparar el cambio de vista.
   * Si viene un id seleccionado, se setea como el detalle actual.
   * @param {*} vista
   * @param {*} idSeleccionado
   */
  setVistaActual(vista, idSeleccionado) {
    const newState = { vistaActual: vista };
    if (idSeleccionado) {
      newState.idDetalleSeleccionado = idSeleccionado;
    } else {
      newState.idDetalleSeleccionado = -1;
    }
    this.setState(newState);
  }

  remove = (profesores) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+profesores.id);
    if (opcion === true) {
      var contador = 0;
      var temp = this.state.profesores;
       temp.map((element) => {
        if (profesores.id === element.id) {
          temp.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ profesores: temp });
    }
  };


  render(){
    const vistaActual =<div>
    <table border="1">
      <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
           </tr>
        </thead>
        <tbody>
          {this.state.profesores.map((element)=>(
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.nombre}</td>
          <td><button color="danger" onClick={()=> this.remove(element)}>Eliminar</button></td>{"  "}
            </tr>
          ))}
        </tbody>
        </table>
     </div>;

     return (
          //<button className="btn btn-outline-info" onClick={ this.handleClick}>Profesor</button>
        <>
        
         <div className="mainView">{this.state.vistaActual?vistaActual:true}</div>  
        
    </>
     );
      

     }

  }

