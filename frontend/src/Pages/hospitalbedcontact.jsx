import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const hospitalbedcontact = () => {
  return (
    <>
      <Navbar/>
        <div className="hospitalbedcontact" style={{"background-color": "#59CBE8"}}>
         <div className="container mt-1 p-4">
          <form className="border p-4 " style={{"background-color": "#b3cfe4"}}>
           <h1 className="display-6 fw-bold mark text-center mb-5" style={{"background-color": "#b3cfe4"}}>
            Share Information About Available Hospital Beds
           </h1>

           <div className="form mb-4">
            <label for="floatingInput" className="p-1"><b>Hospital Name *</b></label>
            <input type="text" className="form-control" id="floatingInput" />
           </div>

           <div className="form mb-4">
            <label for="floatingInput" className="p-1"><b>Contact Person Name *</b></label>
            <input type="text" className="form-control" id="floatingInput" />
           </div>

           <div className="form mb-4">
            <label for="floatingInput" className="p-1"><b>Phone Number *</b></label>
            <input type="text" maxlength="10" className="form-control" id="floatingInput" placeholder="+91 XXXXXXXXXXXX" />
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
            <label for="floatingInput" className="p-1"><b>Number of Beds Available *</b></label>
            <input type="number" className="form-control" id="floatingInput" placeholder="Only Digits..."/>
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
           <Link to="/hospitalbeds" className="d-grid gap-2 col-8 mx-auto w-80 btn"  role="button" style={{"background-color": "#4D77FF","border-radius": "20px"}}>
             View All Hospital Bed Providers
           </Link>
          </form>
         </div>
        <Footer/>
        </div>
    </>
  );
};

export default hospitalbedcontact;
