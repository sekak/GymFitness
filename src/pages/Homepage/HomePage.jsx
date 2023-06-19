import React, { useContext, useState } from 'react'
import Navbar from "../../components/Navbar/Navbar"
import Article from "../../components/Articl/Article"
import Home from "../../components/Home/Home"
import Coach from "../../components/Coach/Coach"
import UserContext from '../../components/context/createContext'
import ArticleCoach from '../../components/ArticleCoach/ArticleCoach'
import Footer from '../../components/Footer/Footer'
import Next from '../../components/Next/Next'
import FeedBack from '../../components/FeedBack/FeedBack'
import { Link } from "react-router-dom"

function HomePage() {
  const { showw, setshow } = useContext(UserContext);

  return (
    <>
      {showw ? (
        <>
          <Navbar />
          <Home />
        </>
      )
        : (
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
    </>
  )
}

export default HomePage


