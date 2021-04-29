import React from 'react';
import './HeroSection.css';
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const HeroSection = ({
    lightBg,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,

}) => {

// const [lightBg, setLightBg] = useState(true)
    return (
        <>
            <div className={lightBg ? "home__hero-section" : "home__hero-section darkBg"} >
               <div className="container">
                   <div className="row home__home-row">
                       <div className="col">
                           <div className="home__hero-text-wrapper">
                               <div className="top-line">

                               <h1 className={lightText ?"heading" : "heading-dark"}>{headline}</h1>
                               </div>
                               <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                <Link to='/sign-up'>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {buttonLabel}
                  </Button>
                </Link>
                           </div>
                       </div>
                   <div className="col">
                   <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img' />
              </div>
                   </div>
                   </div>
               </div>
            </div>
        </>
    )
}

export default HeroSection
