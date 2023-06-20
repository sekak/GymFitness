import './next.scss'
import { RxDoubleArrowRight } from 'react-icons/rx';

const Next = (props) => {   

    return (
        <div className="next" data-aos="zoom-out">
            <div className='Contact'>
                <h1>{props.name}</h1>
                <RxDoubleArrowRight className="logo" />
            </div>
        </div>
    )
}

export default Next
