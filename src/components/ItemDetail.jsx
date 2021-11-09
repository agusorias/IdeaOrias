// import React from 'react';
// import "./ItemDetail.css";
// import ItemCount from './ItemCount';

// const ItemDetail = ({ item }) => {

//     return ( 
//         <div className="contenedorItem">
//             <h2>{item.name}</h2>
//             <p>{item.description}</p>
//             <img className="imagen" src={item.image} alt={item.description}/>
//             <h4>${item.price}</h4>
//             <ItemCount stock={item.stock} initial={1}/>
//         </div> 
//     )
// }

// export default ItemDetail;

import "./ItemDetail.css";
import ItemCount from "./ItemCount";
import { useCartContext } from "../Context/CartContext";

function ItemDetail({item}) {

    const {addToCart}= useCartContext();

    const onAdd=(count)=>{
        addToCart( item ,count);
    }

    return (
        <div className="detailCard">
            <img src={item.img} alt={item.name}></img>
            <div className="detailCardInfo">
                <div>
                    <h3 className="detailCardTitle">{item.name}</h3>  
                    <p className="detailCardText">{item.detail}</p> 
                </div>
                <ItemCount stock= {item.stock} price={item.price} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail