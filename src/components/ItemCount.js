import React,{useState, useEffect,useContext} from "react";
import {CartContext}  from '../context/StoreProvider';
import { GoDiffAdded,GoDiffRemoved } from "react-icons/go";


const ItemCount = ({id,stock,price}) => {
  
  const [quantity, setQuantity] = useState(0);
  
  
  const [cartArray,setCartArray] = useContext(CartContext)
  
  const addstock = () => {
    setQuantity(quantity +1);
  
  };
  
  const remStock = () => {
    setQuantity(quantity -1)
  };
  {/* 

    los productos estan limitados por el stock que recupera del "api"


    esta bosta estaba reconociendo la funcion y mandaba el console log con los datos para mandar al context pero no me permite mandar el objetos con los datos

if 


  */}
  
  const loaderCart = () =>{
    
    const newArray = [
      ...cartArray.list,
      {id, quantity, price}
    ]
    const cartModel={
      list: newArray,
      count:0,
      mount:0
    };
    
    setCartArray(cartModel)  
    console.log("newArray",cartModel);
  }




  {/*
    useEffect(() => {
      console.log("carga de datos" ,id,quantity,price)
    }, [{purchasedLoad}]);
  */}

  
  
  return (
    <div className="quantity">
      <div className="stock">
        <button className="btn-rem" onClick={remStock} disabled={ quantity === 0} ><GoDiffRemoved size="3em"/></button>
        <div>
          <p>cantidad: {quantity}</p>
          <button className="btn-buy" onClick={loaderCart} disabled={ stock === 0 || quantity  === 0 } >agregar al carrito</button>
        </div>
        <button className="btn-add" onClick={addstock} disabled={ quantity === stock }><GoDiffAdded size="3em"/></button>
      </div>
    </div>  
  );
}

export default ItemCount;