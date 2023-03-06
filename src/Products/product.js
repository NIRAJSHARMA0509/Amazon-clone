import "./product.css"
import React from 'react'
import product1 from "./product1.jpg"

function Product({productsList,addToCart}) {
  return (
    <div className='Product_Wrap'>
      {
        productsList.map((items)=>{
          return <div className="Product" key={items.id}>
          <img className='productimg' src={items.image?.url}/> 
          <h3>{items.name}</h3>
          <p>{items.price.formatted_with_symbol}</p>
          <button onClick={()=>addToCart(items.id,1)}>Add to Cart</button>
        </div>
        })
      }
        {/* <div className="Product">
          <img className='productimg' src={product1}/> 
          <h3>ProductName</h3>
          <p>Product Price</p>
          <button>Add to Cart</button>
        </div>
        <div className="Product">
          <img className='productimg' src={product1}/> 
          <h3>ProductName</h3>
          <p>Product Price</p>
          <button>Add to Cart</button>
        </div>
        <div className="Product">
          <img className='productimg' src={product1}/> 
          <h3>ProductName</h3>
          <p>Product Price</p>
          <button>Add to Cart</button>
        </div>
        <div className="Product">
          <img className='productimg' src={product1}/> 
          <h3>ProductName</h3>
          <p>Product Price</p>
          <button>Add to Cart</button>
        </div>
        <div className="Product">
          <img className='productimg' src={product1}/> 
          <h3>ProductName</h3>
          <p>Product Price</p>
          <button>Add to Cart</button>
        </div>       */}
      </div>
  )
}

export default Product