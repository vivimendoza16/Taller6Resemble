import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reportes: []
    }
  }

  render() {
    return (
      <div className="App">
        <button id="Generar" onClick={this.llamarServicios.bind(this)}> Generar reporte </button>
        <p>{this.state.reportes.length ? this.state.reportes[0].imagen1 : "hola"}</p>
        </div>
    );
  }
  llamarServicios(){
    fetch("/automatiza", {
      method: "GET",
      headers: { accept: "application/json" }
    })
      .then((res) => {
        if (res.ok)
          return res.json();
  
      })
      .then((newReport) => {
        this.setState({
          reportes: this.state.resportes.push(newReport)
        },() => {
          console.log(this.state.reportes)
        });
      });
    
  }

}




export default App;
