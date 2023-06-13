import React from 'react'
import Coach from '../../components/Coach/Coach'
import CoachHome from '../../components/Coach/CoachHome'
import Intro from '../../components/Coach/Intro'
import Navbar from '../../components/Navbar/Navbar'
import Bottom from '../../components/Bottom/Bottom'
import Footer from '../../components/Footer/Footer'

const Coaches = () => {
  
  return (
    <div style={{backgroundColor:"#000"}}>
      <Navbar/>
      <CoachHome/>
      <Intro/>
      <Coach/>
      <Footer/>
     </div>
  )
}

export default Coaches
