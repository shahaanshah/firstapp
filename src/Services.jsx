import React, { useState } from 'react'
import Cards from "./Cards"
import Sdata from "./Sdata"
// import ServicesApi from "./ServicesApi"


const Services = ({ServicesApi}) => {
      const [serviceData,  setServiceData] = useState(ServicesApi)
      console.log(ServicesApi)

      return (
            <>
                  <section className="service-main-container " id="services">
                        <div className="container severice-container">
                              <div className="main-heading text-center ">
                                    <h1> How To Send Money </h1>

                                    {/* <div className="row ">
                                          {serviceData.map((currelem) => {
                                                const { id, logo, title, info } = currelem
                                                return (
                                                      <>
                                                            <div className="col-sm-6 col-11 col-lg-4 col-xxl-4 d-flex    align-items-start flex-column work-container-div mx-auto " key={id}>
                                                                  <i className={` font-style ${logo}`}></i>
                                                                  <h2 className="sub-heading">{title}</h2>
                                                                  <p className="w-100 main-hero-para ">{info} <span> <a href="#">...read More</a></span> </p>
                                                            </div>
                                                      </>
                                                )
                                          })}

                                    </div> */}

                              </div>

                        </div>
                  </section>
            </>

      )
}

{/* <div><h1 className="text-center">  this is my Services page
      </h1>
    </div>
    {user.map((val,index)=>{
      
     return(
           <Cards key={index} 
          imgsr={val.imgsrc}
          title={val.title}
          catgory={val.paragraph}
          ulink={val.link} />
    ) 

    })}  */}
{/* <Cards title={Sdata[0].title}
          catgory={Sdata[0].paragraph}
         
    />
    <Cards title={Sdata[1].title}
          catgory={Sdata[1].paragraph}
           
    />
    <Cards title={Sdata[2].title}
          catgory={Sdata[2].paragraph}
           
    />
    <Cards title={Sdata[3].title}
          catgory={Sdata[3].paragraph}
           
    />
    <Cards title={Sdata[3].title}
          catgory={Sdata[3].paragraph}
           
    />  <Cards title={Sdata[3].title}
          catgory={Sdata[3].paragraph}
           
    />  <Cards title={Sdata[3].title}
          catgory={Sdata[3].paragraph}
           
    />
      <Cards title={Sdata[3].title}
          catgory={Sdata[3].paragraph}
           
    /> */}



export default Services;


