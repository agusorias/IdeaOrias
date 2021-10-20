import React from 'react';
import "./Item.css";
import ItemCount from './ItemCount';

const Item = ({ item }) => {

    return ( 
        <div className="contenedorItem">
            <img className="imagen" src={item.image} alt={item.description}/>
            <h2>{item.name}</h2>
            <h4>${item.price}</h4>
            <p>{item.description}</p>
            <ItemCount stock={item.stock} initial={1}/>
        </div> 
    )
}

export default Item;