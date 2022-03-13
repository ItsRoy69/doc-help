//* We are using bootstrap navbar

import React from "react";
import "../styles/Navbar.css"

import { Link } from "react-router-dom";

const Navbar = (props) => {

    return (
        <>
            <div style={{paddingLeft: "60px", paddingRight: "90px" }} >
                <nav className="navbar navbar-expand-lg navbar-light " >
                    <div className="container-fluid">
                        {/* //* navbar brand */}

                        <h3 className="navbar-brand">Medical Logo</h3>

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

                                <li className="nav-item home" >
                                    <Link to={"/about"} className="navbar-link">About</Link>
                                </li>

                                <li class="nav-item dropdown home">
                                    <p className="navbar-link dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Pages</p>


                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li style={{ margin: "0px" }} ><a class="dropdown-item" href="/">Action</a></li>
                                        <li style={{ margin: "0px" }} ><a class="dropdown-item" href="/">Another action</a></li>
                                        <li style={{ margin: "0px" }} ><a class="dropdown-item" href="/">Something else here</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item home" >
                                    <Link to={"/about-us"} className="navbar-link">Contact Us</Link>

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
