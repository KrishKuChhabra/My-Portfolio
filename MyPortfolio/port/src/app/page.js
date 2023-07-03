import React from 'react'
import Navbar from './Component/Navbar'
import Herosection from './Component/Herosection'
import About from './about/page'
import Portfolio from './Portfolio/page'
import Skill from './skill/page'
import Contact from './contact/page'

const page = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <About />
      <Portfolio />
      <Skill />
     <Contact />
    </div>
  )
}

export default page
