import React from 'react';
import "./ItemDetail.css";
import ItemCount from './ItemCount';

const Item = ({ item }) => {

    return ( 
        <div className="contenedorItem">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <img className="imagen" src={item.image} alt={item.description}/>
            <h4>${item.price}</h4>
            <ItemCount stock={item.stock} initial={1}/>
        </div> 
    )
}

export default Item;