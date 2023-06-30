import './footer.scss'
import imgLogo from './imgLogo.png'
import { RxTwitterLogo } from "react-icons/rx";
import { SlSocialFacebook } from "react-icons/sl";
import { RxInstagramLogo } from "react-icons/rx";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='wrapper'>
                    <div className="logo">
                        
                    <Link to="/" >
                                <img data-aos="zoom-in" data-aos-duration="1000" src={imgLogo} alt="logo" className='dumLogo' />
                            </Link>
                     </div>
                    <div className="left">
                        <div className="title">
                            <h1>Menu</h1>
                            <hr></hr>
                        </div>
                        <div className="items">
                            <div className="item" data-aos="zoom-in" data-aos-duration="1000"><Link to="/" style={{textDecoration:"none",color:"white"}}>HOME</Link></div>
                            <div className="item" data-aos="zoom-in" data-aos-duration="1000" ><Link to="/coaches" style={{textDecoration:"none",color:"white"}}>COACHES</Link></div>
                            <div className="item" data-aos="zoom-in" data-aos-duration="1000"><Link to="/contact" style={{textDecoration:"none",color:"white"}}>CONTACT</Link></div>
                        </div>
                    </div>
                    <div className="center">
                        <div className="title">
                            <h1>Follow us</h1>
                            <hr></hr>
                        </div>
                        <div className="items">
                            <div className='item' data-aos="zoom-in" data-aos-duration="1000"><a href="https://www.facebook.com/lamarinafitness" target="_blank"><SlSocialFacebook /></a></div>
                            <div className='item' data-aos="zoom-in" data-aos-duration="1000"><a href="https://www.instagram.com/lamarina_fitness/" target="_blank"><RxInstagramLogo /></a></div>
                            <div className='item' data-aos="zoom-in" data-aos-duration="1000"><RxTwitterLogo /></div>
                        </div>
                    </div>
                    <div className="right">
                    <div className="title">
                            <h1>Adress</h1>
                            <hr></hr>
                        </div>
                        <div className="items">
                            <div className="item" data-aos="zoom-in" data-aos-duration="1000">Boulvard mohmed vi,<div className="item">Mdiq 222289</div></div>
                            <div className="item" data-aos="zoom-in" data-aos-duration="1000">0808-565-645</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer