import "./ShoppingCart.css"
import React from 'react';
import adv from './exclusive.avif';
import productimg from '../Products/product1.jpg';

function ShoppingCart({cart,removeFromCart}) {
  return (
    <div className='Checkout'>
      <div className='Checkout_Left'>
        <img src={adv} alt='Advertisement' className='Checkoutadd'/>
        <div>
            <h3>Hello User</h3>
            <h2 className='checkout_title'>Your Shopping Basket</h2>
            {
            cart.line_items?.map(item=>{
              return <div className='CheckoutProduct' key={item.id}>
                  <img src={item.image?.url} className='CheckoutProduct_img'/>
                    <div className='CheckoutProduct_info'>
                      <p className='CheckoutProduct_title'>{item.name}</p>
                      <p className='CheckoutProduct_Price'><strong>{item.price.formatted_with_symbol} * {item.quantity} = ₹ {item.price.raw*item.quantity}</strong></p>
                      <button onClick={()=>removeFromCart(item.id)}>Remove from Cart</button>
                    </div>
                  </div>
              })
            }
            
            
        </div>
      </div>
      <div className='Checkout_Right'>
        <div className='Subtotal'>
          <p>Subtotal ({cart.total_items } Items): <strong>{cart?.subtotal?.formatted_with_symbol} </strong> </p>
          <button>Proceed to Payment</button>
        </div>
      </div>
  </div>
  )
}

export default ShoppingCart