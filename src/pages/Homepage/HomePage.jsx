import React, { useContext, useState } from 'react'
import Navbar from "../../components/Navbar/Navbar"
import Article from "../../components/Articl/Article"
import Home from "../../components/Home/Home"
import Coach from "../../components/Coach/Coach"
import UserContext from '../../components/context/createContext'

function HomePage() {

  const {showw,setshow} = useContext(UserContext);

  return (
    <>
     { showw ? (
        <>
        <Navbar/>
        <Home/>
        </>
        ) 
        : ( 
          <>
           <Navbar/>
        <Home/>
        <Article/>
        <Coach/>
        {/* <Features/> */}
          </>
        )
        }
    </>
   )
}

export default HomePage


 