import './detailsCoach.scss'
import { RxTwitterLogo } from "react-icons/rx";
import { SlSocialFacebook } from "react-icons/sl";
import { RxInstagramLogo } from "react-icons/rx";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const DetailsCoach = () => {
    return (
        <div className="containerDe">
            <div className="wrapperDE">
                <div className="insideDE">
                    <div className="item-0">
                        <div className="container-0">
                            <div className="items">
                                <img src="https://blog.salonbodyfitness.com/wp-content/uploads/2019/11/shutterstock_493318507.jpg" alt="" />
                                <h3>WELCOME TO</h3>
                                <h1>LIFE STYLE</h1>
                                <h4>with: <span>ahmad sekak</span></h4>
                                <p>A life coach is not a therapist, consultant, psychologist, counselor or anyone who deals with mental illness. Life coaches work with individuals who want help in achieving their goals.</p>
                            </div>
                        </div>
                    </div>
                    <div className="item-1">
                        <h1>CONTACT US</h1>
                        <p>lotrem ipsum life itro lotrem ipsum life itro lotrem ipsum life itro lotrem ipsum life itro lotrem ipsum life itro</p>
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