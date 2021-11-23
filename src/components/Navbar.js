// import React from 'react';
// import CartWidget from './CartWidget';
// import "./Navbar.css";

// const Navbar = () => {
//     return ( 
//         <nav className = "">
//             <div className = "navbarStyle" >
//                 <h1 className = "brand" ><a href="/" className="navbarLink">MyEcommerce</a></h1>
//                 <ul className = "navbar-contenedor">
//                     <li className = "item-navbar" ><a href="/" className="navbarLink">Home</a></li> 
//                     <li className = "item-navbar" ><a href="/producto" className="navbarLink">Categoria</a></li>
//                     <li className = "item-navbar" ><a href="/producto" className="navbarLink">Categoria2</a></li>
//                     <CartWidget />
//                 </ul>
//             </div> 
//         </nav>
//     )
// }

// export default Navbar;

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';
import "./NavBar.css";


function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Link to ="/" className="d-inline-block align-top" style={{ textDecoration: 'none',color:'white' }}>        
                    <img
                    alt=""
                    src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/13189.png"
                    width="40"
                    height="40"
                    />{' '}
                    ECOrdoba
                </Link>
                <Link to='/cart' className="d-inline-block align-top, cartWidget" style={{ textDecoration: 'none' }} >
                    <CartWidget/>
                </Link >
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                        <NavDropdown title="Tienda" id="collasible-nav-dropdown">
                            <Link to="/"><NavDropdown.Item href="#action/3.1">Ir a la tienda</NavDropdown.Item></Link>
                            <NavDropdown.Divider />
                            <Link to="/category/Limpieza"><NavDropdown.Item href="#action/3.2">Limpieza</NavDropdown.Item></Link>
                            <Link to="/category/Higiene"><NavDropdown.Item href="#action/3.3">Higiene</NavDropdown.Item></Link>
                            <Link to="/category/Reciclaje"><NavDropdown.Item href="#action/3.4">Reciclaje</NavDropdown.Item></Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
       
    )
}
export default NavBar