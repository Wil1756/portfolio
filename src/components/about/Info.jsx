import React from 'react';

export default function Info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className='bx bx-award about__icon'></i>
        <h3 className="about__title">Experince</h3>
        <span className="about__subtitle">4 years</span>
      </div>

      <div className="about__box">
        <i className='bx bxs-briefcase about__icon' ></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">15 + Projects</span>
      </div>

      <div className="about__box">
        <i className='bx bx-support about__icon' ></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
}