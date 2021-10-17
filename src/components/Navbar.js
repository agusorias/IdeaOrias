import React from 'react';
import CardWidget from './CardWidget';

const Navbar = () => {
    return ( 
        <nav className = "navbarStyle" >
            <div className = "container" >
                <h1 className = "brand" ><a href="#Aplicacion" className="navbarLink">MyEcommerce</a></h1>
                <ul className = "navbar-contenedor">
                    <li className = "item-navbar" ><a href="#Aplicacion" className="navbarLink">Home</a></li> 
                    <li className = "item-navbar" ><a href="#Aplicacion" className="navbarLink">Categoria</a></li>
                    <li className = "item-navbar" ><a href="#Aplicacion" className="navbarLink">Categoria2</a></li>
                    <CardWidget />
                </ul>
            </div> 
        </nav>
    )
}

export default Navbar;