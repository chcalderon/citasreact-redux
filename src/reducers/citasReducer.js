import { MOSTRAR_CITAS, AGREGAR_CITA, BORRAR_CITA } from './../actions/types';

const initialState = {
    citas: []
}

export default function(state = initialState, action) {
    switch(action.tuype){
        case MOSTRAR_CITAS:
            return {
                ...state
                }
        default:
            return state;
    }
}