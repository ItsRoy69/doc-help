import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.png';
import pic3 from '../images/pic3.jpg';
import illustration1 from '../images/illustration1.png';
import './contact.css';

const contact = () => {
  return (
    <>
      <Navbar/>
        <div className="about">
          <h1>About Us</h1>
          <div className="about__boxes">
            <div className="about__box">
              <div className="about__boximg">
                <img src={pic2} alt="servicesimg" />
              </div>
              <h1>Tamal Das</h1>
              <p>Backend Developer</p>
            </div>
            <div className="about__box">
              <div className="about__boximg">
                <img src={pic1} alt="aboutsimg" />
              </div>
              <h1>Jyotirmoy Roy</h1>
              <p>Team Lead & Developer</p>
            </div>
            <div className="about__box">
              <div className="about__boximg">
                <img src={pic3} alt="aboutsimg" />
              </div>
              <h1>Parna Chowdhury</h1>
              <p>Designer & Technical Writer</p>
            </div>
          </div>

          <div className="contact" id="Contact">
                <div className="contact__box">
                  <div className="contact__meta">
                    <h1>Contact Us</h1>
                    <p>You can contact us via mail</p>
                  </div>
                  <div className="boxes">
                    <div className="input__box">
                       <input type="text" className="contact name" placeholder="Your name *" />
                       <input type="text" className="contact email" placeholder="Your Email *" />
                       <input type="text" className="contact subject" placeholder="Write a Subject" />
                       <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                       <a href="mailto:jyotirmoyroy649@gmail.com"><button className="btn contact pointer" type="submit">Submit</button></a>
                    </div>
                    <div className="image">
                        <img src={illustration1} alt="" className="contact__img" />
                    </div>
                  </div>
                </div>
          </div>
        </div>
      <Footer/>
    </>
  );
};

export default contact;
