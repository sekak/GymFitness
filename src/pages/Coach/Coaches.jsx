import React from 'react'
import Coach from '../../components/Coach/Coach'
import CoachHome from '../../components/Coach/CoachHome'
import Intro from '../../components/Coach/Intro'
import Navbar from '../../components/Navbar/Navbar'

const Coaches = () => {
  return (
    <>
      <Navbar/>
      <CoachHome/>
      <Intro/>
      <Coach/>
     </>
  )
}

export default Coaches
