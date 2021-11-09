import { createContext, useContext, useState} from 'react'

export const CartContext= createContext();

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const isInCart = (id) => cart.some((item)=> item.id === id);
  
  const addToCart = (item, quantity) =>{
    if(isInCart(item.id)){
      const newCart=cart.map((cartElement)=>{
        if(cartElement.id === item.id){
          return{...cartElement, quantity: cartElement.quantity+quantity, stock:cartElement.stock-quantity}
        }else return cartElement;
      });
      setCart(newCart);
    }else{
      setCart((prev)=> [...prev, {...item,quantity}]);
    }
  }

  function removeItem(id){
    const cartRemoved = cart.filter((item)=> item.id !== id);
    setCart (cartRemoved);
  }
  const clear=()=> setCart([]);
  const precioTotal =()=>{
    return cart.reduce((acum, valor)=>(acum + (valor.quantity * valor.price)), 0) 
  }
  return(
    <CartContext.Provider value={{cart, addToCart, removeItem, clear, precioTotal}}>
      {children}
    </CartContext.Provider>
  )
}