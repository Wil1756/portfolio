import React, { useState, useCallback, useEffect } from 'react';
import "./services.css";

export default function Services() {
    const [activeModal, setActiveModal] = useState(null);

    const toggleModal = useCallback((index) => {
        setActiveModal(current => current === index ? null : index);
    }, []);

    // Close modal on escape key
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) setActiveModal(null);
        };
        window.addEventListener('keydown', handleEsc);
        
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (activeModal !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [activeModal]);

    const handleModalClick = useCallback((e) => {
        if (e.target.classList.contains('services__modal')) {
            setActiveModal(null);
        }
    }, []);

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-brackets-curly services__icon"></i>
                        <h3 className="services__title">Frontend <br />Development</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleModal(1)}>
                        View More <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div 
                        className={activeModal === 1 ? "services__modal active-modal" : "services__modal"}
                        onClick={handleModalClick}
                    >
                        <div className="services__modal-content">
                            <i onClick={() => toggleModal(null)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Frontend Development</h3>
                            <p className="services__modal-description">
                                Experienced in building responsive and performant web applications using modern technologies.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">React & TypeScript development</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Responsive web design</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">State management with Redux</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Modern UI/UX implementation</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-server-network services__icon"></i>
                        <h3 className="services__title">Backend <br />Development</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleModal(2)}>
                        View More <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div 
                        className={activeModal === 2 ? "services__modal active-modal" : "services__modal"}
                        onClick={handleModalClick}
                    >
                        <div className="services__modal-content">
                            <i onClick={() => toggleModal(null)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Backend Development</h3>
                            <p className="services__modal-description">
                                Specialized in building robust and scalable backend solutions with modern technologies.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">RESTful API development</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Node.js & Express.js</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Database design & management</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">API documentation & testing</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-mobile-android services__icon"></i>
                        <h3 className="services__title">Mobile <br />Development</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleModal(3)}>
                        View More <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div 
                        className={activeModal === 3 ? "services__modal active-modal" : "services__modal"}
                        onClick={handleModalClick}
                    >
                        <div className="services__modal-content">
                            <i onClick={() => toggleModal(null)} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Mobile Development</h3>
                            <p className="services__modal-description">
                                Creating cross-platform mobile applications with modern frameworks and best practices.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">React Native development</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Cross-platform solutions</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Native features integration</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Performance optimization</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}