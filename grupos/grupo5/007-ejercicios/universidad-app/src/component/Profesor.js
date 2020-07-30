import React, {Component }from 'react';
import datos from '../datos/index';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";



export default class Profesor extends Component{
    constructor(props){
        super(props);
        this.state={
            idDetalleSeleccionado: -1,
            profesores: datos.profesores,
            setVistaActual:this.setVistaActual,
            remove: this.remove,
            vistaActual:true,

            vistaActual:true,
            modalInsertar: false,
          form:{
            nombre:"",
            }

        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
          vistaActual: !state.vistaActual
        }));
      }

      mostrarModalInsertar = () => {
        this.setState({
          modalInsertar: true,
        });
      };
    
      cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
      };

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

  create= ()=>{
    var createNew= {...this.state.form};
    createNew.id=this.state.profesores.length+1;
    var lista= this.state.profesores;
    lista.push(createNew);
    this.setState({ modalInsertar: false, profesores: lista });
  }


  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
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
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Cargar Profesor</Button>
         <div className="mainView">{this.state.vistaActual?vistaActual:true}</div>  
 
         <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Ingresar Alumno</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.profesores.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
         </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.create()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
    </>
     );
      

     }

  }

