import React from 'react';
import PropTypes from 'prop-types';
import {contacto} from './contacto.class'

const Contact = ({contacto}) => {
    return (
        <div>
            <h2>Nombre: { contacto.nombre }</h2>
            <h3>Apellido: { contacto.apellido }</h3>
            <h4>Email: { contacto.email }</h4>
            <h5>
                Contacto  { contacto.conectado ? 'En Línea' : 'No Disponible'}
            </h5>
        </div>
    );
};


Contact.propTypes = {
    contacto: PropTypes.instanceOf(contacto)
};


export default Contact;
