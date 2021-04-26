
import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Pricing from '../../components/Pricing/Pricing';
import {homeObjFour} from '../Homepage/Data';

const SignUp =()=> {
    return (
        <>
        
           <HeroSection {...homeObjFour}/>
           <Pricing />

          
        </>
    )
}

export default SignUp;
