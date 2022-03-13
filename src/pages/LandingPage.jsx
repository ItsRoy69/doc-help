import React from 'react';
import bannermed from '../images/illustration1.png';
import services1 from '../images/services1.png';
import services2 from '../images/services2.png';
import services3 from '../images/services3.jpg';
import services4 from '../images/services4.png';
import services5 from '../images/services5.png';
import services6 from '../images/services6.png';
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
      <>
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
        <div className="Services" id="Services">
          <div className="service__heading">
            <h1>Services</h1>
          </div>
          <div className="service__boxes">
            <div className="service__box">
              <div className="service__boximg">
                <img src={services1} alt="servicesimg" />
              </div>
              <h1>Video Consultation</h1>
              <p>Connect through Zoom/Gmeet</p>
            </div>
            <div className="service__box">
              <div className="service__boximg">
                <img src={services2} alt="servicesimg" />
              </div>
              <h1>Doctors Near You</h1>
              <p>Confirmed appoinments</p>
            </div>
            <div className="service__box">
              <div className="service__boximg">
                <img src={services3} alt="servicesimg" />
              </div>
              <h1>Medicines</h1>
              <p>Essentials at your doorstep</p>
            </div>
            <div className="service__box">
              <div className="service__boximg">
                <img src={services4} alt="servicesimg" />
              </div>
              <h1>Lab Tests</h1>
              <p>Sample pickup at your home</p>
            </div>
            <div className="service__box">
              <div className="service__boximg">
                <img src={services5} alt="servicesimg" />
              </div>
              <h1>Surgeries</h1>
              <p>Safe and trusted surgery centers</p>
            </div>
            <div className="service__box">
              <div className="service__boximg">
                <img src={services6} alt="servicesimg" />
              </div>
              <h1>Hospitals Near You</h1>
              <p>Covid/Non-Covid Hospitals near you</p>
            </div>
          </div>
        </div>
        <div className="faqs" id="faqs">
          <div className="faqs__heading">
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className="faqs__boxes">
            <div className="faqs__box">
              <span><b>Comprehensive medical directory, </b>
               with detailed, verified information about more than a lakh doctor partners across the country</span>
            </div>
            <div className="faqs__box">
              <span><b>Hospitals Near You, </b>
               at over 9,000 leading hospitals and clinics with doctors who use Practo Prime</span>
            </div>
            <div className="faqs__box">
              <span><b>Online consultation, </b>
               with trusted doctors across 20+ specialities</span>
            </div>
            <div className="faqs__box">
              <span><b>Plus, subscription-based health plans,</b>
               that provide unlimited online consultations* with doctors 24*7*365</span>
            </div>
            <div className="faqs__box">
              <span><b>Ray, </b>
               Practo’s award-winning practice management software, which is used by 10,000+ clinics</span>
            </div>
            <div className="faqs__box">
              <span><b>Insta, </b>
               a full-stack HIMS solution, which is trusted by 500+ clients across 1,200+ facilities</span>
            </div>
            <div className="faqs__box">
              <span><b>Diagnostic Tests through Practo Associate Labs, </b>
               to get samples collected from the comfort and safety of one’s home</span>
            </div>
            <div className="faqs__box">
              <span><b>Medicine delivery, </b>
               by a network of verified pharmacies across the country</span>
            </div>
          </div>
        </div>
      </>
  )
}

export default LandingPage
