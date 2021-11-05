import React from 'react';
import CartWidget from './CartWidget';
import "./Navbar.css";

const Navbar = () => {
    return ( 
        <nav className = "">
            <div className = "navbarStyle" >
                <h1 className = "brand" ><a href="/" className="navbarLink">MyEcommerce</a></h1>
                <ul className = "navbar-contenedor">
                    <li className = "item-navbar" ><a href="/" className="navbarLink">Home</a></li> 
                    <li className = "item-navbar" ><a href="/producto" className="navbarLink">Categoria</a></li>
                    <li className = "item-navbar" ><a href="/producto" className="navbarLink">Categoria2</a></li>
                    <CartWidget />
                </ul>
            </div> 
        </nav>
    )
}

export default Navbar;