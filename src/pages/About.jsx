import React from 'react';
import bannermed from '../images/illustration1.png';
import services1 from '../images/services1.png';
import services2 from '../images/services2.png';
import services3 from '../images/services3.jpg';
import services4 from '../images/services4.png';
import svg__wave from '../images/svgwave.png';
import '../styles/About.css';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="banner" id="banner">
        <div className="banner-content">
          <h1 className="banner__text">About Us</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <div className="banner-image">
          <img src={bannermed} alt="bannerimg" />
        </div>
      </div>
      <div className="abouts" id="abouts">
        <div className="about__heading">
          <h1>About Team</h1>
        </div>
        <div className="about__boxes">
          <div className="about__box">
            <div className="about__boximg">
              <img src={services1} alt="servicesimg" />
            </div>
            <h1>Tamal Das</h1>
            <p>Connect through Zoom/Gmeet</p>
          </div>
          <div className="about__box">
            <div className="about__boximg">
              <img src={services2} alt="aboutsimg" />
            </div>
            <h1>Jyotirmoy Roy</h1>
            <p>Confirmed appoinments</p>
          </div>
          <div className="about__box">
            <div className="about__boximg">
              <img src={services3} alt="aboutsimg" />
            </div>
            <h1>Sweta Karar</h1>
            <p>Essentials at your doorstep</p>
          </div>
          <div className="about__box">
            <div className="about__boximg">
              <img src={services4} alt="aboutsimg" />
            </div>
            <h1>Parna Chowdhury</h1>
            <p>Essentials at your doorstep</p>
          </div>
        </div>
      </div>
      <div className="waves">
        <img src={svg__wave} alt="aboutsimg" />
      </div>
    </>
  )
}

export default About
