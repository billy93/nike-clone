import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgURL} alt="Nike Air Jordan" className='w-[282px] h-[282px]'></img>
        <div className='flex mt-8'>
            <img src={star} alt="rating icon" width={24} height={24}/>
            <p>(4.5)</p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
        <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>{price}</p>
    </div>
  )
}

export default PopularProductCard