import { useState } from 'react';
import './App.scss';
import UserContext from './components/context/createContext';
import Coaches from './pages/Coach/Coaches';
import HomePage from './pages/Homepage/HomePage';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function App() {

  const [showw, setshow] = useState(false)
  
     return (
       <UserContext.Provider className='App' value={{showw,setshow}}>
        {/* <HomePage/> */}
        <Coaches/>
      </UserContext.Provider>  
        // <Swiper
        // centeredSlides
        // spaceBetween={50}
        // slidesPerView="auto"
        // className='swip'
         
        // >
        //   <SwiperSlide className='SwiperSlide'>1111</SwiperSlide>
        //   <SwiperSlide className='SwiperSlide'>2222</SwiperSlide>
        //   <SwiperSlide className='SwiperSlide'>3333</SwiperSlide>
        //   <SwiperSlide className='SwiperSlide'>4444</SwiperSlide>
        // </Swiper> 
      // <>

      // </>
  )
}

export default App


 




 

 