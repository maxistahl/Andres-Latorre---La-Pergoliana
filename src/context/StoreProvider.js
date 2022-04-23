import react,{ createContext , useState} from "react";



// estructura inicial del carrito 
const cartModel={
  list:[],
  count:0,
  mount:0
};

// estructura que va a tener cada item del carrito
const cartItemModel={
  id:"",
  quantity:0,
  price:0
};


const CartContext = createContext(cartModel);

const StoreProvider = ({ children }) => {
  const [ cartArray, setCartArray ] = useState(cartModel);



    return (

        <CartContext.Provider value={[cartArray, setCartArray]}>
          {children}
        </CartContext.Provider>
      );
    

}

export default StoreProvider;
export {CartContext};

