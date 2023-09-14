import React from 'react'
import './Card.scss'
import { useNavigate } from 'react-router-dom'
import { useCardContext } from '../../Contex/CardContex';

export default function Card({ image, title, description, isFirstCard }) {
    const { setCardData } = useCardContext();
    const navigate = useNavigate();

    const handleButtonClick = () => {
        // Set the card data in the context
        setCardData({ image, title, description });

        navigate('/card');
        // You can use react-router's Link or programmatically navigate as shown in previous answers
    };

    return (
        <div className={`content ${isFirstCard ? 'big-card' : ''}`}>
            <div className='card'>
                <div className="card-image-container">
                    <img src={image} alt="slika" />
                </div>
                <h4>{title}</h4>
                <div className="card__text">
                    <p>{description}</p>
                </div>
                <div className='card__button'>
                    <button onClick={handleButtonClick}>Vidi više</button>
                </div>
            </div>
        </div>
    )
}
