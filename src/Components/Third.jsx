import React from 'react'
import b1 from '../svg/b1.svg'
import b2 from '../svg/b2.svg'
import b3 from '../svg/b3.svg'
import b4 from '../svg/b4.svg'

const Half =()=>{
    return(
        <>
           <h1 className="text-center t mt-5">
           One Scan to Trigger Consumers 360° 
           </h1>
           <h1 className="text-center t">Product Experiences</h1>

           <h6 className="text-center t5">With Stegofy solution, your product packaging and labelling no longer</h6>
           <h6 className="text-center t5">provides a static content and Making your consumers choose your product </h6>
           <h6 className="text-center t5">over a competitors.</h6>   

           
           <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    
      
    
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg bg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={b1} alt="content"/>
          
          <h1 class="text-lg text-gray-900 font-medium title-font mb-4 text-center">Anti-Counterfeit</h1>
          <p class="leading-relaxed text-base text-center">Every product unit contains a unique code fortified with Blockchai technology, reassuring customers the authenticity of your products.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg bg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={b2} alt="content"/>
          
          <h1 class="text-lg text-gray-900 font-medium title-font mb-4 text-center">Marketing</h1>
          <p class="leading-relaxed text-base text-center">Now your product is able to become the entry point for various marketing activities.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg bg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={b3} alt="content"/>
          
          <h1 class="text-lg text-gray-900 font-medium title-font mb-4 text-center">Product Transparency</h1>
          <p class="leading-relaxed text-base text-center">Share more about your product’s origin and ingredients to win over your consumers’ hearts</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg bg" >
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={b4} alt="content"/>
       
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4 text-center">Rating & Testimony</h2>
          <p class="leading-relaxed text-base text-center">Your consumers are more likely to buy your product once they discover how many people love it.</p>
        </div>
      </div>
    </div>
  </div>
</section>
                     

        </>
    )
}


export default Half