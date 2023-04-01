import React, { useState } from 'react'
import Nav from './Nav';
import Header from './Header'

import Contact from './Contact';
import About from './About';
import Services from './Services';
import HowItWork from './HowItwork'
import Footer from './Footer';



const Home = () => {
    

 
    //  const [mode, setMode]= useState('light')

    //  const togglemode =()=>{
    //      if(mode ==='light')
    //     {
    //         setMode('dark')
            
    //     }else{
    //         setMode('light')
    //     }



    //  }

    return (

        <>
             
      
            <Nav/>
            <Header/>
            <HowItWork/>
            <About/>
            <Services/>
            <Contact/>
            <Footer/>  
        
        

        </>
    )
}
export default Home;