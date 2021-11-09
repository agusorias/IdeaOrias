// import { useState } from "react";
// import React from "react";
// import "./ItemCount.css";

// const ItemCount = ({stock, initial}) => {
//     const [counter, setCounter] = useState(initial);

//     const add = () => {
//          if (counter < stock) {
//              setCounter(counter + 1)
//          }
//     }

//     const decrease = () => {
//         if (counter > 1) {
//             setCounter(counter - 1)
//         }
//     }

//     const irAlCarrito = () => {
        
//     }

//     const agregarCarrito = () => {
//         return (
//             <button className="botonCounter" onClick={irAlCarrito}>Ver Carrito</button>
//         )
//     }

//     return ( 
//         <div className="contenedorBotones">
//             <button className="botonCounter" onClick={add}>+</button>
//             <p className="textoCounter">{counter}</p>
//             <button className="botonCounter" onClick={decrease}>-</button>
//             <button className="botonAgregar" onClick={agregarCarrito}>Agregar al carrito</button>
//         </div>
//     )
// }

// export default ItemCount;

import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock,price,onAdd})=>{

    const[count,setCount]=useState(parseFloat(1));

    const [buttonChange, setButtonChange] = useState(false)
        
    const incrementalClick = () => {
        if(count!==parseFloat(stock))
        setCount(count + 1);
    };
        
    const decrementalClick = () => {
        if(count!==parseFloat(1))
            setCount(count - 1);
    };
        
    const onAddHandler = () => {
        onAdd(count)
        setCount(1)
        setButtonChange(true)
    };
        
    const cancelar =()=>{
        setButtonChange(false)
    }


    return (
        <div className="cardBuyContainer">
            {buttonChange ? 
                <div className='cardBuyInfo'>
                    <Link to='/cart'>
                        <button className="carritoAddButton">Terminar mi compra</button>
                    </Link>
                    <Link to='/'>
                        <button className="counterButtons" onClick={cancelar}>Volver a la tienda</button>
                    </Link>
                </div>

                :

                <div>
                    <h3>${price*count}</h3> 
                    <div>
                        <button onClick={decrementalClick}>-</button>
                        <label>{count}</label>
                        <button onClick={incrementalClick}>+</button>
                    </div> 
                    <p>Stock:{stock}</p> 
                    <button onClick={onAddHandler}>Agregar a carrito</button>
                </div>

            }

        </div>
    );
};
export default ItemCount