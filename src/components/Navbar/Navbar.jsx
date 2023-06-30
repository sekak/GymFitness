import './navbar.scss'
   import { FaDumbbell } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from 'react';
import loogoo from './loogoo.png'
import AOS from 'aos';
import 'aos/dist/aos.css'
import {Link} from  "react-router-dom"
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

AOS.init();

const Navbar = () => {


    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(true)
    const handlescroll = (e) => {
        console.log(e.target.id)
        window.scrollTo({
            // top: 1224 * e.target.id,
            behavior: 'smooth',
            duration: 600
        })
        
    }
 
    window.addEventListener('scroll', () => {
         if (window.pageYOffset >= 131)
            setShow(false)
        else if (window.pageYOffset <= 131)
            setShow(true)
     })
    const handle=()=>{
        window.scrollTo(0,0);
    }
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])

    return (
        <>
            <div className={show ? "Navbar" : "Navbar  Navbar-background"}>
                <div className="top"><BsFillArrowUpCircleFill className='icon' onClick={handle}/></div>
                <div className="Wrapper">
                    <div className="Right">
                        <div className="RightLogo">
                            <Link to="/" >
                                <img data-aos="zoom-in" data-aos-duration="1000" src={loogoo} alt="logo" className='Logo' />
                            </Link>
                        </div>
                    </div>
                    <div className="Center">
                        <ul className='Items' onClick={(e)=>handlescroll(e)}>
                            <li id="1" data-aos="zoom-in" data-aos-duration="1000" className="Item"><Link to="/" style={{textDecoration:"none",color:"white"}}>HOME</Link></li>
                            <li id="2" data-aos="zoom-in" data-aos-duration="1200" className="Item"><Link to="/coaches" style={{textDecoration:"none",color:"white"}}>COACHES</Link></li>
                            <li id="3" data-aos="zoom-in" data-aos-duration="1400" className="Item"><Link to="/contact" style={{textDecoration:"none",color:"white"}}>CONTACT</Link></li>
                        </ul>
                    </div>
                    <div className="Left" onClick={() => setOpen(!open)}>{open ? <IoMdClose className='LogoCloseMenu' /> : <FaDumbbell className='LogoDumbell' />}
                    </div>
                </div>
                {
                    open &&
                    <div className='MenuItem'>
                        <ul className='Items'>
                            <li  data-aos="zoom-in" data-aos-duration="1000" className="Item"><Link to="/" style={{textDecoration:"none",color:"white"}}>HOME</Link></li>
                            <li  data-aos="zoom-in" data-aos-duration="1200" className="Item"><Link to="/coaches" style={{textDecoration:"none",color:"white"}}>COACHES</Link></li>
                            <li   data-aos="zoom-in" data-aos-duration="1400" className="Item"><Link to="/contact" style={{textDecoration:"none",color:"white"}}>CONTACT</Link></li>
                        </ul>
                    </div>
                }
            </div>
        </>
    )
}

export default Navbar


