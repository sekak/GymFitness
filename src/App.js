import { createContext, useContext, useState } from 'react';
import './App.scss';
import Article from './components/Articl/Article';
import Bottom from './components/Bottom/Bottom';
import Coach from './components/Coach/Coach';
import UserContext from './components/context/createContext';
 import Features from './components/Features/Features';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';



import React from 'react'

function App() {
  const [showw,setshow] = useState(false)
  const [a,seta] = useState(false)
  console.log("app",showw)
    return (
    <UserContext.Provider className='App' value={{showw,setshow}}>
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
        <Features/>
          </>
        )
        }
    </UserContext.Provider>  
  )
}

export default App


 




 

 