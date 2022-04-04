import React from 'react';
import './Footer.css';
import { BrowserRouter as Route, Link } from "react-router-dom";

const Footer = () => {
  return (
      <div className="footer">
        <div className="container-fluid">
          <div className=" foot">
            <div className="footer__text">
              <Link className="input">COPYRIGHT@DOCTALK</Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;
