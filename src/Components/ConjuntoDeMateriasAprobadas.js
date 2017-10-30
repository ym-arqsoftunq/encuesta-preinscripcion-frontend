import React from 'react';
import ConjuntoDeMaterias from './ConjuntoDeMaterias';
import Materia from './Materia';

/*
    Conjunto de materias aprobadas por el alumno
*/

class ConjuntoDeMateriasAprobadas extends ConjuntoDeMaterias {

    renderMaterias() {
        return (
            <div>
            {this.state.materias.map(
                function(materia, i){
                    return (
                        <div key={i}>
                            <Materia datos={materia}/>
                        </div>
                    );

                })
            }
            </div>
        );
    }

    render() {
      return (
        <div id="MateriasAprobadas" className="col-md-6">
            <hr></hr>
            <h3>Materias aprobadas</h3>
            {this.renderMaterias()}
            <hr></hr>
        </div>
      );
    }

}

export default ConjuntoDeMateriasAprobadas;
