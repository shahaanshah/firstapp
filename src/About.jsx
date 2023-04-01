import React, { useState, useEffect } from 'react'
import Aboutdata from './Aboutdata'
import Aos from 'aos'


function About() {

  const [about, setAbout] = useState(Aboutdata)

  useEffect(()=>{

    Aos.init({duration: 1000});
 
 
 
     },[])



  return (
    <>
      <section className="common-section our-service" id="about">
        <div className=" container mb-5  ">
          <div className="row ">

            <div className="col-12 col-lg-5 text-center mx-auto  mb-5 our-service-leftside-img"  data-aos="fade-right" >
              <img src="./images/office2.jpg " className="officeimg  " alt="aboutusIMg" />
            </div>
            <div className="col-12 col-lg-7 our-services-list hero-right-side" data-aos="fade-left">
            
              <h1 className="main-heading">How to use the App?</h1>
              {
                about.map((curr) => {
                  const { id, title, info,  } = curr
                  return (
                    <>
                      <div className="row our-services-info" key={id} >

                        <div className="col-1 our-services-number" >{id}</div> 
                        <div className="col-10 our-services-data">
                          <h2>{title}</h2>
                          <p className="main-hero-para">{info} </p>
                        </div>
                      </div>
                    </>
                  )
                })
              }
              <br />
              <button className="btn-styles ">learn more</button>
            </div>
          </div>
        </div>
      </section>


      {/* ==============================2nd=section============== */}


      <section className="common-section our-service">
        <div className=" container mb-5  ">
          <div className="row ">
           
            <div className="col-12 col-lg-7 order-2 order-lg-0  our-services-list hero-right-left">
              <h3 className="mini-title">
          
              </h3>
              <h1 className="main-heading">World class support is <br/>
              AVAILABLE 24/7 ?</h1>
              {
                about.map((curr) => {
                  const { id, title, info } = curr
                  return (
                    <>
                      <div className="row our-services-info" key={id} >
                        <div className="col-1 our-services-number">{id}</div>
                        <div className="col-10 our-services-data">
                          <h2>{title}</h2>
                          <p className="main-hero-para">{info} </p>
                        </div>
                      </div>
                    </>
                  )
                })
              }
              <br />
              <button className="btn-styles ">learn more</button>
            </div>
            <div className="col-12 col-lg-5 text-center mx-auto  mb-5 our-service-right-img" data-aos="zoom-in" data-aos-duration="2000">
              <img src="./images/payment6.jpg " className="officeimg  " alt="aboutusIMg" />
            </div>
          </div>
        </div>
      </section>



      {/* <section className="service-section our-service">
        <div className=" container ">
          <div className="row ">
            <div className="col-12 col-lg-7 order-2 order-lg-0 d-flex  justify-content-center   align-items-start flex-column our-services-list-lesft-side">
              <h3 className="mini-title">
                -- Supports in Any language
              </h3>
              <h1 className="main-heading">World class support is <br/>
              AVAILABLE 24/7 ?</h1>
              {
                about.map((curr) => {
                  const { id, title, info } = curr
                  return (
                    <>
                      <div className="row our-services-info" key={id} >
                        <div className="col-1 our-services-number">{id}</div>
                        <div className="col-10 our-services-data">
                          <h2>{title}</h2>
                          <p className="main-hero-para"> {`${info}` } </p>
                        </div>
                      </div>
                    </>
                  )
                })
              }
              <br />
              <button className="btn-styles ">learn more</button>
            </div>
            <div className="col-12 col-lg-5 mx-auto   mb-5  our-service-right-img">
              <img src="./images/payment6.jpg " className="officeimg " alt="aboutusIMg" />
            </div>
          </div>
        </div>
      </section> */}


    </>
  )
}



export default About;


