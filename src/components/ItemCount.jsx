import { useState } from "react";
import React from "react";
import "./ItemCount.css";

const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(0);

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

    return ( 
        <div className="contenedorBotones">
            <button className="botonCounter" onClick={add}>+</button>
            <p className="textoCounter">{counter}</p>
            <button className="botonCounter" onClick={decrease}>-</button>
        </div>
    )
}

export default ItemCount;