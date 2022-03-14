import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const plasmadonorcontact = () => {
  return (
    <>
      <Navbar/>
      <div className="plasmadonorcontact" style={{"background-color": "#b3cfe4"}}>
       <div className="container mt-1 p-4">
        <form className="border p-4 " style={{"background-color": "#b3cfe4"}}>
         <h1 className="display-6 fw-bold mark text-center mb-5">
            Add Yourself as a COVID-19 Plasma Donor
         </h1>

         <div className="form mb-4">
          <label for="floatingInput" className="p-1"><b>Name *</b></label>
          <input type="text" className="form-control" id="floatingInput" placeholder="Your Name..."/>
         </div>

         <div className="form mb-4">
          <label for="floatingInput" className="p-1"><b>Phone Number *</b></label>
          <input type="text" maxlength="10" className="form-control" id="floatingInput" placeholder="10 Digits only..."/>
         </div>

         <div className="form mb-4">
          <label for="inputState" className="form-label p-1"><b>Blood Group *</b></label>
           <select id="inputState" className="form-select">
            <option selected>Select your Blood Group</option>
            <option>A +</option>
            <option>A -</option>
            <option>B +</option>
            <option>B -</option>
            <option>O +</option>
            <option>O -</option>
            <option>AB +</option>
            <option>AB -</option>
          </select>
        </div>
        <div className="form mb-4">
          <label for="floatingInput" className="p-1"><b>When you were COVID Affected ? *</b></label>
          <input type="date" className="form-control" id="floatingInput" placeholder="Pick Date"/>
        </div>

        <div className="form mb-4">
          <label for="floatingInput" className="p-1"><b>Address (optional)</b></label>
          <input type="text" className="form-control" id="floatingInput"/>
        </div>

        <div className="form mb-4">
          <label for="inputState" className="form-label"><b>Choose your City *</b></label>
          <select id="inputState" className="form-select p-2">
            <option selected>Kolkata</option>
            <option>Delhi</option>
            <option>Bangalore</option>
            <option>Hyderabad</option>
            <option>Chennai</option>
            <option>Mumbai</option>
          </select>
        </div>

        <div className="form mb-4">
          <label for="floatingInput" className="p-1"><b>Pin Code</b></label>
          <input type="text" maxlength="6" className="form-control" id="floatingInput" placeholder="6 Digits only..."/>
        </div>

        <div className="form-check mb-5">
          <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
          <label className="form-check-label" for="invalidCheck">
            I hereby Agree to Terms and Conditions
          </label>
          <div className="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>
        <a className="d-grid gap-2 col-8 mx-auto w-80 btn mb-3 border" href="#" role="button" type="submit" style={{"background-color": "#2FA4FF","border-radius": "20px"}}>
            Submit
        </a>
        <Link to="/medssupply" className="d-grid gap-2 col-8 mx-auto w-80 btn"  role="button" style={{"background-color": "#4D77FF","border-radius": "20px"}}>
            View All Medicine Suppliers
        </Link>
        </form>
       </div>
       <Footer/>
      </div>
    </>
  );
};

export default plasmadonorcontact;
