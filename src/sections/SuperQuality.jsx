import React from 'react'
import { Button } from '../components'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id="about-us" className='flex justify-between w-full max-container max-lg:flex-col gap-10 items-center'>
      <div className='flex flex-1 flex-col'>
        <h1 className='text-4xl font-palanquin font-bold capitalize lg:max-w-lg'>We Provide You <span className='text-coral-red'>Super Quality</span> Shoes</h1>
        <p className='mt-4 lg:max-w-lg info-text'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className='mt-6 lg:max-w-lg info-text'>Our dedication to detail and excellence ensures your satisfaction</p>
        <div className='mt-11'>
          <Button label="View details" iconURL={null}/>
        </div>
      </div>
      <div  className='flex flex-1 justify-center'>
        <img src={shoe8} width={570} height={522} className='object-contain'></img>
      </div>
    </section>
  )
}

export default SuperQuality