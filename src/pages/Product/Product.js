
import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Pricing from '../../components/Pricing/Pricing';
import {homeObjOne, homeObjTwo} from '../Homepage/Data';


const Product =()=> {
    return (
        <>
        
           <HeroSection {...homeObjOne}/>
           <Pricing />
           <HeroSection {...homeObjTwo}/>


          
        </>
    )
}

export default Product;
