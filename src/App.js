import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Cart from "./ShoppingCart/ShoppingCart";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import commerce from "./Library/commerce";
import { useEffect, useState } from "react";
import Product from "./Products/product";

function App() {   
  const [productsList, setproductsList] = useState([]);
  const [cart, setCart] = useState([]);
  const fetchProducts = async()=>{
    const response = await commerce.products.list();
    setproductsList(response.data);
   // console.log(response.data);
  }
  const addToCart = async(proId,qty)=>{
    const response = await commerce.cart.add(proId,qty);
    setCart(response)
   // console.log(response);
  }
  const fetchCart=async()=>{
      setCart(await commerce.cart.retrieve())
  }
  const removeFromCart = async(prodId)=>{
    const response = await commerce.cart.remove(prodId);
    setCart(response)
    console.log(response);
  }
  useEffect(()=>{
    fetchProducts();
    fetchCart();
  },[])
  return (
    <BrowserRouter>
      <div className="App">
        <Header cart={cart} />
        <Routes>
            <Route exact path="/" element ={(<div>
              <Banner/> 
              <Product productsList={productsList} addToCart={addToCart}/>
              </div>)}/>
             
            <Route exact path="/cart" element ={<Cart cart={cart} removeFromCart={removeFromCart}/>}/>
        </Routes>
      </div>
    </BrowserRouter>  
  );
}

export default App;
