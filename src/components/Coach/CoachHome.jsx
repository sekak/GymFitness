import "./coachHome.scss"
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

AOS.init();

const CoachHome = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
}, [])
  return (
    <div className='coachHome'>
      <div className="wrapper">
        <h1 data-aos="fade-up"  >COACHS</h1>
      </div>
    </div>
  )
}

export default CoachHome
