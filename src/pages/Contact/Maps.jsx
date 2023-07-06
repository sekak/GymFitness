import { useRef, useState } from 'react';
import './maps.scss'
import { GiCancel } from "react-icons/gi"
import emailjs from '@emailjs/browser';


function ContactUs() {

  const ref = useRef();

  const handleclick = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_x9wwjsb', 'template_w6oi7ec', ref.current, 'Qc50nD2eKk-FUEWYu')
      .then((result) => {
        console.log(result.text)
        setAlert(true)
        setTimeout(window.location.reload(true), 10000)

      }, (error) => {
        console.log(error.text)
      })
  }
  const [alert, setAlert] = useState(2)


  return (
    <div className='ContactUS'>
      <div className="wrapper">
        <div className="items">
          <div className="left" data-aos="fade-right" data-aos-duration="1000">
            <h2>Contact-Us</h2>
            <span className='tit-1'>We are here for you</span>
            <span className='tit-2'>For any request or request for information, you can call us, write to us, or even better: come and visit us!</span>
            <div className="item">
              <h4>TELEPHONE</h4>
              <h4>080-5156148</h4>
            </div>
            <div className="item">
              <h4>E-MAIL</h4> <h4>fitness@LaMarinaFitness.ma</h4>
            </div>
            <div className="item">
              <h4>ADDRESS</h4> <h4>Boulverad Mohamed VI,mdiq</h4>
            </div>
          </div>
          <div className="right" data-aos="fade-left" data-aos-duration="1000">
            <h2>Write-us</h2>
            <form onSubmit={(e) => handleclick(e)} ref={ref}>
              <input type='name' placeholder='Name?' required />
              <input type='email' placeholder='E-mail or Tel?' />
              <textarea type='text' placeholder="What's new?" required />
              <input type='submit' value="Send" />
            </form>
            {alert == 1 && <div className="alert-true">Success, has been sent</div>}
          </div>
        </div>
      </div>
    </div>
  )

}

export default function Map() {


  return (
    <>
      <div className="maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1620.4231191034949!2d-5.321545736862666!3d35.68078789288818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b5d0de1565e89%3A0x2754a1ac8f4b487f!2sLa%20Marina%20Fitness!5e0!3m2!1sfr!2sma!4v1687780765291!5m2!1sfr!2sma" allowfullscreen="" width="600" height="700" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='maps-k'></iframe>
      </div>
      <ContactUs />
    </>
  );
}
