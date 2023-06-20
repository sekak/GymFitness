import './contact.scss'
import Navbar from '../../components/Navbar/Navbar'
import Home from './Home'
import Maps from './Maps'
import Footer from '../../components/Footer/Footer'
 

const Contact = () => {

  return (
    <div className="contact">
        <Navbar className="nav"/>
        <Home/>
        <Maps/>
        <Footer/>
    </div>
  )
}

export default Contact
