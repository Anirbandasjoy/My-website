import React from 'react'




import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'




const Contac = () => {
  return (
    <div>
        <Navbar />
        <HeroImg2 heading="PROJECTS" text="some of my most recent work"/>
        <Work />
        <PricingCard />
        <Footer />

    </div>
  )
}

export default Contac