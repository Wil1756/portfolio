import React from 'react';

export default function Footer(){
    return(
      <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Smith</h1>

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
                
            <a href="https://www.whatsapp.com/" className="home__social-icon" target='_blank'>
            <i className="uil uil-whatsapp"></i>
            </a>

            <a href="https://www.instagram.com/" className="home__social-icon" target='_blank'>
            <i className="uil uil-instagram"></i>
            </a>

            <a href="https://github.com/" className="home__social-icon" target='_blank'>
            <i className="uil uil-github"></i>
            </a>

            <a href="https://twitter.com/" className="home__social-icon" target='_blank'>
            <i className="uil uil-twitter"></i>
            </a>
            
            </div>
        </div>
      </footer>
    );
}