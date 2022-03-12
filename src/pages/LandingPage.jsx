import React from 'react';
import bannermed from '../images/illustration1.png';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
      <div className="banner" id="banner">
        <div className="banner-image">
          <img src={bannermed} alt="bannerimg" />
        </div>
        <div className="banner-content">
          <h1 className="banner__text">Some Tagline here</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <div className="banner__input">
            <div className="banner__up">
              <button type="button">Sign Up</button>
            </div>
            <div className="banner__in">
              <button type="button">Sign In</button>
            </div>
          </div>
        </div>


      </div>
  )
}

export default LandingPage
