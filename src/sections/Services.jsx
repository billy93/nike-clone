import React from 'react'
import { services } from '../constants'

const Services = () => {
  return (
    <section id="services">
      <div className="max-container flex justify-center flex-wrap gap-9">
        {services.map((service, index) => 
          <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
            <div className='w-11 h-11 flex justify-center items-center bg-coral-red  rounded-full'>
              <img className="rounded-full" src={service.imgURL} width={24} height={24}/>
            </div>
            <p className='mt-5 font-palanquin text-3xl leading-normal font-bold'>{service.label}</p>
            <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>{service.subtext}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Services