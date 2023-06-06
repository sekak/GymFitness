import { createContext, useContext, useState } from 'react';
import './App.scss';
import Article from './components/Articl/Article';
import Bottom from './components/Bottom/Bottom';
import Coach from './components/Coach/Coach';
import UserContext from './components/context/createContext';
 import Features from './components/Features/Features';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';


function App() {
 
  const context = useContext(UserContext)
  
    console.log(context)
    
   return (
    <div className="App">
         <h1>{context}</h1>
       <Navbar />
      <Home />
      <Article/>

        <Features />  
      <Coach />
      <Bottom /> 
      
    
    </div>
  );
}





 

export default App;