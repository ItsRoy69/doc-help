import React from 'react';
import Footer from '../components/Footer/Footer';
import PageNavbar from '../components/Navbar/PageNavbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
const hospitalbedcontact = () => {
  return (
      <div className="hospitalbedcontact">
          <PageNavbar/>
          <div className="container mt-5 p-4">
            <form className="border border-secondary border-4 rounded-3 p-4 mb-5">
                <h1 className="display-6 fw-bold mark text-center mb-5">
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
                    <input type="text" maxlength="10" className="form-control" id="floatingInput" placeholder="10 Digits only..." />
                </div>

                <div className="form mb-4">
                    <label for="floatingInput" className="p-1"><b>Address</b></label>
                    <input type="text" className="form-control" id="floatingInput" placeholder="New Sangvi, Pune"/>
                </div>

                <div className="form mb-4">
                    <label for="inputState" className="form-label"><b>Choose your City *</b></label>
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
                    <label for="floatingInput" className="p-1"><b>Number of ICU Beds Available *</b></label>
                    <input type="number" className="form-control" id="floatingInput" placeholder="Only Digits..."/>
                </div>

                <div className="form mb-4">
                    <label for="floatingInput" className="p-1"><b>Number of OXYGEN Beds Available *</b></label>
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

                <a className="d-grid gap-2 col-12 mx-auto w-80 btn btn-primary mb-3 border border-none" href="#" role="button" type="submit" style={{"background-color": "#650013"}}>
                    Submit
                </a>

                <Link to="/hospitalbeds" className="d-grid gap-2 col-12 mx-auto w-80 btn btn-secondary"  role="button">
                    View All Available Hospitals
                </Link>
            </form>
        </div>


          <Footer/>
      </div>
  );
};

export default hospitalbedcontact;
