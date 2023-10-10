import React, { useEffect, useState } from 'react'
import './News.scss'
import Card from './Card'
import slika from '../../Assets/Img/news.jpg'

export default function News() {
  const [allNews, setNews] = useState([]);

  useEffect(() => {
    console.log("News", allNews);
    fetch("http://localhost:8080/posts")
      .then(res => {
        return res.json();
      })
      .then((data) => {
        setNews(data);
      });
  }, []);

  return (
    <div className="news-container">
      <div className="news">
        {allNews.map((news, index) => (
          <Card key={index}
            image={slika}
            title={news.title}
            description={news.description}
            isFirstCard={index === 0}
          />
        ))}
      </div>
    </div>
  )
}
