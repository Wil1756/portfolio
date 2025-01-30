import React from 'react'

export default function Social(){
    return(
        <div className="home__social">
            <a href="https://www.whatsapp.com/" className="home__social-icon" target='_blank' rel="noreferrer">
            <i className="fab fa-whatsapp"></i>
            </a>

            <a href="https://www.instagram.com/" className="home__social-icon" target='_blank' rel="noreferrer">
            <i className="fab fa-instagram"></i>
            </a>

            <a href="https://github.com/" className="home__social-icon" target='_blank' rel="noreferrer">
            <i className="fab fa-github"></i>
            </a>

            <a href="https://twitter.com/" className="home__social-icon" target="_blank" rel="noreferrer">
            <i className="fab fa-x-twitter"></i>
            </a>
        </div>
    );
}