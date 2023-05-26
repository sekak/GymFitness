import './bottom.scss'
import { HiPhone } from 'react-icons/hi';
import { IoLogoWhatsapp } from "react-icons/io";
import { RxTwitterLogo } from "react-icons/rx";
import { SlSocialFacebook } from "react-icons/sl";
import { RxInstagramLogo } from "react-icons/rx";
import { TbClockHour4 } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
import imgLogo from './imgLogo.png'



const Bottom = () => {
    return (
        <div className='bottom'>
            <div className="left">
                <div className="item1">
                    <h2>Opening Hours</h2>
                    <div>
                        <span className='day'>
                            <TbClockHour4 className='dayLogo' />
                            Monday friday</span>
                        <span>9:00 - 10:00</span>
                    </div>
                    <div><span className='day'><TbClockHour4 className='dayLogo' />Saturday</span> <span>9:00 - 08:00</span></div>
                    <div><span className='day'><TbClockHour4 className='dayLogo' />Sunday</span> <span className='close'>Close</span></div>
                </div>
            </div>
            {/*  */}
            <div className="center">
                 <img className="dumLogo"  src={imgLogo} alt="" />
                 <div className='Logos'>
                        <span className='itemlogo'><RxTwitterLogo /></span>
                        <span className='itemlogo'><SlSocialFacebook /></span>
                        <span className='itemlogo'><RxInstagramLogo /></span>
                 </div>
            </div>
            {/*  */}
            <div className="right">
                <div className="item">
                    <h2>Contact Info</h2>
                    <div className='phone'>
                        <h4><HiPhone/>  <span>+212 657 22 14</span></h4>
                    </div>
                    <div className='whatss'>
                        <h4><IoLogoWhatsapp/>  <span>+212 658 23 54</span></h4>
                    </div>
                    <div className='email'>
                        <h4><MdEmail/> <span>marinafitness@gmail.com</span></h4>
                    </div>
                    <div className='position'>
                        <h4><GiPositionMarker/>  <span>lorem ipsum, 2301,N2</span></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bottom