import React, { useContext, useState } from 'react'
import Navbar from "../../components/Navbar/Navbar"
import Article from "../../components/Articl/Article"
import Home from "../../components/Home/Home"
import ArticleCoach from '../../components/ArticleCoach/ArticleCoach'
import Footer from '../../components/Footer/Footer'
import Next from '../../components/Next/Next'
import FeedBack from '../../components/FeedBack/FeedBack'
import { Link } from "react-router-dom"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function HomePage() {
   const pathname = useLocation();
  useEffect(()=>{
      window.scrollTo(0,0);
  },[pathname])
    
  return (
    
          <>
            <Navbar />
            <Home />
            <Article />
            <ArticleCoach />
            <FeedBack />
            <Link to="/coaches" style={{textDecoration:"none"}}>
              <Next name="COACHES" />
            </Link>
            <Footer />
          </>
       
  )
}

export default HomePage


