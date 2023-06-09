import './coach.scss'
import { RxTwitterLogo } from "react-icons/rx";
import { SlSocialFacebook } from "react-icons/sl";
import { RxInstagramLogo } from "react-icons/rx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Coach = () => {
    return (
        <div className='coach'>
            <div className="title">CHOOSE YOUR COACH
                <div className="line"></div>
            </div>

            <div className="container">
                <Swiper 
                centeredSlides
                    effect='coverflow'
                    slidesPerView="auto"
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    coverflowEffect={{
                        rotate:50,stretch:0,depth:100,modifier:1,slideShadows:true
                    }}
                >
                    <SwiperSlide> <div className="items">
                        <div className="item">
                            <div className="left"><img className='img' src="https://blog.salonbodyfitness.com/wp-content/uploads/2019/11/shutterstock_493318507.jpg" alt="" /></div>
                            <div className="line1"></div>
                            <div className="right">
                                <h2>STEVEN AYOKEE</h2>
                                <span>COACH</span>
                                <p>Lorem looking text that has been used since the 16th century as a filler text when the final content is not yet available. Lorem ipsum is used to give an idea of the visual layout of a book, document or webpage without being distracted by the real content.</p>
                                <div className="socialMedia">
                                    <span className='itemlogo'><RxTwitterLogo /></span>
                                    <span className='itemlogo'><SlSocialFacebook /></span>
                                    <span className='itemlogo'><RxInstagramLogo /></span>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="items">
                        <div className="item">
                            <div className="left"><img className='img' src="https://www.cadre-dirigeant-magazine.com/wp-content/uploads/2022/10/visuel-entreprise-sportif-optez.jpeg" alt="" /></div>
                            <div className="line1"></div>
                            <div className="right">
                                <h2>STEVEN AYOKEE</h2>
                                <span>COACH</span>
                                <p>Lorem looking text that has been used since the 16th century as a filler text when the final content is not yet available. Lorem ipsum is used to give an idea of the visual layout of a book, document or webpage without being distracted by the real content.</p>
                                <div className="socialMedia">
                                    <span className='itemlogo'><RxTwitterLogo /></span>
                                    <span className='itemlogo'><SlSocialFacebook /></span>
                                    <span className='itemlogo'><RxInstagramLogo /></span>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="items">
                        <div className="item">
                            <div className="left"><img className='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWlEpXaISC6FhWnlRl3VG6a819TBUZ6uhGgRzOalHgS4Nge1c5C-Pka6DX415OfW32OZU&usqp=CAU" alt="" /></div>
                            <div className="line1"></div>
                            <div className="right">
                                <h2>STEVEN AYOKEE</h2>
                                <span>COACH</span>
                                <p>Lorem looking text that has been used since the 16th century as a filler text when the final content is not yet available. Lorem ipsum is used to give an idea of the visual layout of a book, document or webpage without being distracted by the real content.</p>
                                <div className="socialMedia">
                                    <span className='itemlogo'><RxTwitterLogo /></span>
                                    <span className='itemlogo'><SlSocialFacebook /></span>
                                    <span className='itemlogo'><RxInstagramLogo /></span>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="items">
                        <div className="item">
                            <div className="left"><img className='img' src="https://c.superprof.com/i/a/18779915/9237324/600/20220602200712/coach-sportif-diplome-donnant-cours-individuels-niveaux-lyon-fitness-park-saint-priest.jpg" alt="" /></div>
                            <div className="line1"></div>
                            <div className="right">
                                <h2>STEVEN AYOKEE</h2>
                                <span>COACH</span>
                                <p>Lorem looking text that has been used since the 16th century as a filler text when the final content is not yet available. Lorem ipsum is used to give an idea of the visual layout of a book, document or webpage without being distracted by the real content.</p>
                                <div className="socialMedia">
                                    <span className='itemlogo'><RxTwitterLogo /></span>
                                    <span className='itemlogo'><SlSocialFacebook /></span>
                                    <span className='itemlogo'><RxInstagramLogo /></span>
                                </div>
                                </div>
                            </div>
                        </div></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Coach

