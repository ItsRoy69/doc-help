import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
const InfoCardLeft = ({title,content,btninfo,image,link}) => {
  return (
      <div className="infocardleft">
             <div class="container-fluid p-5">
        <div class="container">
            <div class="row contact-section">
                <div class="col-xl-7 col-lg-7 col-md-6 col-sm-12 order-md-2">
                    <h2 class="mb-4 display-6 lh-1 fw-bold">
                        {title}
                    </h2>
                    <p class="lead">
                        {content}
                    </p>
                    <Link to={link} class="btn btn-secondary btn-lg px-4 mt-2 mb-5" role="button">
                        {btninfo}
                    </Link>
                </div>
                <div class="col-xl-5 col-lg-5 col-md-6 col-sm-12 order-md-1">
                    <img src={image} class="contact-section-image shadow-lg rounded img-fluid mx-auto d-none d-sm-none d-md-block d-lg-block d-xl-block" alt="Add Details about Plasma Donor" width="500" height="500" />
                </div>
            </div>
        </div>
    </div>

      </div>
  );
};

export default InfoCardLeft;
