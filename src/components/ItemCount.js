import React,{useState, useEffect} from "react";
import {CartContext}  from '../context/StoreProvider';
import { GoDiffAdded,GoDiffRemoved } from "react-icons/go";


const ItemCount = ({id,stock,price}) => {
  
  const [count, setCount] = useState(0);
  
  const [buy, setBuy] = useState({});
  //const {CartContext} = CartContext;
  
  const addstock = () => {
    setCount(count +1);
  
  };
  
  const remStock = () => {
    setCount(count -1)
  };
  {/* 

    los productos estan limitados por el stock que recupera del "api"


    esta bosta estaba reconociendo la funcion y mandaba el console log con los datos para mandar al context pero no me permite mandar el objetos con los datos
  */}
  
  const purchasedLoad = () =>{
    setBuy({id,count,price})
    console.log("entro en funcion",id,count,price);
  }
  useEffect(() => {
   // CartContext = setCartItemModel = (...[id, count, price]);
    console.log("carga de datos" ,id,count,price)
  }, [{purchasedLoad}]);

  
  
  return (
    <div className="count">
      <div className="stock">
        <button className="btn-rem" onClick={remStock} disabled={ count<= 0 ? true : null}><GoDiffRemoved size="3em"/></button>
        <div>
          <p>cantidad: {count}</p>
          <button className="btn-buy" onClick={purchasedLoad} disabled={ count<= 0 ? true : null} >agregar al carrito</button>
        </div>
        <button className="btn-add" onClick={addstock} disabled={ count>= stock ? true : null}><GoDiffAdded size="3em"/></button>
      </div>
    </div>  
  );
}

export default ItemCount;