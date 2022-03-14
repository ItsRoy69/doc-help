import React from 'react';
import illustration from './illustration1.png'
import './FrontPage.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const FrontPage = () => {
  return (
    <div className="frontpage">
    <div className="container-fluid">
        <div className="container">
            <div className="banner row flex-lg-row-reverse justify-content-end align-items-flex-end ">
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 pb-5 py-3">
                    <img src={illustration} className="mx-auto rounded img-fluid d-none d-sm-none d-md-3-none d-lg-block d-xl-block" alt="Image"/>
                </div>

                <div className="banners col-lg-8 ">
                    <h1 className="head display-4 fw-bold lh-1 mb-3">DocTalk</h1>
                    <p className="lead">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>

                    <div className="banner__input">
                      <div className="banner__up">
                        <a href="#services">
                          <button type="button">Services</button>
                        </a>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    </div>
  );
};

export default FrontPage;
