import './intro.scss'

import img from './img.jpg'
const Intro = () => {
  return (
    <div className='intro'>
         <img src={img} alt="" />
         <div className='textIntro'>
                <h1 className='IntroTitle'>COME MEET OUR COACHES.</h1>
                <h4 className='IntroPara'>Selected with the greatest care for their experience as a sports coach but also for their qualities and specialties as high-level athletes, our coaches present a wide variety of profiles and all share the philosophy of the room: competence, availability.</h4>
         </div>
    </div>
  )
}

export default Intro
