import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Banner.css"
import React from 'react'
import reactLogo1 from "./banner1.jpg"
import reactLogo2 from "./banner2.jpg"
import reactLogo3 from "./banner3.jpg"
import reactLogo4 from "./banner4.jpg"

function Banner() {
  return (
    <div>
    <Carousel showThumbs={false} autoPlay={true} transitionTime={3} infiniteLoop={true} showStatus={false}>
      
                <div className='Banner'>
                    <img className="Bannerimg" src={reactLogo1} />
                    
                </div>
                <div className='Banner'>
                    <img  className="Bannerimg"  src={reactLogo2} />
                    
                </div>
                <div className='Banner'>
                    <img  className="Bannerimg"  src={reactLogo3} />
                </div>
                <div className='Banner'>
                    <img  className="Bannerimg"  src={reactLogo4} />
                </div>
            </Carousel>
            
            </div>
    // <div className='Banner'>
    //     <img src={reactLogo}/>
    // </div>
  )
}

export default Banner