import React from 'react';
import Footer from '../components/Footer/Footer';
import PageNavbar from '../components/Navbar/PageNavbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
const medssuppliercontact = () => {
  return (
      <div className="medssuppliercontact">
          <PageNavbar/>
          <div className="container mt-5 p-4">
            <form className="border border-success border-4 rounded-3 p-4 mb-5">
                <h1 className="display-6 fw-bold mark text-center mb-5">
                    Add a COVID-19 Meds/Injection Supplier Contact
                </h1>

                <div className="form mb-4">
                    <label for="inputState" className="form-label"><b>Medicine / Injection</b></label>
                    <select id="inputState" className="form-select p-2">
                        <option selected>Select the Medicine / Injection that you Provided</option>
                        <option>Remdesivir</option>
                        <option>Fabiflu</option>
                        <option>Favipiravir</option>
                        <option>Tocilizumab</option>
                        <option>All COVID-19 Medicines</option>
                        <option>Vaccine</option>
                    </select>
                </div>
            
                <div className="form mb-4">
                    <label for="floatingInput" className="p-1"><b>Phone Number *</b></label>
                    <input type="text" maxlength="10" className="form-control" id="floatingInput" placeholder="10 Digits only..." />
                </div>

                <div className="form mb-4">
                    <label for="floatingInput" className="p-1"><b>Alternate Phone Number</b></label>
                    <input type="text" maxlength="10" className="form-control" id="floatingInput" placeholder="Secondary Mobile No..." />
                </div>

                <div className="form mb-4">
                    <label for="floatingInput" className="p-1"><b>Address (optional)</b></label>
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
                
                <Link to="/medssupply" className="d-grid gap-2 col-12 mx-auto w-80 btn btn-success"  role="button">
                    View All Meds/Injection Suppliers
                </Link>
            </form>
        </div>

          <Footer/>
      </div>
  );
};

export default medssuppliercontact;
