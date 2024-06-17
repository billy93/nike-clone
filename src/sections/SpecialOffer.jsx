import React from 'react'
import { offer } from '../assets/images'
import { Button } from '../components'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section id="special-offer">
      <div className='flex justify-between items-center gap-10 max-container'>
        <div className='flex-1'>
          <img src={offer} width={773} height={687}/>
        </div>
        <div className='flex-1 flex-col'>
          <h1 className='text-4xl font-palanquin font-bold'><span className='text-coral-red'>Special</span> Offer</h1>
          <p className='mt-4 info-text'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
          <p className='mt-6 info-text'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
          <div className='flex mt-11 flex-wrap gap-4'>
            <Button label="Shop now" iconURL={arrowRight}/>
            
            <button class="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      bg-white text-slate-gray border-slate-gray rounded-full undefined">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer