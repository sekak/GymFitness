import './navbar.scss'
import { GiBigWave } from "react-icons/gi";
import { CgMenuGridR } from "react-icons/cg";
import { BsTwitter } from "react-icons/bs";
import { FaDumbbell } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();

const Navbar = () => {
 
    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(true)
    const handlescroll = (e) => {
        // if(e.target)
        // {/
            window.scrollTo({
                top: 1224 * e.target.id,
                behavior: 'smooth',
                duration: 600 
            })
        // }
        // var fnm = document.getElementById('1')
        // console.log(e.target.id)
    }
    console.log(open)
    window.addEventListener('scroll', () => {
        setOpen(false)
        if (window.pageYOffset >= 131)
        setShow(false)
        else if (window.pageYOffset <= 131)
        setShow(true)
        console.log(window.pageYOffset)
    })
    
      return (
        <>
            <div  className={show ? "Navbar" :  "Navbar  Navbar-background"}>
                <div className="Wrapper">
                    <div className="Right">
                        <div className="RightLogo">
                            <span data-aos="zoom-in" data-aos-duration="1000" >FITNESS</span>
                            <GiBigWave data-aos="zoom-in" data-aos-duration="1000"  className='Logo'/>
                            <span data-aos="zoom-in" data-aos-duration="1000" >MARINA</span>
                        </div>
                    </div>
                    <div className="Center">
                        <ul className='Items'>
                            <li data-aos="zoom-in" data-aos-duration="1000" className="Item">ACCUEIL</li>
                            <li data-aos="zoom-in" data-aos-duration="1200" className="Item">COACHS</li>
                            <li data-aos="zoom-in" data-aos-duration="1400" className="Item">CONTACT</li>
                        </ul>
                    </div>
                    <div className="Left" onClick={()=>setOpen(!open)}>{open ? <IoMdClose  className='LogoCloseMenu' />:  <FaDumbbell className='LogoDumbell'   /> }</div>
                </div>
                {
                    open &&
                <div className='MenuItem'>
                          <ul className='Items'>
                            <li data-aos="zoom-in" data-aos-duration="1000" className="Item">ACCUEIL</li>
                            <li data-aos="zoom-in" data-aos-duration="1200" className="Item">COACHS</li>
                            <li data-aos="zoom-in" data-aos-duration="1400" className="Item">CONTACT</li>
                        </ul>
                </div>
                }
            </div>
        </>
    )
}

export default Navbar


