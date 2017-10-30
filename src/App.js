import React, { Component } from 'react';
import Header from './Components/Header';
import EncuestaForm from './Components/Encuesta';
import Alumno from './Components/Alumno';
import './App.css';
import axios from 'axios';

class App extends Component {

    constructor(props) {
      super(props);
      this.state = { oferta: null}
    }

    traerOferta() {
        var self = this;
        axios.get('https://encuesta-preinscripcion-bknd.herokuapp.com/oferta/15')
          .then(res => {
            self.setState({ oferta: res.data });
        });
    }

    componentWillMount() {
        this.traerOferta();
    }

  render() {
    //Si ya tengo los datos, genero los componentes
    if (this.state.oferta) {
        return (
            <div className="container">
                <div className="row">
                    <Header />
                    <Alumno datos={this.state.oferta.alumno}/>
                </div>
                <div className="row">
                    <EncuestaForm oferta={this.state.oferta} />
                </div>
            </div>
        );
    }
    else{
        //Mientras espero que llegue la oferta, muestro lo que esta aca
        return (<h1>Loading...</h1>)
    }
  }
}

export default App;