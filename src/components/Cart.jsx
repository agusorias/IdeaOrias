import {  useCartContext } from "../Context/CartContext"
import {useState} from 'react';
import "./Cart.css";
import { getFirestore } from "../service/getFirebase";
import firebase from "firebase";
import 'firebase/firestore';


const Cart = () => {

    const [formData, setFormData] = useState(initialState)

    const {cart, clear, precioTotal, removeItem} = useCartContext() 

    function handleChange(){
        setFormData({
            ...formData,
        })
    }

    function handleSubmit(e){
        e.preventDefault()

        const newOrder={
            buyer:formData,
            items:cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total:precioTotal(),
        }
        const db = getFirestore()
        const orders= db.collection('orders')
        orders.add(newOrder)
        .then(resp => alert('¡Muchas gracias por comprar en Ecommerce!'+ "\r\n" + "\r\n" +'El ID de su compra es:'+ "\r\n" + resp.id))
        .finally(()=>{
            setFormData(initialState)
            clear()
        })
    }

    if(cart.length!==0){
        return  <div className="cart">
                    <table>
                        <tr className="cartHeader">
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                        </tr>
                        {cart.map(pro =><tr className="cartTr">
                                            <td className="cartIdentifier">
                                               {pro.name}
                                            </td>
                                            <td>
                                                {pro.quantity} x ${pro.price}
                                            </td>
                                            <td>
                                                $ {pro.quantity*pro.price}
                                                <button className="cartDelete" onClick={()=>removeItem(pro.id)} >X</button>
                                            </td>
                                        </tr>
                        )}
                        <tr className="cartHeader">
                            <td></td>
                            <td><button onClick={clear} >Reset</button></td>
                            <td>
                                Total: $ {precioTotal()}
                            </td>
                        </tr>
                    </table>
                    <div className="order">
                        <form onChange={handleChange}>
                            <label>Nombre</label><br/>
                            <input type="text" placeholder="Ingrese nombre" name="name"/><br/>
                            <label>N° de contacto</label><br/>
                            <input type="tel" placeholder="Ingrese número de contacto" name="tel"/><br/>
                            <label>E-mail</label><br/>
                            <input type="email" placeholder="Ingrese dirección e-mail" name="email"/>
                            <input type="email" placeholder="Confirme dirección e-mail" name="email2"/>
                        </form>
                        <button onClick={handleSubmit} >REALIZAR PEDIDO</button>
                    </div>
                </div>
    }
    return <h2 className="loading">Aquí aún no hay nada</h2>
}

export default Cart

const initialState={
    name:'',
    email:'',
    tel:'',
}