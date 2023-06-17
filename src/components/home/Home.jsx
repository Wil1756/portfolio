import React from 'react';
import './home.css';
import Social from './Social';
import UserDetails from './UserDetails';
import ScrollDown from './ScrollDown';


export default function Home(){
    return(
      <section className="home section" id='home'>
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social/>

                <div className='personal__details'>
                <div className="home__img"></div>

                <UserDetails/>
                </div>
            </div>

            <ScrollDown/>
        </div>
      </section>
    );
}