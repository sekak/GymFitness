import './feedBack.scss'
import { useState } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { BsStarFill } from 'react-icons/bs';

const FeedBack = () => {
    const feedback = [
        { num: 3, text: 'Great gym with a wide range of equipment!', img: "https://www.harleytherapy.co.uk/counselling/wp-content/uploads/16297800391_5c6e812832.jpg", name: "sekak" },
        { num: 4, text: 'Great gym with a widef range of equipment!', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCRAouUpqI61-RFexMr9J09Nqn2W3WLNsejQ&usqp=CAU", name: "ahmed" },
        { num: 5, text: 'Great gym wireferth a wide range of equipment!', img: "https://img.freepik.com/photos-premium/portrait-joueur-rugby-confiant-bras-croises_13339-163014.jpg?w=2000", name: "sekak" },
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
