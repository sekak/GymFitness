import { useRef } from 'react';
import './maps.scss'
import emailjs from '@emailjs/browser';


function ContactUs() {

  const ref = useRef();

  const handleclick = (e) =>{
    e.preventDefault();
    emailjs.sendForm('service_x9wwjsb', 'template_w6oi7ec', ref.current, 'Qc50nD2eKk-FUEWYu')
    .then((result)=>{
      console.log(result.text)
    },(error)=>{
      console.log(error.text)
    })
  }
  

  return (
    <div className='ContactUS'>
      <div className="wrapper">
        <div className="items">

          <div className="left" data-aos="fade-right" data-aos-duration="1000">
              <h2>Contact-Us</h2>
              <span className='tit-1'>We are here for you</span>
              <span className='tit-2'>For any request or request for information, you can call us, write to us, or even better: come and visit us!</span>
              <div className="item">
                <h4>TELEPHONE</h4> <span>080-5156148</span>
              </div>
              <div className="item">
                <h4>E-MAIL</h4> <span>fitness@progym.ma</span>
              </div>
              <div className="item">
                <h4>ADDRESS</h4> <span>Boulverad Mohamed VI,mdiq</span>
              </div>
          </div>
          <div className="right" data-aos="fade-left" data-aos-duration="1000">
            <h2>Write us</h2>
            <form onSubmit={(e)=>handleclick(e)} ref={ref}>
                <input type='name' placeholder='Name?' required/>
                <input type='email' placeholder='E-mail?'  required />
                <textarea type='text' placeholder="What's new?"  required/>
                <input type='submit'  value="Send"/>
            </form>
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
        <iframe className='maps-k' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8555969824592!2d-5.322819787508235!3d35.68055747247314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b5da3f7fc3edb%3A0x44c4225428c6dd78!2stest!5e0!3m2!1sfr!2sma!4v1687189198677!5m2!1sfr!2sma" height="800" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <ContactUs />
    </>
  );
}
