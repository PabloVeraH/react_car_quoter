import React, { Fragment } from 'react';

const Resumen = ({datos}) => {

    // extraer de datos
    const {marca, year, plan} = datos;

    if(marca === '' || year === '' || plan === '' ) return null;
    return ( 
        <Fragment>
            <h2>Quote Resume</h2>
            <ul>
                <li>Brand: </li>
                <li>Plan: </li>
                <li>Car's Year: </li>
            </ul>
        </Fragment>
     );
}
 
export default Resumen;