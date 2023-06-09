import './home.scss'
import vdy from './video.mp4'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useContext, useEffect, useRef, useState } from 'react';
import imglogo from './loogoo.png'
import emailjs from '@emailjs/browser';
import UserContext from '../context/createContext';
  

 
const Home = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    const [value, setValue] = useState("+212");
    const [showContact, setshowContact] = useState(false);
    const {showw,setshow} = useContext(UserContext)
    console.log(showw)
    const handleSelect = (e) => {
        setValue(e.target.value)
    }

    const getContact = () => {
        setshowContact(!showContact)
    }
    
    const ref = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_x9wwjsb', 'template_w6oi7ec', ref.current, 'Qc50nD2eKk-FUEWYu')
        .then((result) => {
            console.log(result.text);
            setshowContact(false)
            setshow(!showw);
            }, (error) => {
                console.log(error.text);
            });
    }
    
     return (
       
        <div className={showContact && "Container"} >
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
                <img className='Fromlogo' src={imglogo} alt="" />
                <p>We can get this information to contact you, </p>
                <span >be faster.</span>
               <form className='form' id='#form' onSubmit={sendEmail} ref={ref}>
                   <label>
                       Username
                       <input type="text" required name='user_name'/>
                   </label>
                   <label>
                       Telephone
                       <div className="Fromdrop">
                        <select name="212" onChange={(e)=>handleSelect(e)}>
                           <option value="+212">🇲🇦 +212</option>
                           <option value="+1">🇺🇸 +1</option>
                           <option value="+33">🇫🇷 +33</option>
                       </select>
                        <input type="tel" placeholder={value} required name='user_tel'/>
                       </div>
                   </label>
                   <label>
                       Email
                       <input type="gmail" required name='user_email'/>
                   </label>
                   <label>
                       Description
                       <textarea type="hidden" required name='user_descr'/>
                   </label>
                   <button type='submit' className='Formbutton' >SEND</button>
               </form>
           </div>
            }
            </div>
        </div>
    </div>
)

}

export default Home