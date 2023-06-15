import './next.scss'
import { RxDoubleArrowRight } from 'react-icons/rx';

const Next = (props) => {
    return (
        <div className="next">
            <div className='Contact'>
                <h1>{props.name}</h1>
                <RxDoubleArrowRight className="logo" />
            </div>
        </div>
    )
}

export default Next
