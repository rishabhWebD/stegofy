import React from 'react'
import logof from '../svg/Group 31.svg'

const Footer = ()=>{
    return(
        <> 
<footer class="text-white body-font ft mt-5">
  <div class="container ft1 py-24 me flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img src={logof}/>
        
      </a>
      <p class="mt-2 ml-0 pl-0 text-sm text-gray lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <span className="inline-flex mc sm:mt-0 mt-2 ml-0 ">
      <a class="ml-0 text-white">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a> 
        <a class="ml-3 text-white">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-white">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-10 h-10" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
        <a class="text-white">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        
        
        
      </span>
    </div>
    
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest tt text-lg mb-3">Company</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:text-gray-800">Blog</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Careers</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">About Us</a>
          </li>
          
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest tt text-lg mb-3">Product</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:text-white">Watch Demo</a>
          </li>
          <li>
            <a class="text-white hover:text-white">Term of Service</a>
          </li>
          <li>
            <a class="text-white hover:text-white">Privacy Policy</a>
          </li>
          
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-lg tt mb-3">Help & Support</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:text-white">Report Bug</a>
          </li>
          <li>
            <a class="text-white hover:text-white">Share Feedback</a>
          </li>
          <li>
            <a class="text-white hover:text-white">Contact Support</a>
          </li>
        </nav>
      </div>
      <div>
      
      </div>
    </div>
  </div>
  <hr/>
  <div class="ft">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-white text-sm text-center sm:text-center">Copyright © 2020. Stegofy All rights reserved | Privacy policy | Refund and Cancellation Policy | Terms of Use | Cookies | Sitemap
        <a href="#" rel="noopener noreferrer" class="text-white-150 ml-1" target="_blank">@knyttneve</a>
      </p>
      
    </div>
  </div>
</footer>
        </>
    )
}

export default Footer;