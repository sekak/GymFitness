import './feedBack.scss'
import { useState } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { BsStarFill } from 'react-icons/bs';

const FeedBack = () => {
    const feedback = [
        { num: 3, text: 'The gym had a wide range of equipment and the atmosphere was motivating.   ', img: "https://pps.whatsapp.net/v/t61.24694-24/350405871_251211724169650_5856255688304732475_n.jpg?ccb=11-4&oh=01_AdQITWLEZ-WTG9TFmK0dk_1jrnTPtfBfHtHDulj9fOSYYQ&oe=64A6A300", name: "Ahmed-skk" },
        { num: 4, text: 'Great gym with a wide range of equipment!', img: "https://image.brigitte.de/13518158/t/1o/v1/w1440/r1.5/-/7-anzeichen-dass-du-eine-schwierige-person-bist.jpg", name: "Emily" },
        { num: 5, text: 'The gym staff was knowledgeable and provided helpful guidance during my workout.', img: "https://pps.whatsapp.net/v/t61.24694-24/355031385_1311000092821910_853677050444787115_n.jpg?ccb=11-4&oh=01_AdQry9Ifc_7XEownQiwo0iDScsNcubi89IRJ9be1rx-0Uw&oe=64A68A88", name: "Anas-EL" },
    ];

    // console.log(feedback[0].)
    const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentFeedbackIndex((prevIndex) =>
            prevIndex === 0 ? feedback.length - 1 : prevIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentFeedbackIndex((prevIndex) =>
            prevIndex + 1 < feedback.length ? prevIndex + 1 : 0
        );
    };
    return (
        <>
            <div className="feedBack">
                
                <div className="items">
                <h1 className='title'>A Glimpse into the Success of Our Services</h1>
                    <div className="item">
                        <button onClick={handlePrevClick}><BiRightArrowAlt /></button>
                        <div className='inside'>
                            <div className="team">
                                <img src={feedback[currentFeedbackIndex].img} alt="" />
                                <h1>{feedback[currentFeedbackIndex].name}</h1>
                                <div className="rated">
                                    <BsStarFill /> <BsStarFill /> <BsStarFill />
                                </div>
                            </div>
                            <p>{feedback[currentFeedbackIndex].text}</p>
                        </div>
                        <button onClick={handleNextClick}><BiLeftArrowAlt /></button>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default FeedBack
