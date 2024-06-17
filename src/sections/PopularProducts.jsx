import React from 'react'
import { products } from '../constants'
import { ShoeCard } from '../components'
import PopularProductCard from '../components/PopularProductCard'

const PopularProducts = () => {

  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className='flex flex-col gap-5'>
        <h1 className='font-palanquin text-4xl font-bold'>Our <span className='text-coral-red inline-block mt-3'>Popular</span> Products</h1>
        <p className='font-montserrat text-slate-gray 
        lg:max-w-lg mt-2'>
        Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value
        </p>
        <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
          {products.map((product, index) => (
            <div key={index}>
              <PopularProductCard
                imgURL={product.imgURL}
                name={product.name}
                price={product.price}
              />
            </div>
          ))}          
        </div>
      </div>
    </section>
  )
}

export default PopularProducts