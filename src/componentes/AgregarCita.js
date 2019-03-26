import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AgregarCita extends Component {

    //Crear refs
    nombreMascotaRef =React.createRef();
    propietarioRef =React.createRef();
    fechaRef =React.createRef();
    horaRef =React.createRef();
    sintomasRef =React.createRef();

    state = { 
        error: false,
     }

    crearNuevaCita = (e) => {
        e.preventDefault();

        const mascota = this.nombreMascotaRef.current.value,
              propietario = this.propietarioRef.current.value,
              fecha = this.fechaRef.current.value,
              hora = this.horaRef.current.value,
              sintomas = this.sintomasRef.current.value;

        if ( mascota === '' || propietario === '' || fecha === '' || hora==='' || sintomas==='' ){
            this.setState({
                error: true
            });
        //    return false;
        } else {
            const nuevaCita = {
                id: uuid(),
                mascota,
                propietario,
                fecha,
                hora,
                sintomas,
            }

            // console.log(this.nombreMascotaRef.current.value);
            // console.log(this.propietarioRef.current.value);
            // console.log(this.fechaRef.current.value);
            // console.log(this.horaRef.current.value);
            // console.log(this.sintomasRef.current.value);

            //Se envía el objeto hacia el padre para actualizar el state
            this.props.crearCita(nuevaCita);

            //Reiniciar el formulario
            e.currentTarget.reset();
            //console.log(e.currentTarget);
            this.setState({
                error:false
            });
        }
    }

    render() { 
        const existeError = this.state.error;
        return ( 
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Agrega las citas aquí</h2>

                    <form onSubmit={this.crearNuevaCita}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref={this.nombreMascotaRef} type="text" className="form-control" placeholder="Nombre Mascota" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref={this.propietarioRef} type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input type="date" className="form-control" ref={this.fechaRef} />
                            </div>                            

                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="time" className="form-control" ref={this.horaRef} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea  ref={this.sintomasRef} className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-4">
                                <button type="submit" className="btn btn-success w-100">Agregar</button>
                            </div>
                        </div>
                    </form>
                    { existeError ? <div className="alert alert-danger text-center">Todos los campos son obligatorios</div> : ''}
                </div>
            </div>
         );
    }
}

AgregarCita.propTypes = {
    crearCita: PropTypes.func.isRequired,
}
 
export default AgregarCita;