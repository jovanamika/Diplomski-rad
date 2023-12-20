import React from 'react'
import './Card.scss'
import { useNavigate } from 'react-router-dom'
import { useCardContext } from '../../Contex/CardContex';
import img1 from '../../Assets/Img/image-1.jpg'
import img2 from '../../Assets/Img/image-2.jpg'
import img3 from '../../Assets/Img/image-3.jpg'
import img4 from '../../Assets/Img/image-4.jpg'
import img5 from '../../Assets/Img/image-5.jpg'
import img6 from '../../Assets/Img/image-6.jpg'
import img7 from '../../Assets/Img/image-7.jpg'
import img8 from '../../Assets/Img/image-8.jpg'



export default function Card({ image, title, description, isFirstCard }) {
  const { setCardData } = useCardContext();
  const navigate = useNavigate();
  console.log(image);
  let imageUrl = img1;

  console.log(image);


  switch (image) {
    case 'image-1.jpg':
      imageUrl = img1;
      break;
    case 'image-2.jpg':
      imageUrl = img2;
      break;
    case 'image-3.jpg':
      imageUrl = img3;
      break;
    case 'image-4.jpg':
      imageUrl = img4;
      break;
    case 'image-5.jpg':
      imageUrl = img5;
      break;
    case 'image-6.jpg':
      imageUrl = img6;
      break;
    case 'image-7.jpg':
      imageUrl = img7;
      break;
    case 'image-8.jpg':
      imageUrl = img8;
      break;
    default:
      imageUrl = img8;
  }

  console.log(isFirstCard);

  const handleButtonClick = () => {
    setCardData({ image, title, description });

    navigate('/card');
  };

  return (
    <div className={`content${isFirstCard ? '__big-card' : ''}`}>
      <div className='card'>
        <div className="card-image-container">
          <img src={imageUrl} alt="slika" />
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
