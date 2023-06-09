import './index.scss'
import Coach from '../../components/Coach/Coach'
import CoachHome from '../../components/Coach/CoachHome'
import Intro from '../../components/Coach/Intro'
import Navbar from '../../components/Navbar/Navbar'
import Bottom from '../../components/Bottom/Bottom'
import Footer from '../../components/Footer/Footer'
import Next from '../../components/Next/Next'
import { useEffect } from 'react'
import { useLocation ,Link} from 'react-router-dom'

const Coaches = () => {
  const pathname = useLocation();
  useEffect(()=>{
      window.scrollTo(0,0);
  },[pathname])
  return (
    <div className='Coaches'>
      <Navbar/>
      <CoachHome/>
      <Intro/>
      <Coach/>
      <Link to="/contact" style={{textDecoration:"none"}}>
       <Next name="CONTACT"/>
       </Link>
      <Footer/>
     </div>
  )
}

export default Coaches
