import React, { useState } from 'react'
import Videodata from './Videodata'
import Sdata from "./Sdata";

const Video = ({ }) => {
  const [data, setData] = useState()

  console.log(Videodata)

  return (
    <>
      <div className='contaner'>
        <div className="row">
          {
            Videodata.map((data) => {

              const { title, id, Views, time, img } = data

              return (
                <>
                  <div className="card" style={{ width: "30rem", height: "30rem" }}>
                    <img className="card-img-top" src={img} alt="Card image cap" />
                    <div className="card-body">
                      <h4 className="card-title">{title}</h4>
                      <div className="row our-services-info" key={id} >

                        <div className="col-4 our-services-data">
                          <h4 className="card-text"> {Views}</h4>

                        </div>
                        <div className="col-6 our-services-number" >
                          <h4 className="timw">{time}

                          </h4>
                        </div>

                      </div>
                      <a href="#" className="btn btn-primary"> add video</a>
                    </div>
                  </div>
                </>

              )
            })
          }


        </div>




      </div>



    </>
  )
}



export default Video