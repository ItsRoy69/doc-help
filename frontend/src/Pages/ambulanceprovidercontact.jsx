import React, { useContext } from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Doccontext from '../context/Doccontext';

const Ambulanceprovidercontact = () => {


  const context = useContext(Doccontext);
  const { ambu, setambu } = context;

  const handleChange = (e) => {
    setambu({ ...ambu, [e.target.name]: e.target.value });


  };

  const handleclick = () => {
    console.log(ambu);
  }
  return (
    <>
      <Navbar />
      <div className="medssuppliercontact" style={{ "background-color": "#59CBE8" }}>
        <div className="container mt-1 p-4">
          <form className="border p-4 " style={{ "background-color": "#b3cfe4" }}>
            <h1 className="display-6 fw-bold mark text-center mb-5" style={{ "background-color": "#b3cfe4" }} onClick={() => { handleclick() }}>
              Add a COVID-19 Ambulance Provider Contact
            </h1>

            <div className="form mb-4">
              <label for="floatingInput" className="p-1"><b>Driver Name</b></label>
              <input type="text" className="form-control" id="floatingInput" name='dname' value={ambu.dname} onChange={handleChange} />
            </div>

            <div className="form mb-4">
              <label for="floatingInput" className="p-1"><b>Phone Number *</b></label>
              <input type="text" maxlength="10" className="form-control" id="floatingInput" placeholder="+91 XXXXXXXXXXXX" name='ph' value={ambu.ph} onChange={handleChange} />
            </div>

            <div className="form mb-4">
              <label for="floatingInput" className="p-1"><b>Address *</b></label>
              <input type="text" className="form-control" id="floatingInput" name='address' value={ambu.address} onChange={handleChange} />
            </div>

            <div className="form mb-4">
              <label for="inputState" className="form-label p-1"><b>Choose your City *</b></label>
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
              <label for="floatingInput" className="p-1"><b>Ambulance Number *</b></label>
              <input type="text" className="form-control" id="floatingInput" placeholder="WB-12 KOL 1001" name='an' value={ambu.an} onChange={handleChange} />
            </div>

            <div className="form-check mb-5">
              <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
              <label className="form-check-label" for="invalidCheck">
                I hereby Agree to Terms and Conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
            <a className="d-grid gap-2 col-8 mx-auto w-80 btn mb-3 border" href="#" role="button" type="submit" style={{ "background-color": "#2FA4FF", "border-radius": "20px" }}>
              Submit
            </a>
            <Link to="/ambulanceprovider" className="d-grid gap-2 col-8 mx-auto w-80 btn" role="button" style={{ "background-color": "#4D77FF", "border-radius": "20px" }}>
              View All Ambulance Service Providers
            </Link>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Ambulanceprovidercontact;
