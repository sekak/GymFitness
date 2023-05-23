import './coach.scss'
  import { RxTwitterLogo } from "react-icons/rx";
import { SlSocialFacebook } from "react-icons/sl";
import { RxInstagramLogo } from "react-icons/rx";

const Coach = () => {
  return (
    <div className='coach'>
        <div className='rect'></div>
        <h3>COACHES<div className='line'></div></h3>
        <div className="wrapper">
            <div className="items">
                 <div className="item">
                    <div className="left">
                        <img className='imgItem' src="https://www.instituteofpersonaltrainers.com/uploads/2/2/0/1/22014694/published/shaun-stafford-personal-trainer.jpg?1612613198" alt="" />
                    </div>
                    <div className="right">
                        <h2>STEVEN AYOKEE</h2>
                        <span>COACH</span>
                        <p>Lorem looking text that has been used since the 16th century as a filler text when the final content is not yet available. Lorem ipsum is used to give an idea of the visual layout of a book, document or webpage without being distracted by the real content.</p>
                        <div className="socialMedia">
                            <span className='itemlogo'><RxTwitterLogo/></span>
                            <span className='itemlogo'><SlSocialFacebook/></span>
                             <span className='itemlogo'><RxInstagramLogo/></span>
                        </div>
                    </div>
                 </div>
                 <div className="item">
                    <div className="left">
                        <img className='imgItem' src="https://media.theeverygirl.com/wp-content/uploads/2019/08/fitness-instructors-favorite-sports-bras-the-everygirl-4.jpg" alt="" />
                    </div>
                    <div className="right">
                        <h2>JULIE COLINS</h2>
                        <span>COACH</span>
                        <p>Lorem looking text that has been used since the 16th century as a filler text when the final content is not yet available. Lorem ipsum is used to give an idea of the visual layout of a book, document or webpage without being distracted by the real content.</p>
                        <div className="socialMedia">
                            <span className='itemlogo'><RxTwitterLogo/></span>
                            <span className='itemlogo'><SlSocialFacebook/></span>
                             <span className='itemlogo'><RxInstagramLogo/></span>
                        </div>
                    </div>
                 </div>
                 <div className="item">
                    <div className="left">
                        <img className='imgItem' src="https://www.usinesportsclub.com/wp-content/uploads/2022/08/STAN-scaled.jpg" alt="" />
                    </div>
                    <div className="right">
                        <h2>VIRGIL COOK</h2>
                        <span>COACH</span>
                        <p>Lorem looking text that has been used since the 16th century as a filler text when the final content is not yet available. Lorem ipsum is used to give an idea of the visual layout of a book, document or webpage without being distracted by the real content.</p>
                        <div className="socialMedia">
                            <span className='itemlogo'><RxTwitterLogo/></span>
                            <span className='itemlogo'><SlSocialFacebook/></span>
                             <span className='itemlogo'><RxInstagramLogo/></span>
                        </div>
                    </div>
                 </div>
                 <div className="item">
                    <div className="left">
                        <img className='imgItem' src="https://mustcoach.com/wp-content/uploads/2018/06/mustcoach-coachJonathanMjpg.jpeg" alt="" />
                    </div>
                    <div className="right">
                        <h2>DOMINIC SNYDER</h2>
                        <span>COACH</span>
                        <p>Lorem looking text that has been used since the 16th century as a filler text when the final content is not yet available. Lorem ipsum is used to give an idea of the visual layout of a book, document or webpage without being distracted by the real content.</p>
                        <div className="socialMedia">
                            <span className='itemlogo'><RxTwitterLogo/></span>
                            <span className='itemlogo'><SlSocialFacebook/></span>
                             <span className='itemlogo'><RxInstagramLogo/></span>
                        </div>
                    </div>
                 </div>

            </div>
        </div>
    </div>
  )
}

export default Coach