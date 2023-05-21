import './home.scss'
import vdy from './video.mp4'
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();
const Home = () => {


    return (
        <>
            <video className='videoHome' autoPlay muted loop src={vdy} type="video/mp4" />
            <div className='Home'>
                <div className="Right">
                    <div className='Title'>
                        <h1 data-aos="fade-up" data-aos-duration="1000"
                            data-aos-mirror="true"
                            data-aos-once="true">ACCUEIL</h1>
                        <div className="Buttons">
                            <input
                                data-aos="fade-right"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1000"
                                className="btn-1" type="button" value="START HERE" />
                            <input
                                data-aos="fade-left"
                                data-aos-anchor="#example-anchor"
                                data-aos-duration="1500"
                                className="btn-2" type="button" value="GET IN TOUCH" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home