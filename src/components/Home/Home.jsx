import './home.scss'
import vdy from './video.mp4'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useContext, useEffect, useRef, useState } from 'react';
import imglogo from './loogoo.png'
import emailjs from '@emailjs/browser';
import UserContext from '../context/createContext';
import { GiCancel } from "react-icons/gi"


const Home = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    const [value, setValue] = useState("+212");
    const [showContact, setshowContact] = useState(true);
    const { showw, setshow } = useContext(UserContext)
    console.log(showw)
    const handleSelect = (e) => {
        setValue(e.target.value)
    }

    const getContact = () => {
        setshowContact(!showContact)
        setshow(!showw);
    }

    const ref = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_x9wwjsb', 'template_w6oi7ec', ref.current, 'Qc50nD2eKk-FUEWYu')
            .then((result) => {
                console.log(result.text);
                // setshowContact(false)
                setshow(!showw);
            }, (error) => {
                console.log(error.text);
            });
    }

    const handleCancel = () => {
        setshow(!showw)
        setshowContact(!showContact)

    }

    return (
        <>
            <video className='videoHome' autoPlay muted loop src={vdy} type="video/mp4" />
            <div className='Home'>
                <div className="Right">
                    <div className='Title'>
                        <h1 data-aos="fade-up"
                            data-aos-duration="1000"
                        >ACCUEIL</h1>
                        <div className="Buttons">
                            <button data-aos="fade-right"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1000"
                                className="btn-1" >
                                START HERE
                            </button>

                            <button
                                id="contact"
                                data-aos="fade-left"
                                data-aos-anchor="#example-anchor"
                                data-aos-duration="1000"
                                className="btn-2"
                                onClick={getContact}>
                                CONTACT US
                            </button>
                        </div>
                    </div>
                    {showContact &&
                        <div className="Formcontainer">
                            <GiCancel className='cancel' onClick={handleCancel} />
                            <div className="top-form">
                                <img className='imgLogo' src={imglogo} alt="" />
                             </div>

                            <p>We can get this information to contact you, </p>
                            <span >be faster.</span>
                            <form className='form' id='#form' onSubmit={sendEmail} ref={ref}>
                                 
                            <div className="input">
				                <input type="text" className="input-field" required/>
				                <label className="input-label">Full name</label>
			                </div>
						    <div className="input">
                                <input type="email" className="input-field"  required/>
				                <label className="input-label">Email</label>
			                </div>
						    <div className="input">
				                <input type="text" className="input-field" required/>
				                <label className="input-label">Description</label>
			                </div>
			                <div className="action">
				                <button className="action-button">Send</button>
			                </div>
                            </form>
                        </div>
                    }
        </div >
            </div >
        </>
    )

}

export default Home