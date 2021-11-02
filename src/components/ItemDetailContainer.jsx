import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "./ItemDetailContainer.css";
import Products from "../Products.json";
import { ItemList } from "./ItemList";

const ItemDetailContainer = (props) => {

    const [producto, setProducto] = useState([]);
    const getData = (data) => new Promise((resolve, reject) => {
        if (data) {
            resolve(data);
        } else {
            reject("No podemos brindarle la información solicitada")
        }
    })
    useEffect(() => {
        getData(Products)
            .then(res => setProducto(res))
            .catch(err => console.log(err));
    }, [])
    console.log(producto);

    return (
        <>
        <h1 className = "texto" > { props.greeting } </h1>  
        <div>
        <ItemList items = { producto }/> 
        </div> 
        </>
    )
}
export default ItemDetailContainer;