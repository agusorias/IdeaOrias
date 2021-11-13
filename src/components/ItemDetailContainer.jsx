// import React, { useEffect } from "react";
// import { useState } from "react/cjs/react.development";
// import "./ItemDetailContainer.css";
// import Products from "../Products.json";
// import ItemDetail from "./ItemDetail";

// const ItemDetailContainer = (props) => {

//     const [producto, setProducto] = useState([]);
//     const getData = (data) => new Promise((resolve, reject) => {
//         if (data) {
//             resolve(data);
//         } else {
//             reject("No podemos brindarle la información solicitada")
//         }
//     })
//     useEffect(() => {
//         getData(Products)
//             .then(res => setProducto(res))
//             .catch(err => console.log(err));
//     }, [])
//     console.log(producto);

//     return (
//         <>
//         <h1 className = "texto" > { props.greeting } </h1>  
//         <div>
//         <ItemDetail items = { producto }/> 
//         </div> 
//         </>
//     )
// }
// export default ItemDetailContainer;

import React, {useEffect, useState} from 'react';
import { getFirestore } from '../service/getFirebase';
import ItemDetail from './ItemDetail';
import "./ItemDetail.css";

const ItemDetailContainer = (props) => {
    
    const [itemDetail, setItemDetail] = useState({})
    const [loading, setLoading] = useState(true)
    const id= props.match.params.id;
    
    useEffect(() => {
        const dataBase = getFirestore()
        const items = dataBase.collection('Items').doc(id).get()
        items
        .then (resp=>{
            setItemDetail({id : resp.id,...resp.data()})
            setLoading(false)
        })
    },)

    return (
        <>
            {loading ? 
                <h2 className="loading">Cargando</h2>
                :        
                <div className="itemDetailContainer">
                    <ItemDetail item={itemDetail}/>
                </div>
            }  
        </>
    )
}

export default ItemDetailContainer