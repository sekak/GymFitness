import './bottom.scss'
import { CiDumbbell } from 'react-icons/ci';
import { GiBigWave } from "react-icons/gi";
import { RxTwitterLogo } from "react-icons/rx";
import { SlSocialFacebook } from "react-icons/sl";
import { RxInstagramLogo } from "react-icons/rx";
import { TbClockHour4 } from "react-icons/tb";



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
                    <div><span className='day'><TbClockHour4 className='dayLogo' />Sunday</span> <span>Close</span></div>
                </div>
            </div>
            {/*  */}
            <div className="center">
                <div className='logo'>Marina  <span> <GiBigWave /> Fitness</span></div>
                <CiDumbbell className="dumLogo" />
            </div>
            {/*  */}
            <div className="right">
                <div className="item">
                    <h2>Contact Info</h2>
                    <div className='phone'>
                        <h4>Phone: <span>+212 657 22 14</span></h4>
                    </div>
                    <div className='email'>
                        <h4>Email: <span>marinafitness@gmail.com</span></h4>
                    </div>
                    <div className='itemslogo'>
                        <span className='itemlogo'><RxTwitterLogo /></span>
                        <span className='itemlogo'><SlSocialFacebook /></span>
                        <span className='itemlogo'><RxInstagramLogo /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bottom