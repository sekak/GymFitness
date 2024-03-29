import './detailsCoach.scss'
import { RxTwitterLogo } from "react-icons/rx";
import { SlSocialFacebook } from "react-icons/sl";
import { RxInstagramLogo } from "react-icons/rx";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';

const DetailsCoach = () => {
    const pathname = useLocation();
    useEffect(()=>{
      window.scrollTo(0,0)
    },[pathname])
    return (
        <div className="containerDe">
            <div className="wrapperDE">
                <div className="insideDE">
                    <div className="item-0">
                        <div className="container-0">
                            <div className="items">
                                <img src="https://as1.ftcdn.net/v2/jpg/00/73/58/96/1000_F_73589699_I4s2nX0Enc3eQ78T6V1SG5Ac9LF7jsxr.jpg" alt="" />
                                <h3>WELCOME TO</h3>
                                <h1>LIFE STYLE</h1>
                                <h4>with: <span>ahmad sekak</span></h4>
                                <p>A life coach is not a therapist, consultant, psychologist, counselor or anyone who deals with mental illness. Life coaches work with individuals who want help in achieving their goals.</p>
                            </div>
                        </div>
                    </div>
                    <div className="item-1">
                        <h1>CONTACT US</h1>
                        {/* <p>lotrem ipsum life itro lotrem ipsum life itro lotrem ipsum life itro lotrem ipsum life itro lotrem ipsum life itro</p> */}
                        <div className='Logos'>
                            <span className='itemlogo'><RxTwitterLogo /></span>
                            <span className='itemlogo'><SlSocialFacebook /></span>
                            <span className='itemlogo'><RxInstagramLogo /></span>
                        </div>
                        <Link to="/coaches"><BsArrowLeft className='logo'/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DetailsCoach