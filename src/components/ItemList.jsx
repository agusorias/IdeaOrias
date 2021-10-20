import React from "react";
import Item from "./Item";
import "./ItemList.css";

export const ItemList = ({ items }) => {
  return (
    <div className="contenedorItemList">
      {items.map((item, id) => {
        return <Item item={item} key={id} />;
      })}
    </div>
  );
};