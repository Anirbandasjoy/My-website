import React from 'react'


import AboutContent from '../components/AboutContent'


import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'




const Contac = () => {
  return (
    <div>
        <Navbar />
        <HeroImg2 heading="ABOUT" text="Im a friendly Front-end Developer."/>
        <AboutContent />
        <Footer />
    </div>
  )
}

export default Contac