import React from 'react'
import ProductCard from '../components/ProductCard';
import useTitle from '../hooks/useTitle';


const Home = () => {
  useTitle("Home");

  const products = [
    {"id": 1, "name": "Vegitos Earings", "price": 100, "image": "/assets/vegito_earings.jpg" },
    {"id": 2, "name": "Vegito-energy", "price": 100, "image": "/assets/vegito-energy.jpeg"},
    {"id": 3, "name": "Vegitos kamehame", "price": 100, "image": "/assets/VegitoFinalKamehameha.gif" },
    {"id": 5, "name": "Vegito-sword", "price": 100, "image": "/assets/spiritual_sword.jpg"},
    {"id": 4, "name": "Spiritual energy", "price": 50, "image": "/assets/spiritual_energy.jpeg"},
    {"id": 6, "name": "X2 Spiritual energy", "price": 100, "image": "/assets/spiritual_energy.jpeg"},
    {"id": 7, "name": "Vegito's punch", "price": 150, "image": "/assets/vegito's attack.gif"},
    {"id": 8, "name": "Vegito's kick", "price": 150, "image": "/assets/vegito's kick.gif"},
    {"id": 9, "name": "Vegito's Advanced Level up", "price": 200, "image": "/assets/vegito's advanced state.gif"},
  ]

  return (
    <main>
      <section className='products'>
        { products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      
      </section>
    </main>
  )
}

export default Home