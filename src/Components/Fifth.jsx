import React from 'react';
import mob from '../svg/Group 171.svg'
import v2 from '../svg/Vector(1).svg'
import v3 from '../svg/Vector(2).svg'
import v1 from '../svg/Vector.svg'
const Fifth = ()=>{
    return(
        <>
             <div className="pix mt-5">
                 <img src={mob} className="ip"/>
                 <div className="inner">
                     <h1 className="t6">
                     Why choose <span className="ste">Stegofy?</span>
                     </h1>
                     <p className="t2">
                     Stegofy platform is the secure, reliable and convenient one stop solution for all your brand and productmanagement needs

                     </p>
                     <button className="btn btn-primary ">Learn More</button>
                     <div className="fle mt-5">
                     <img src={v1}/>
                    <div className="ml-3 mt-2">
                    <h4 className="" >Low Cost</h4>
                    <p className="t4">Stegofy platform stores all uploaded business and product information in a secure, tamper proof and fraud resistant format
                    </p>
                    </div>
                 </div>
                 <div className="fle mt-5">
                     <img src={v2}/>
                    <div className="ml-3 mt-2">
                    <h4>Secure</h4>
                    <p className="t4">Stegofy platform stores all uploaded business and product information in a secure, tamper proof and fraud resistant format
</p>
                    </div>
                 </div>
                 <div className="fle mt-5">
                     <img src={v3}/>
                    <div className="ml-3 mt-2">
                    <h4>Customer Experiance</h4>
                    <p className="t4">Stegofy platform stores all uploaded business and product information in a secure, tamper proof and fraud resistant format
</p>
                    </div>
                 </div>
                 </div>
                 
               
             </div>
        </>
    )
}


export default Fifth;