import React from 'react';
import './footer.css';

export default function Footer(){
    return(
      <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">William</h1>

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

            <div className="footer__social">
                
            <a href="https://www.whatsapp.com/" className="footer__social-link" target='_blank'>
            <i className="bx bxl-whatsapp"></i>
            </a>

            <a href="https://www.instagram.com/" className="footer__social-link" target='_blank'>
            <i className="bx bxl-instagram"></i>
            </a>

            <a href="https://github.com/" className="footer__social-link" target='_blank'>
            <i className="bx bxl-github"></i>
            </a>

            <a href="https://twitter.com/" className="footer__social-link" target='_blank'>
            <i className="bx bxl-twitter"></i>
            </a>

            </div>

            <span className='footer__copy'>&#169; Wil1756. All rights reserved.</span>
        </div>
      </footer>
    );
}