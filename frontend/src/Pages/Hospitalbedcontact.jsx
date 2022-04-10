import React, { useContext } from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { Link } from "react-router-dom";
import Doccontext from '../context/Doccontext';
import { uploadHospital } from '../service/DoctalkApi';
import axios from 'axios';

const Hospitalbedcontact = () => {

  const context = useContext(Doccontext);
  const { hpbed, sethpbed } = context;

  const handleChange = (e) => {
    sethpbed({ ...hpbed, [e.target.name]: e.target.value });

  };



  const handleclick = async (e) => {
    const hpdata = await axios.post(`http://localhost:8000/hospitals`,hpbed).then((res) => {
      console.log(res);
      alert("DATA POSTED!");
    }).catch((e) => {
      alert("Data not Posted");
      console.log(e);
    });
    console.log(hpdata);

  }
  return (
    <>
      <Navbar />
      <div className="hospitalbedcontact" style={{ "background-color": "#C9ECFF" }}>
        <div className="container mt-1 p-4">
          <form className="border p-4 " style={{ "background-color": "#b3cfe4" }}>
            <h1 className="display-6 fw-bold mark text-center mb-5" style={{ "background-color": "#b3cfe4" }} >
              Share Information About Available Hospital Beds
            </h1>

            <div className="form mb-4">
              <label for="floatingInput" className="p-1"><b>Hospital Name *</b></label>
              <input type="text" className="form-control" id="floatingInput" name='Hospital_Name' value={hpbed.Hospital_Name} onChange={handleChange} />
            </div>

            <div className="form mb-4">
              <label for="floatingInput" className="p-1"><b>Contact Person Name *</b></label>
              <input type="text" className="form-control" id="floatingInput" name='Person_Name' value={hpbed.Person_Name} onChange={handleChange} />
            </div>

            <div className="form mb-4">
              <label for="floatingInput" className="p-1"><b>Phone Number *</b></label>
              <input type="text" maxlength="10" className="form-control" id="floatingInput" placeholder="+91 XXXXXXXXXXXX" name='Phone_no' value={hpbed.Phone_no} onChange={handleChange} />
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
              <input type="number" className="form-control" id="floatingInput" placeholder="Only Digits..." name='ICU_Beds' value={hpbed.beds} onChange={handleChange} />
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

            <button className="button" type="submit" onClick={handleclick}>
              Submit
            </button>
            <Link to="/hospitalbeds">
              <button className="buttoned" href="#" type="submit">
                View All Hospital Bed Providers
              </button>
            </Link>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Hospitalbedcontact;
