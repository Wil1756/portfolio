import React, { useState, useEffect } from 'react';
import "./header.css";

export default function Header(){
    const[Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            const scrollY = window.pageYOffset;

            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute('id');

                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    setActiveNav('#' + sectionId);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <header className="header">
            <nav className="nav container">
                <div className="nav__logo"></div>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                   <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" onClick={()=>setActiveNav('#home')} className={activeNav === '#home'? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about'? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-user nav__icon"></i> About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" onClick={()=>setActiveNav('#skills')} className={activeNav === '#skills'? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-file-alt nav__icon"></i> Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav === '#services'? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-briefcase-alt nav__icon"></i> Services
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio'? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-scenery nav__icon"></i> Portfolio
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact'? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-message nav__icon"></i> Contact
                        </a>
                    </li>
                   </ul>

                   <i className="uil uil-times nav__close" onClick={()=> showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={()=> showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i> 
                </div>
            </nav>
        </header>
    );
}

