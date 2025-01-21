import React from 'react';
import './testimonial.css';
import { Data } from './Data';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


export default function Testimonial() {
  return (
    <section className="testimonial container section" id="testimonial">
      <h2 className="section__title">My Clients Say</h2>
      <span className="section__subtitle">Testimonial</span>

      <Swiper className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={48}
        slidesPerView={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, role, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <div className="testimonial__img-box">
                <img src={image} alt="" className="testimonial__img" />
              </div>
              <h3 className="testimonial__name">{title}</h3>
              {role && <span className="testimonial__role">{role}</span>}
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};