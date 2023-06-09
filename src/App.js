import { useState } from 'react';
import './App.scss';
import UserContext from './components/context/createContext';
import Coaches from './pages/Coach/Coaches';
import HomePage from './pages/Homepage/HomePage';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './pages/Contact/Contact';
import DetailsCoach from './pages/detailsCoach/DetailsCoach';

function App() {

  const [showw, setshow] = useState(false)

  return (
    <>
      <Router>
        <Switch>
        <UserContext.Provider className='App' value={{ showw, setshow }}>
          <Route exact path='/'><HomePage/></Route>
          <Route exact path='/coaches'><Coaches/></Route>
          <Route exact path='/contact'><Contact/></Route>
          <Route exact path='/details'><DetailsCoach/></Route>
          </UserContext.Provider>
        </Switch>
      </Router>
    </>
  )
}

export default App









