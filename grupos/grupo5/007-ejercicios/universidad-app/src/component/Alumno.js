import React, {Component }from 'react';

import datos from '../datos/index';


export default class Alumno extends Component{
    constructor(props){
        super(props);
        this.state={
       
            //vistaActual: 'alumnos',
             idDetalleSeleccionado: -1,
            alumnos: datos.alumnos,
            setVistaActual:this.setVistaActual,
            remove: this.remove,
            vistaActual:true,
            modalInsertar: false,
          form:{
            nombre:"",
            edad: "",
          }

        };
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

 remove = (alumnos) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+alumnos.id);
    if (opcion === true) {
      var contador = 0;
      var temp = this.state.alumnos;
       temp.map((element) => {
        if (alumnos.id === element.id) {
          temp.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ alumnos: temp });
    }
  };

  

  render(){
  const vistaActual =  <div>
  <table border="1">
 <thead>
   <tr>
     <th>Id</th>
     <th>Nombre</th>
     <th>Edad</th>
   </tr>
 </thead>
 <tbody>
   {this.state.alumnos.map((element)=>(
     <tr key={element.id}>
       <td>{element.id}</td>
       <td>{element.nombre}</td>
       <td>{element.edad}</td>
       <td><button color="danger" onClick={()=> this.remove(element)}>Eliminar</button></td>{"  "}
     </tr>
   ))}
 </tbody>
 </table>
 </div>
        
return (
    //<App AppOtro= {this.vistaActual.bind(this)}
    // <button className="btn btn-outline-info" onClick={ this.handleClick}>  Alumno</button>/>
    <>
   <div className="mainView">{this.state.vistaActual?vistaActual:true}</div>  
      
        </>
     );
  }
    
}