import './coach.scss'
import { RxTwitterLogo } from "react-icons/rx";
import { SlSocialFacebook } from "react-icons/sl";
import { RxInstagramLogo } from "react-icons/rx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Coach = () => {
    const list=[
        {id:1, img:"https://blog.salonbodyfitness.com/wp-content/uploads/2019/11/shutterstock_493318507.jpg", name:"STEVEN AYOKEE",desc:"Lorem looking text that has been used since the 16th century as a filler text when the final content is not yet available. Lorem ipsum is used to give an idea of the visual layout of a book, document or webpage without being distracted by the real content.",urlFb:"",urlIns:"",urlTwit:""},
        {id:2, img:"https://www.cadre-dirigeant-magazine.com/wp-content/uploads/2022/10/visuel-entreprise-sportif-optez.jpeg", name:"STEVEN AYOKEE",desc:"Lorem looking text that has been used since the 16th century as a filler text when the final content is not yet available. Lorem ipsum is used to give an idea of the visual layout of a book, document or webpage without being distracted by the real content.",urlFb:"",urlIns:"",urlTwit:""},
        {id:3, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWlEpXaISC6FhWnlRl3VG6a819TBUZ6uhGgRzOalHgS4Nge1c5C-Pka6DX415OfW32OZU&usqp=CAU", name:"STEVEN AYOKEE",desc:"Lorem looking text that has been used since the 16th century as a filler text when the final content is not yet available. Lorem ipsum is used to give an idea of the visual layout of a book, document or webpage without being distracted by the real content.",urlFb:"",urlIns:"",urlTwit:""},
        {id:4, img:"https://c.superprof.com/i/a/18779915/9237324/600/20220602200712/coach-sportif-diplome-donnant-cours-individuels-niveaux-lyon-fitness-park-saint-priest.jpg", name:"STEVEN AYOKEE",desc:"Lorem looking text that has been used since the 16th century as a filler text when the final content is not yet available. Lorem ipsum is used to give an idea of the visual layout of a book, document or webpage without being distracted by the real content.",urlFb:"",urlIns:"",urlTwit:""}
    ]
    return (
        <div className='coach'>
            <div className="title">CHOOSE YOUR COACH
                <div className="line"></div>
            </div>

            <div className="container">
                 
                    {list.map((item)=>(
                        <div className="items" key={item.id}>
                        <div className="item" data-aos="fade-up"
                            data-aos-anchor-placement="fade-up" data-aos-duration="1000">
                            <div className="left"><img className='img' src={item.img} alt={item.img} /></div>
                            <div className="line1"></div>
                            <div className='button'><input type="button" value="VIEW" /></div>
                            <div className="right">
                                <h2>{item.name}</h2>
                                <span>COACH</span>
                                <p>{item.desc}</p>
                                <div className="socialMedia">
                                    <span className='itemlogo'><RxTwitterLogo /></span>
                                    <span className='itemlogo'><SlSocialFacebook /></span>
                                    <span className='itemlogo'><RxInstagramLogo /></span>
                                </div>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default Coach

