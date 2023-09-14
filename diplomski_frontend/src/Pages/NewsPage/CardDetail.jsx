import React from 'react';
import { useCardContext } from '../../Contex/CardContex';
import './CardDetail.css'

export default function CardDetail() {
  const { cardData } = useCardContext();
  console.log(cardData);

  if (!cardData) {
    return <div>No card data available.</div>;
  }

  const { image, title, description } = cardData;

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={image}
          alt=""
        />
        <h1 className="singlePostTitle">
          {title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          
        </div>
        <p className="singlePostDesc">
          {description}
        </p>
      </div>
    </div>
  );
}