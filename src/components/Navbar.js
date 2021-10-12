import React from 'react';
import CardWidget from './CardWidget';

const Navbar = () => {
    return ( 
        <nav className = "navbarStyle" >
            <div className = "container" >
                <h1 className = "brand" > MyEcommerce </h1> 
                <ul className = "navbar-contenedor">
                    <li className = "item-navbar" > HOME </li>  
                    <li className = "item-navbar" > PRODUCTO1 </li>
                    <CardWidget />
                </ul>
            </div> 
        </nav>
    )
}

export default Navbar;