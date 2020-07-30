import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


import datos from './datos';
import Alumno from './component/Alumno';
import Profesor from './component/Profesor';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alumnos: datos.alumnos,
      profesores: datos.profesores,
      materias: datos.materias,
      calificaciones: datos.calificaciones,

      MostarALumno: false,
      MostrarProfesor: false,
    
     
    };
     this.handleClickAlumno = this.handleClickAlumno.bind(this);
     this.handleClickProfesor = this.handleClickProfesor.bind(this);
  }

  handleClickAlumno() {
    this.setState(state => ({
      MostarALumno: !state.MostarALumno,
      MostrarProfesor: false
    }));
  }
  handleClickProfesor() {
    this.setState(state => ({
      MostrarProfesor: !state.MostrarProfesor,
      MostarALumno: false
    }));
  }

  
  
  render() {
    const MostarALumno = <Alumno/>;
    const MostrarProfesor = <Profesor/>;
    return (
      <div className="App">
        <header className="alert alert-info" >Diplomatura JS</header>
        <div id="botonera">
          <button className="btn btn-outline-info" onClick={ this.handleClickAlumno}>Alumnos</button>
          <button className="btn btn-outline-info" onClick={ this.handleClickProfesor}>Profesores</button>
          <button className="btn btn-outline-info">Materias</button>
          <button className="btn btn-outline-info">Calificaciones</button>
        </div>
      <>
       
        <h2>{this.state.MostarALumno?MostarALumno:true}</h2>
        <h2>{this.state.MostrarProfesor?MostrarProfesor:true}</h2>
      
      </>
      
        
      </div>
    );
  }
}


export default App;
