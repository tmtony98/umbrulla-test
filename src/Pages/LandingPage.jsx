import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Brands from '../components/Brands'
import Services from '../components/Services'
import Services2 from '../components/Services2'
import Destination from '../components/Destination'
import TravelPoint from '../components/TravelPoint'
import Features from '../components/Features'
import Footer from '../components/Footer'
import HeroSection2 from '../components/HeroSection2'


function LandingPage() {
  return (
    <div>
     <Header/>
     <HeroSection2/>
     {/* <HeroSection/> */}
     <Brands/>

     <Services2/>
     <Destination/>
     <TravelPoint/>
     <Features/>
     <Footer/>
    </div>
  )
}

export default LandingPage
