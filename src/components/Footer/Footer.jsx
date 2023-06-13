import './footer.scss'
import imgLogo from './imgLogo.png'
import { RxTwitterLogo } from "react-icons/rx";
import { SlSocialFacebook } from "react-icons/sl";
import { RxInstagramLogo } from "react-icons/rx";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='wrapper'>
                    <div className="logo">
                        <img className="dumLogo" src={imgLogo} alt="" />
                    </div>
                    <div className="left">
                        <div className="title">
                            <h1>MENU</h1>
                            <hr></hr>
                        </div>
                        <div className="items">
                            <div className="item">HOME</div>
                            <div className="item">COACHS</div>
                            <div className="item">COACHS</div>
                            <div className="item">INSTALLATION</div>
                        </div>
                    </div>
                    <div className="center">
                        <div className="title">
                            <h1>FOLLOW US</h1>
                            <hr></hr>
                        </div>
                        <div className="items">
                            <div className='item'><RxTwitterLogo /></div>
                            <div className='item'><SlSocialFacebook /></div>
                            <div className='item'><RxInstagramLogo /></div>
                        </div>
                    </div>
                    <div className="right">
                    <div className="title">
                            <h1>ADRESSE</h1>
                            <hr></hr>
                        </div>
                        <div className="items">
                            <div className="item">Boulvard mohmed vi,<div className="item">Mdiq 222289</div></div>
                            <div className="item">0808-565-645</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer