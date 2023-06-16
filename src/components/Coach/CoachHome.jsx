import "./coachHome.scss"
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

AOS.init();

const CoachHome = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
}, [])
  return (
    <div className='coachHome'>
      <div className="wrapper">
        <h1 data-aos="zoom-out" data-aos-duration={2000}>COACHS</h1>
      </div>
    </div>
  )
}

export default CoachHome
