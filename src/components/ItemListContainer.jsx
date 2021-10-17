import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
    return ( 
        <div>
            <p className="texto"> { props.greeting } </p>
            <ItemCount stock="5"/>
        </div>
    )
}

export default ItemListContainer;