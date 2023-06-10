import React from "react";
import Carousel from "react-bootstrap/Carousel";
import testimonials1 from "../../images/testimonials-1.png";  //Андрей Богатов
import testimonials2 from "../../images/testimonials-2.png";  //Павел Матяш
import testimonials3 from "../../images/testimonials-3.png";  // Юлия Иванова 
import testimonials4 from "../../images/testimonials-4.jpg";  // Анжела
import testimonials5 from "../../images/testimonials-5.jpg";  // Михаил
import testimonials6 from "../../images/testimonials-6.jpg";  // Диана

// import CarouselItem from "../CarouselItem/CarouselItem";
import "./Carousel.css";
import CarouselSlideElem from "../CarouselSlideElem/CarouselSlideElem";

const textComment11 = "“Решили арендовать автомобиль, чтобы встретить важных гостей. Без никаких проблем получилось это сделать. Все на высшем уровне. Спасибо!”"
const textComment22 = "“Столкнулся с проблемой поломки машины. Механики и мастера данной компании действительно профессионалы своего дела. Сделали очень быстро, а главное - качественно.”"
const textComment33 = "“Очень полезный и удобный сервис для нашего города. Им можно доверять. Всегда беру в аренду только у них.”"

function Carusel() {
  return (
    <section className="carusel">
      <main className="carusel__wrapper wrapper">
        <h2 className="carusel__title title general-title">Отзывы</h2>
        <Carousel>
          <Carousel.Item>
            <CarouselSlideElem
              textComment1={textComment11}
              url1={testimonials1}
              subtitle1="Андрей Богатов"
              textKind1="Аренда"
              textComment2={textComment22}
              url2={testimonials2}
              subtitle2="Павел Матяш"
              textKind2="Сервис ремонта"
              textComment3={textComment33}
              url3={testimonials3}
              subtitle3="Юлия Иванова"
              textKind3="Аренда"
            />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselSlideElem
              textComment1={textComment11}
              url1={testimonials4}
              subtitle1="Анжела"
              textKind1="Аренда"
              textComment2={textComment22}
              url2={testimonials5}
              subtitle2="Михаил"
              textKind2="Сервис ремонта"
              textComment3={textComment33}
              url3={testimonials6}
              subtitle3="Диана"
              textKind3="Аренда"
            />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselSlideElem
              textComment1={textComment11}
              url1={testimonials2}
              subtitle1="Павел Матяш"
              textKind1="Аренда"
              textComment2={textComment33}
              url2={testimonials6}
              subtitle2="Диана"
              textKind2="Сервис ремонта"
              textComment3={textComment33}
              url3={testimonials1}
              subtitle3="Андрей Богатов"
              textKind3="Аренда"
            />
          </Carousel.Item>
        </Carousel>
      </main>
    </section>
  );
}

export default Carusel;
