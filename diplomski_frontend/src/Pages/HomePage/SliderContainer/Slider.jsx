import { React, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Card from '../../NewsPage/Card';
import slika from '../../../Assets/Img/news.jpg'
import 'swiper/css'
import 'swiper/css/pagination';
import SliderCards from './SliderCards';
import './Style.css';

export default function Slider() {
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
        <Swiper
            slidesPerView={3}
            spaceBetween={25}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            align='center'
            justify='center'
        >
            {allNews.map((card, index) => (
                <SwiperSlide>
                    <div className="slider-cards">
                        <SliderCards key={index}
                            image={slika}
                            title={card.title}
                            description={card.description}
                            isFirstCard={'false'}
                            isForSeminarPage={'false'}
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
