import React from 'react'
import Courselists from '../components/Courselists'

import Slider from '../components/Slider'
import Welcome from '../components/Welcome'
import WhyChoose from '../components/WhyChoose'
const Home = () => {
  return (
    <>
    <div>
        <Slider/>
    </div>
    {/* style={{width:'93vw',height:'30vh',margin:'30px',boxShadow: '2px 4px 10px 1px rgba(201, 201, 201, 0.47)'}} */}
    <div >
        <Welcome/>
    </div>
    <div >
        <WhyChoose/>
    </div>
    <div >
        <Courselists/>
    </div>
    </>
  )
}

export default Home