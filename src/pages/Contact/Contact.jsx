import './contact.scss'
import Navbar from '../../components/Navbar/Navbar'
import Home from './Home'
import Maps from './Maps'
import Footer from '../../components/Footer/Footer'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { useEffect, useState } from 'react'
 

const Contact = () => {

  const pathname = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])

  return (
    <div className="contact">
        <Navbar className="nav"/>
        <Home/>
        <Maps/>
        <Footer/>
    </div>
  )
}

export default Contact
