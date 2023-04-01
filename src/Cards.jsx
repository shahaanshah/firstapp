import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom';



const Cards = (props) => {
    const [state, setstate] = useState()

    return (
        <>

            <div className="container">
                <div className="row float-start" >
                    <div className="col-md-4 col-6  g-md-5 g-0 mt-4 mx-md-auto mx-auto">
                      <div className="card  shadow bg-body rounded " style={{ width: "18rem" }}>
                            <img src={props.imgsr} className="card-img-top image-fluid " alt="servises images" height="160px" />
                            <div className="card-body">
                                <h5 className="card-title text-center "> {props.title}</h5>
                                <p className="card-text text-black-50 ">{props.catgory} </p>
                                <NavLink to={props.ulink} className="btn shadow bg-body ">Go somewhere</NavLink>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            
  

        </>
    )
}



export default Cards;

