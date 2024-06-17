import React from 'react'
import { footerLogo } from '../assets/images'
import { copyrightSign, facebook, instagram, twitter } from '../assets/icons'

const Footer = () => {
  return (
    <footer class="max-container">
      <div class="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div class="flex flex-col items-start"><a href="/"><img src={footerLogo} alt="logo" width="150" height="46" class="m-0"/></a>
          <p class="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
          <div class="flex items-center gap-5 mt-8">
            <div class="flex justify-center items-center w-12 h-12 bg-white rounded-full"><img src={facebook} alt="facebook logo" width="24" height="24"/></div>
            <div class="flex justify-center items-center w-12 h-12 bg-white rounded-full"><img src={twitter} alt="twitter logo" width="24" height="24"/></div>
            <div class="flex justify-center items-center w-12 h-12 bg-white rounded-full"><img src={instagram} alt="instagram logo" width="24" height="24"/></div>
          </div>
        </div>
        <div class="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          <div>
            <h4 class="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">Products</h4>
            <ul>
              <li class="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"><a href="/">Air Force 1</a></li>
              <li class="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"><a href="/">Air Max 1</a></li>
              <li class="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"><a href="/">Air Jordan 1</a></li>
              <li class="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"><a href="/">Air Force 2</a></li>
              <li class="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"><a href="/">Nike Waffle Racer</a></li>
              <li class="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"><a href="/">Nike Cortez</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">Help</h4>
            <ul>
              <li class="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"><a href="/">About us</a></li>
              <li class="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"><a href="/">FAQs</a></li>
              <li class="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"><a href="/">How it works</a></li>
              <li class="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"><a href="/">Privacy policy</a></li>
              <li class="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"><a href="/">Payment policy</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">Get in touch</h4>
            <ul>
              <li class="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"><a href="mailto:customer@nike.com">customer@nike.com</a></li>
              <li class="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"><a href="tel:+92554862354">+92554862354</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div class="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="copyright sign" width="20" height="20" class="rounded-full m-0"/><p>Copyright. All rights reserved.</p></div>
          <p class="font-montserrat cursor-pointer">Terms &amp; Conditions</p>
        </div>
    </footer>
  )
}

export default Footer