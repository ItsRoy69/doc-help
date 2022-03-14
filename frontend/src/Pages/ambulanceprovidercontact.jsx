import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const ambulanceprovidercontact = () => {
  return (
    <><Navbar/>
    <div className="medssuppliercontact" style={{"background-color": "#b3cfe4"}}>
     <div className="container mt-1 p-4">
      <form className="border p-4 " style={{"background-color": "#b3cfe4"}}>
        <h1 className="display-6 fw-bold mark text-center mb-5">
                    Add a COVID-19 Ambulance Provider Contact
                </h1>

                <div className="form mb-4">
                    <label for="floatingInput" className="p-1"><b>Driver Name</b></label>
                    <input type="text" className="form-control" id="floatingInput" />
                </div>

                <div className="form mb-4">
                    <label for="floatingInput" className="p-1"><b>Phone Number *</b></label>
                    <input type="text" maxlength="10" className="form-control" id="floatingInput" placeholder="10 Digits only..." />
                </div>

                <div className="form mb-4">
                    <label for="floatingInput" className="p-1"><b>Address *</b></label>
                    <input type="text" className="form-control" id="floatingInput" placeholder="New Sangvi, Pune"/>
                </div>

                <div className="form mb-4">
                    <label for="inputState" className="form-label p-1"><b>Choose your City *</b></label>
                    <select id="inputState" className="form-select p-2">
                        <option selected>Select City</option>
                        <option>Mumbai</option>
                        <option>Delhi</option>
                        <option>Bangalore</option>
                        <option>Ahmedabad</option>
                        <option>Hyderabad</option>
                        <option>Chennai</option>
                        <option>Kolkata</option>
                        <option>Surat</option>
                        <option>Pune</option>
                        <option>Jaipur</option>
                        <option>Lucknow</option>
                        <option>Indore</option>
                        <option>Thane</option>
                        <option>Agra</option>
                        <option>Ghaziabad</option>
                    </select>
                </div>

                <div className="form mb-4">
                    <label for="floatingInput" className="p-1"><b>Ambulance Number *</b></label>
                    <input type="text" className="form-control" id="floatingInput" placeholder="MH-12 AB 1001" />
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

                <a className="d-grid gap-2 col-12 mx-auto w-80 btn btn-primary mb-3 border border-none" href="#" role="button" type="submit" style={{"background-color": "#650013"}}>
                    Submit
                </a>

                <Link to="/ambulanceprovider" className="d-grid gap-2 col-12 mx-auto w-80 btn btn-danger"  role="button">
                    View All Ambulance Service Providers
                </Link>
            </form>
        </div>

          <Footer/>
      </div>
      </>
  );
};

export default ambulanceprovidercontact;
