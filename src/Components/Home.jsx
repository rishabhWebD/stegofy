import React from 'react';
import main from '../svg/Group/main.svg';
import circle from '../svg/Group/Group 69.svg';


import img1 from '../svg/Group/Vector.svg'
import './Home.css'

const Home = ()=>{

    return (
        <>    <div className="container-fluid">
              <div className="row mt-5">
                  <div className="col-lg-6 col-md-6 col-12 mt-5">
                      <h1 className="h">Bring <span className="auth">Authencity</span> To </h1>
                      <h1 className="h"> Your Products</h1>
                    <div className="txt">
                      <span className="para">
                          Securing the genunity of your brand and 
                      </span>
                    <span className="para1">
                    helping consumer buy smartly
                    </span>
                    </div>
                      <button className="btn btn-primary bt1"><h5>Request demo-</h5></button>
                  </div>
                  <div className="col-5 over">
                      <img src={img1} className="img1"/>
                      <img src={main} className="img2"/>
                      <img src={circle} className="img3"/>
                  </div>
              </div>
              
</div>
            <br/>
            
           


                  

           
        </>
    )
}

export default Home;