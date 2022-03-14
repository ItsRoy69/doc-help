import React from 'react';
import './Navbar.css'
// import { Link } from 'react-router-dom';

import { BrowserRouter as Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
            <div style={{paddingLeft: "40px", paddingRight: "90px" }} >
                <nav className="navbar navbar-expand-lg navbar-light " >
                    <div className="container-fluid">
                        <h3 className="navbar-brand">DocTalk</h3>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-ul">
                                <li className="nav-item home" >
                                    <Link to={"/"} className="navbar-link">Home</Link>
                                </li>

                                <li class="nav-item dropdown home">
                                    <p className="navbar-link dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Donors</p>

                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li style={{ margin: "0px" }} ><a class="dropdown-item" href="/medssupply">Meds Suppliers</a></li>
                                        <li style={{ margin: "0px" }} ><a class="dropdown-item" href="/ambulanceprovider">Ambulance Providers</a></li>
                                        <li style={{ margin: "0px" }} ><a class="dropdown-item" href="/plasma">Plasma Donors</a></li>
                                        <li style={{ margin: "0px" }} ><a class="dropdown-item" href="/oxygensupply">Oxygen Suppliers</a></li>
                                        <li style={{ margin: "0px" }} ><a class="dropdown-item" href="/hospitalbeds">Hospital Beds</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item home" >
                                    <Link to={"/termsandcondition"} className="navbar-link">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
  );
};

export default Navbar;
