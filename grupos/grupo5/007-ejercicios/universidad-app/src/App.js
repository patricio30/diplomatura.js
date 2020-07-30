import React from 'react';
import './App.css';
import datos from './datos';
import Alumno from './componet/Alumno';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      alumnos: datos.alumnos,
      profesores: datos.profesores,
      materias: datos.materias,
      calificaciones: datos.calificaciones,
     
    };
  }
  
  


  render() {
    
const vistaProfesores = <div>
<table border="1">
  <thead>
      <tr>
        <th>Id</th>
        <th>Nombre</th>
       </tr>
    </thead>
    <tbody>
      {this.state.profesores.map((element)=>(
        <tr>
          <td>{element.id}</td>
          <td>{element.nombre}</td>
      <td><button color="danger">Eliminar</button></td>{"  "}
        </tr>
      ))}
    </tbody>
    </table>
 </div>;


    return (
      <div className="App">
        <header className="alert alert-info">Diplomatura JS</header>
        <div id="botonera">
          <button className="btn btn-outline-info" onClick={()=> this.Alumno.setVistaActual}>Alumnos</button>
          <button className="btn btn-outline-info" onClick={()=> this.setVistaActual(vistaProfesores)}>Profesores</button>
          <button className="btn btn-outline-info">Materias</button>
          <button className="btn btn-outline-info">Calificaciones</button>
        </div>

          
        
     <div className="mainView">{Alumno.setVistaActual}</div> 
       
       <div className="mainView">{vistaProfesores}</div>        
        
      </div>
    );
  }
}


export default App;
