import React from 'react'
import CartCard from '../components/CartCard';
import useTitle from '../hooks/useTitle';
import { useCart } from '../context/CartContext';
import '../App.css'

const Cart = () => {
  const { total, cartList } = useCart();
  useTitle("Cart");
  


  return (
    <main>
      <section className='cart'>
        <h1>Cart Items: {cartList.length} / ${total}</h1>
        { cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}

export default Cart