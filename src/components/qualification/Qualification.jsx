import React, { useState } from 'react';
import './qualification.css';


export default function Qualification() {
    const [toggle, setToggle] = useState(1);

    const toggleTab = (index) => {
        setToggle(index);
    }
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div onClick={() => toggleTab(1)}
                        className={toggle === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>{" "} Education
                    </div>

                    <div className={toggle === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>{" "} Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggle === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Design</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">UI/UX Design</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Mobile App Development</h3>
                                <span className="qualification__subtitle">Udemy</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}