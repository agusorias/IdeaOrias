import { useState } from "react";
import React from "react";
import "./ItemCount.css";

const ItemCount = ({stock, initial}) => {
    const [counter, setCounter] = useState(initial);

    const add = () => {
         if (counter < stock) {
             setCounter(counter + 1)
         }
    }

    const decrease = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    const agregarCarrito = () => {

    }

    return ( 
        <div className="contenedorBotones">
            <button className="botonCounter" onClick={add}>+</button>
            <p className="textoCounter">{counter}</p>
            <button className="botonCounter" onClick={decrease}>-</button>
            <button className="botonAgregar" onClick={agregarCarrito}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;