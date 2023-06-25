import './next.scss'
import { RxDoubleArrowRight } from 'react-icons/rx';

const Next = (props) => {   

    return (
        <div className="next" >
            <div className='Contact'>
                <h1 data-aos="fade-right" data-aos-duration="1000"> {props.name}</h1>
                <RxDoubleArrowRight className="logo" ata-aos="fade-left" data-aos-duration="1000" />
            </div>
        </div>
    )
}

export default Next
