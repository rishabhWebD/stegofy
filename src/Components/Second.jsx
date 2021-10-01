import React from 'react'

import phn from '../svg/img2.svg'
import c1 from '../svg/c1.svg';
import c2 from '../svg/star 1.svg'
import c3 from '../svg/c3.svg'
import c4 from '../svg/c4.svg'

const Second = ()=>{
    return(
        <>

           <div className=" sec ">
               <img src={phn} className="phn"/>
           
            <div className="mt-5">
                <h1 >What are The Consumers Concerns <br/>During Shopping?</h1>
                <div class="row">
  <div class="col-sm-6 my-5">
    <div class="card">
   
       <div className="c">
           <img src={c1}/>
      <div class="card-body ">
         <h5 class="card-title ">What are the Ingredients?</h5>
          <p class="card-text">Does it contain ingredients that might trigger allergic reactions?</p>
        </div>
        </div>
    
    </div>
  </div>
  <div class="col-sm-6 my-5">
    <div class="card">
    <div className="c">
        <img src={c2}/>
      <div class="card-body">
      <h5 class="card-title">User Review/Rating?</h5>
        <p class="card-text">Past buyers, how was their experiences?</p>
       </div>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div className="c">
          <img src={c3}/>
      <div class="card-body">
      <h5 class="card-title">Is this Fake?</h5>
       <p class="card-text">I’m not sure whether this is original or fake…</p>
        </div>
        </div>
   
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
        <div className="c">
            <img src={c4}/>
      <div class="card-body">
       
      
       <h5 class="card-title">Where is this from?</h5>
       
        <p class="card-text">I’m not sure whether this is original or fake…</p>
       
      </div>
      </div>
    </div>
  </div>
</div>
              
            </div>
           
           
        
            </div>

            
                   
        </>
    )
}
export default Second