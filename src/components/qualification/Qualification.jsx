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
            <span className="section__subtitle">My Personal Journey</span>

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
                                <h3 className="qualification__title">Bachelor of Engineering: Civil Engineering</h3>
                                <span className="qualification__subtitle">Kyambogo University</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Completed
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
                                <h3 className="qualification__title">Docker Foundations Professional Certificate</h3>
                                <span className="qualification__subtitle">Docker, Inc</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Jul 2024
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Microsoft Cloud for Sustainability</h3>
                                <span className="qualification__subtitle">LinkedIn</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Jul 2024
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
                                <h3 className="qualification__title">Programming Foundations: Beyond Fundamentals</h3>
                                <span className="qualification__subtitle">LinkedIn</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Jul 2024
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggle === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Engineer</h3>
                                <span className="qualification__subtitle">Zimba Technologies • Contract</span>
                                <span className="qualification__description">Building fintech solutions</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Nov 2024 - Present • 3 mos
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
                                <h3 className="qualification__title">Software Developer</h3>
                                <span className="qualification__subtitle">Tunga • Freelance</span>
                                <span className="qualification__description">Front-End Development, Scrum</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Feb 2022 - Present • 3 yrs
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Full-stack Javascript Developer</h3>
                                <span className="qualification__subtitle">CODEPLAY</span>
                                <span className="qualification__description">Project Management, Front-End Development</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Mar 2022 - Oct 2024 • 2 yrs 8 mos
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
                                <h3 className="qualification__title">Software Developer</h3>
                                <span className="qualification__subtitle">CODEPLAY</span>
                                <span className="qualification__description">Front-End Development</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Apr 2021 - Feb 2022 • 11 mos
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}