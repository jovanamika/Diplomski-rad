import { React, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Card from '../../NewsPage/Card';
import slika from '../../../Assets/Img/image-8.jpg'
import 'swiper/css'
import 'swiper/css/pagination';
import SliderCards from './SliderCards';
import './Style.css';

export default function Slider() {
    const [allNews, setNews] = useState([]);
    const [slidesPerView, setSlidesPerView] = useState(3);
    console.log(allNews);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1024) {
                setSlidesPerView(1);
            } else {
                setSlidesPerView(3);
            }
        };

        // Initial setup
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


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
            slidesPerView={slidesPerView}
            spaceBetween={25}
            pagination={{
                clickable: true,
            }}
            className="mySwiper"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {allNews.map((card, index) => (
                <SwiperSlide>
                    <div className="slider-cards">
                        <SliderCards key={index}
                            image={card.imageUrl}
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
