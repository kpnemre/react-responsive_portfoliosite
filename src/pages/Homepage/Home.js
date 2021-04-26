import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Pricing from '../../components/Pricing/Pricing';
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './Data.js';

const Home =()=> {
    return (
        <>
           <HeroSection {...homeObjOne}/>
           <HeroSection {...homeObjTwo}/>
           <Pricing />
           <HeroSection {...homeObjThree}/>
           <HeroSection {...homeObjFour}/>
        </>
    )
}

export default Home;
