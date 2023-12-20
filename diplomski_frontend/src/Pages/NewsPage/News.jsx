import React, { useEffect, useState } from 'react'
import './News.scss'
import Card from './Card'

export default function News() {
  const [allNews, setNews] = useState([]);
  let firstCard = 0;
  console.log(allNews);

  useEffect(() => {
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
          news.active ? (
            <Card
              key={index}
              image={news.imageUrl}
              title={news.title}
              description={news.description}
              isFirstCard={firstCard++ === 0}
            />
          ) : null
        ))}
      </div>
    </div>
  )
}
