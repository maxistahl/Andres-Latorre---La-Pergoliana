import React,{useState} from "react";
import { GoDiffAdded,GoDiffRemoved } from "react-icons/go";

const ItemCount = () => {
    
    const [count, setCount] = useState(0);
    const stock=5;
    const addstock = () => {
        setCount(count +1)
    };

    const remstock = () => {
        setCount(count -1)
    };

  return (
    <>
      <div className="stock">
        <button className="btn-rem" onClick={remstock} disabled={ count<= 0 ? true : null}><GoDiffRemoved size="3em"/></button>
        <p>stock: {count}</p>
        <button className="btn-add" onClick={addstock} disabled={ count>=stock ? true : null}><GoDiffAdded size="3em"/></button>
      </div>
      {/* 
      <div>
        </div><button className="btn-buy" onClick={funcion que va al context}></button>
      </div>
      */}
    </>
  );
}

export default ItemCount;