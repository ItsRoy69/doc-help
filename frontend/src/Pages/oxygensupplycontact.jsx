import React, { useContext } from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Doccontext from '../context/Doccontext';

const Oxygensupplycontact = () => {

  const context = useContext(Doccontext);
  const { oxy, setoxy } = context;

  const handleChange = (e) => {
    setoxy({ ...oxy, [e.target.name]: e.target.value });

  };

  const handleclick = () => {
    console.log(oxy);
  }
  return (
    <>
      <Navbar />
      <div className="oxygensupplycontact" style={{ "background-color": "#59CBE8" }}>
        <div className="container mt-1 p-4">
          <form className="border p-4 " style={{ "background-color": "#b3cfe4" }}>
            <h1 className="display-6 fw-bold mark text-center mb-5" style={{ "background-color": "#b3cfe4" }} onClick={() => { handleclick() }}>
              Share Oxygen Supplier Information
            </h1>

            <div className="form mb-4">
              <label for="floatingInput" className="p-1"><b>Name *</b></label>
              <input type="text" className="form-control" id="floatingInput" onChange={handleChange} name='name' value={oxy.name} />
            </div>

            <div className="form mb-4">
              <label for="floatingInput" className="p-1"><b>Phone Number *</b></label>
              <input type="text" maxlength="10" className="form-control" id="floatingInput" placeholder="+91 XXXXXXXXXXXX" onChange={handleChange} name='ph' value={oxy.ph} />
            </div>

            <div className="form mb-4">
              <label for="floatingInput" className="p-1"><b>Address *</b></label>
              <input type="text" className="form-control" id="floatingInput" onChange={handleChange} name='address' value={oxy.address} />
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
            <Link to="/oxygensupply" className="d-grid gap-2 col-8 mx-auto w-80 btn" role="button" style={{ "background-color": "#4D77FF", "border-radius": "20px" }}>
              View All Oxygen Suppliers
            </Link>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Oxygensupplycontact;
