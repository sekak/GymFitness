import './article.scss'
import imgMuscl from './img.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
 


function Article() {

    useEffect(() => {
        AOS.init({ duration: 2000 });
     }, [])

    return (
        <div className='Article'>
            <div className="Wrapper">
                <div className="Left">
                    <img data-aos="fade-right"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="1500" className='RightImg' src={imgMuscl} alt="" />
                </div>

                <div className="Right">
                    <div className="rect"></div>
                     <div className="Regulate">
                        <h1 data-aos="fade-left"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration="1500" className='TitleLeft'>WELCOME TO OUR GYM</h1>
                        <span data-aos="fade-left"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration="1500" className='ParagLeft'>The Progym team aims to help you achieve yours in the best conditions. We make your physical, physiological and mental well-being our priority by establishing a personalized follow-up in accordance with your needs. In addition to our various activities through high-end equipment and tailor-made courses for all levels. Don't wait any longer and come join us at the ProGym club!</span>
                        <div className='DomainLeft'>
                            <h1 data-aos="flip-left"
                                data-aos-anchor-placement="top-bottom"
                                data-aos-duration="1500">6</h1>
                            <div data-aos="flip-left"
                                data-aos-anchor-placement="top-bottom"
                                data-aos-duration="3500" className='DomainLeftConcepts'>
                                <span>ESPACES </span>
                                <span>CONCEPTS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article