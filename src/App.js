import { useState } from 'react';
import './App.scss';
import UserContext from './components/context/createContext';
import Coaches from './pages/Coach/Coaches';
import HomePage from './pages/Homepage/HomePage';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function App() {

  const [showw, setshow] = useState(true)
  
     return (
      <UserContext.Provider className='App' value={{showw,setshow}}>
        {/* <HomePage/> */}
        <Coaches/>
      </UserContext.Provider>  
       
 
  )
}

export default App


 




 

 