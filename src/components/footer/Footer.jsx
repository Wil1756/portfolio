import React from 'react';
import './footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__content">
                    <div className="footer__links">
                        <h3 className="footer__subtitle">Quick Links</h3>
                        <ul className="footer__list">
                            <li>
                                <a href="#about" className="footer__link">About</a>
                            </li>
                            <li>
                                <a href="#portfolio" className="footer__link">Projects</a>
                            </li>
                            <li>
                                <a href="#testimonial" className="footer__link">Testimonial</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__social-section">
                        <h3 className="footer__subtitle">Connect With Me</h3>
                        <div className="footer__social">
                            <a href="https://www.whatsapp.com/" className="footer__social-link" target='_blank' rel="noreferrer">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a href="https://www.instagram.com/" className="footer__social-link" target='_blank' rel="noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://github.com/" className="footer__social-link" target='_blank' rel="noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://twitter.com/" className="footer__social-link" target='_blank' rel="noreferrer">
                                <i className="fab fa-x-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <span className='footer__copy'>&#169; William. All rights reserved.</span>
            </div>
        </footer>
    );
}