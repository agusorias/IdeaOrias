// import React, { useEffect } from "react";
// import { useState } from "react/cjs/react.development";
// // import ItemCount from "./ItemCount";
// import "./ItemListContainer.css";
// import Products from "../Products.json";
// import { ItemList } from "./ItemList";

// const ItemListContainer = (props) => {
    
//     const [productos, setProductos] = useState([]);

//     const getData = (data) => new Promise((resolve, reject) => {
//         if (data) {
//             resolve(data);
//         } else {
//             reject("No se encuentra nada")
//         }
//     })


//     useEffect(() => {
//         getData(Products)
//         .then(res => setProductos(res))
//         .catch(err => console.log(err));
//     }, [])

//     console.log(productos);
    
//     return (
//         <>
//             <h1 className="texto"> { props.greeting } </h1> 
//             <div>
//                 <ItemList items={productos}/>
//             </div>
//         </>
//     )
// }

// export default ItemListContainer;

import React, {useEffect, useState} from 'react';
import '../App.css';
import ItemList from './ItemList';
import { getFirestore } from '../service/getFirebase';
import { useParams } from 'react-router';

function ItemListContainer(){
      
    const [item, setItem] = useState([])
    
    const [loading, setLoading] = useState(true)

    const {categoriaItem} = useParams()

    useEffect(() => {

      const dataBase = getFirestore();

      if(categoriaItem===undefined){
        const queryDB = dataBase.collection('items')
        queryDB.get().then((querySnapshot)=>{
          setItem(querySnapshot.docs.map(item=>( {id : item.id , ...item.data() })))
        })
      }else {
        const queryDB = dataBase.collection('items').where('categoria','==',categoriaItem)
        queryDB.get().then((querySnapshot)=>{
          setItem(querySnapshot.docs.map(item=>( {id : item.id , ...item.data() })))
        })
      }
      setLoading(false)
    }, [categoriaItem])
    
  return (
    <>
      {loading ? 
        <h2 className="loading">Cargando</h2>
        :  
      <div className='ecommerceCardContainer'>
          <ItemList items={item}/>
      </div>
      }
    </>
  )
}

export default ItemListContainer;