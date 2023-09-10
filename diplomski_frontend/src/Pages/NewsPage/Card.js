import React from 'react'
import './Card.scss'

export default function Card({image, title, description, isFirstCard}) {
    return (
        <div className={`content ${isFirstCard ? 'big-card' : ''}`}>
            <div className='card'>
                <img src={image} alt="slika" />
                <h4>{title}</h4>
                <div className="card__text">
                    <p>{description}</p>
                </div>
                <div className='card__button'>
                    <button>Vidi više</button>
                </div>
            </div>
        </div>
    )
}
