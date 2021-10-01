import React from 'react';
import a1 from '../svg/a1.svg'
import a2 from '../svg/a2.svg'
import a3 from '../svg/a3.svg'
import a4 from '../svg/a4.svg'
import a5 from '../svg/a5.svg'
const Fourth =()=>{
    return(
        <>
    <div className="container-fluid">
        <h1 className="text-center t">How it works</h1>
        <div className="g my-5 container-fluid">
            <div className="c1" >
            <img src={a1} className="i"/>
            <h1 className="text-center ">Our Technology</h1>
            <p className="text-center">
            Our non cloneable QR powered with blockchain technology enables a brand to secure the product by printing it on a product/package
            </p>
            </div>
            <div className="c2 " >
            <img src={a2} className="i1"/>
            <h1 className="text-center">Product Analysis</h1>
            <p className="text-center">
            Our non cloneable QR powered with blockchain technology enables a brand to secure the product by printing it on a product/package
            </p>
            </div>
            <div className="c3 mx-5" >
            <img src={a3} className="i2"/>
            <h1 className="text-center">Product Info Displayed</h1>
            <p className="text-center">
            Shoppers are able to verify the product authenticity and are exposed to various 
marketing experience
            </p>
            </div>
        </div>

        <div className="g">
            <div className="c4">
                <img src={a4} className="i4"/>
                <h1 className="text-center"> Verify Authenticity</h1>
                <p className="text-center">
                Our mobile app helps to verify product authenticity & claim. Digital receipts, warranty cards, exciting rewards & much more are included.
                </p>
            </div>
            <div className="c5">
                <img src={a5} className="i5"/>
                <h1 className="text-center"> Lorem Ipsum</h1>
                <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
            </div>
        </div>
    </div>
    </>
    )

}

export default Fourth