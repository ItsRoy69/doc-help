import React from 'react';
import './Info.css'
import { BrowserRouter as Route,Link } from "react-router-dom";

import service1 from '../../images/service-1.png';
import service2 from '../../images/service-2.png';
import service3 from '../../images/service-3.png';
import service4 from '../../images/service-4.png';
import service5 from '../../images/service-5.png';
import arrow from '../../images/up-arrow.png';


const Info = () => {

  return (
      <>
        <div className="info"  style={{"background-color": "#b3cfe4"}}>
          <h1>Donate Plasma</h1>
          <div className="infos">
            <div className="inforight">
              <div className="headtext">
                <h2>Donate Plasma</h2>
              </div>
              <div className="paratext">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </div>
              <button>
                <Link className="input" to="/plasmadonorcontact">Add a Plasma Donor</Link>
              </button>
            </div>
              <img src={service1} alt="serviceimg"/>
          </div>

          <div className="infos">
            <img src={service2} alt="serviceimg"/>
            <div className="infoleft">
              <div className="headtext">
                <h2>Hospital Beds</h2>
              </div>
              <div className="paratext">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </div>
              <button>
                <Link className="input" to="/hospitalbedcontact">Add a Hospital</Link>
              </button>
            </div>
          </div>

          <div className="infos">
            <div className="inforight">
              <div className="headtext">
                <h2>Medicine Suppliers</h2>
              </div>
              <div className="paratext">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </div>
              <button>
                <Link className="input" to="/medssupplycontact">Add a Medicine</Link>
              </button>
            </div>
              <img src={service4} alt="serviceimg"/>
          </div>

          <div className="infos">
            <img src={service3} alt="serviceimg"/>
            <div className="infoleft">
              <div className="headtext">
                <h2> Oxygen Suppliers</h2>
              </div>
              <div className="paratext">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </div>
              <button>
                <Link className="input" to="/oxygensupplycontact">Add a Oxygen Supplier</Link>
              </button>
            </div>
          </div>

          <div className="infos">
            <div className="inforight">
              <div className="headtext">
                <h2>Ambulance Service Providers</h2>
              </div>
              <div className="paratext">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </div>
              <button>
                <Link className="input" to="/ambulanceprovidercontact">Add a Ambulance Provider</Link>
              </button>
            </div>
              <img src={service5} alt="serviceimg"/>
          </div>

        </div>

        <div className="up__button col-18 d-flex justify-content-around">
          <a href="/#" className="text-white"><img src={arrow}  alt="arrowimg"/></a>
        </div>
      </>
  );
};

export default Info;
