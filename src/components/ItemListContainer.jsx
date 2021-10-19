import React from "react";
import ItemCount from "./ItemCount";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
    return ( 
        <div>
            <p className="texto"> { props.greeting } </p>
            <ItemCount stock={5} initial={1}/>
        </div>
    )
}

export default ItemListContainer;