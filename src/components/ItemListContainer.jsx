import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
// import ItemCount from "./ItemCount";
import "./ItemListContainer.css";
import Products from "../Products.json";
import { ItemList } from "./ItemList";

const ItemListContainer = (props) => {
    
    const [productos, setProductos] = useState([]);

    const getData = (data) = new Promise((resolve, reject) => {
        if (data) {
            resolve(data);
        } else {
            reject("No se encuentra nada")
        }
    })


    useEffect(() => {
        getData(Products)
        .then(res => setProductos(res))
        .catch(err => console.log(err));
    }, [])

    console.log(productos);
    
    return (
        <>
            <h1 className="texto"> { props.greeting } </h1> 
            <div>
                {productos.map(producto => <ItemList item={producto}/>)}
            </div>
        </>
    )
}

export default ItemListContainer;