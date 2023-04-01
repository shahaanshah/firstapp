import Aos from "aos";
import React, { useState } from "react";
import { useEffect } from "react";
import Sdata from "./Sdata";

function HowItwork() {
  const [data, setData] = useState(Sdata);

  return (
    <>
      <section>
        <div className="work-container container ">
          <h1 className="main-heading text-center"> How Does Its work </h1>
          <div className="row px-5">
            {data.map((currelem) => {
              console.log(currelem);
              const { id, logo, title, info } = currelem;
              return (
                <>
                  <div className="col-12 col-lg-4 text-center work-container-div  ">
                    <i className={`font-style  ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="w-100 main-hero-para">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default HowItwork;
