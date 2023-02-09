import React from 'react'
import Contact from './componente-b';
import { contacto } from './contacto.class';


const ListaContactoComponent = () => {

    const defaultContact = new contacto('Alejandro', 'Dorta', 'prueba@gmail.com', true)

    return (
        <div>
            <div>
                <h1>Tu contacto: </h1>
            </div>
            <Contact contacto={defaultContact}></Contact>
        </div>
    );
};




export default ListaContactoComponent;
