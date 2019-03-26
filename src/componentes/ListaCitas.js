import React, { Component } from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

//Redux
import { connect } from 'react-redux';
import { obtenerCitas } from '../actions/citasActions';

class ListaCitas extends Component {
    render() { 
        const citas = this.props.citas;

        //console.log(Object.keys(citas).length);

        const mensaje = Object.keys(citas).length === 0 ? 'No hay Citas' : 'Administra tus citas aquí';
        
        return ( 
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{mensaje}</h2>
                    <div className="lista-citas">
                        {/* <Cita /> */}
                        {Object.keys(this.props.citas).map(cita => (
                            <Cita
                                key={cita}
                                info={this.props.citas[cita]}
                                borrarCita={this.props.borrarCita}
                            />
                        ))}
                    </div>
                </div>
            </div>
         );
    }
}

ListaCitas.propTypes = {
    citas: PropTypes.array.isRequired,
    borrarCita: PropTypes.func.isRequired,
}
 
//export default ListaCitas;

const mapStateToProps = state => ({
    citas :  state.citas.citas
})

export default  connect(mapStateToProps, {obtenerCitas}) (ListaCitas);