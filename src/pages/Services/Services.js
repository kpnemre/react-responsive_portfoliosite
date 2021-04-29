
import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Pricing from '../../components/Pricing/Pricing';
import {homeObjTwo} from '../Homepage/Data';
import useDocumentTitle from '../../components/DocumentTitle/useDocumentTitle';



const Services =()=> {
    useDocumentTitle('Services')

    return (
        <>
        
           <Pricing />
           <HeroSection {...homeObjTwo}/>

          
        </>
    )
}

export default Services;
