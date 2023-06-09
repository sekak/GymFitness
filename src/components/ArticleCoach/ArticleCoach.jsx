import './articleCoach.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const ArticleCoach = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
}, [])
  return (
    <div className='ArticleCoach'>
          {/* <img src="https://progym.ma/wp-content/uploads/2021/04/IMG5912-scaled.jpg" alt="" /> */}
         <div className="img">
         <div className='textIntro' data-aos="fade-up"  >
                <h1 className='IntroTitle'  >COME MEET OUR COACHES.</h1>
                <h4 className='IntroPara' data-aos="fade-up" >Selected with the greatest care for their experience as a sports coach but also for their qualities and specialties as high-level athletes, our coaches present a wide variety of profiles and all share the philosophy of the room: competence, availability.</h4>
         </div>
         </div>
     </div>
  )
}

export default ArticleCoach