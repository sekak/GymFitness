import './home.scss'
import vdy from './video.mp4'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useContext, useEffect, useRef, useState } from 'react';
import imglogo from './loogoo.png'
import emailjs from '@emailjs/browser';
import UserContext from '../context/createContext';
import { GiCancel } from "react-icons/gi"
import { IoMdClose } from "react-icons/io";


const Home = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    const [value, setValue] = useState("+212");
    const [showContact, setshowContact] = useState(true);
    const { showw, setshow } = useContext(UserContext)
 

    const getContact = () => {
        setshowContact(!showContact)
        setshow(!showw);
    }
    const [alert,setAlert] = useState(2)
    const ref = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_x9wwjsb', 'template_w6oi7ec', ref.current, 'Qc50nD2eKk-FUEWYu')
            .then((result) => {
                setAlert(true);
                console.log(result.text)
                setshow(false);
                setshowContact(!showContact)
            }, (error) => {
                console.log(error.text);
            });
    }

    const handleCancel = () => {
        setshow(!showw)
        setshowContact(!showContact)
    }

    const handlestart=()=>{
        window.scrollTo(850,850);
        console.log("click")
    }

    return (
        <>
          
            <video className='videoHome' autoPlay muted loop src={vdy} type="video/mp4" />
            <div className='Home'>
            {alert == 1 &&
              <div className="alert-true">Success, has been sent <GiCancel className='cancel' onClick={()=>{setAlert(false)}}/></div>
            } 
             
                <div className="Right">
                    <div className='Title'>
                        <h1 data-aos="fade-up"
                            data-aos-duration="1000"
                        >HOME</h1>
                        <div className="Buttons">
                            <button data-aos="fade-right"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1000"
                                className="btn-1" onClick={handlestart}>
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
                            <IoMdClose className='cancel' onClick={handleCancel} />
                            <div className="top-form">
                                <img className='imgLogo' src={imglogo} alt="" />
                             </div>

                            <p>We can get this information to contact you, </p>
                            <span >be faster.</span>
                            <form className='form' id='#form' onSubmit={sendEmail} ref={ref}>
                                 
                            <div className="input">
				                <input name='name' type="text" className="input-field" required />
				                <label className="input-label">Full name</label>
			                </div>
						    <div className="input">
                                <input name='email' type="text" required  list="defaultEmails"  className="input-field"  />
				                <label  className="input-label">Email or Tel</label>
			                </div>
						    <div className="input">
				                <input name='desc' type="text" className="input-field" required />
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