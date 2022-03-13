import React from 'react';
import PageNavbar from '../components/Navbar/PageNavbar'
import Footer from '../components/Footer/Footer'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
const hospitalbeds = () => {
  return (
      <div className="hospitalbeds">
          <PageNavbar/>
          <div className="container pt-5">
            <p className="display-6 fw-bold m-auto">Available Hospital (ICU and OXYGEN) Beds</p>
            <br/>
            <p className="lead m-auto">
                List of hospitals with beds for COVID-19 Patients.
            </p>
        </div>

        <div className="container">
            <div className="row">
                <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-3 mb-4 p-3">
                    <a className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Your City from the dropdown
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                        <li><a className="dropdown-item active" href="#">Mumbai</a></li>
                        <li><a className="dropdown-item" href="#">Delhi</a></li>
                        <li><a className="dropdown-item" href="#">Bangalore</a></li>
                        <li><a className="dropdown-item" href="#">Ahmedabad</a></li>
                        <li><a className="dropdown-item" href="#">Hyderabad</a></li>
                        <li><a className="dropdown-item" href="#">Chennai</a></li>
                        <li><a className="dropdown-item" href="#">Kolkata</a></li>
                        <li><a className="dropdown-item" href="#">Surat</a></li>
                        <li><a className="dropdown-item" href="#">Pune</a></li>
                        <li><a className="dropdown-item" href="#">Jaipur</a></li>
                        <li><a className="dropdown-item" href="#">Lucknow</a></li>
                        <li><a className="dropdown-item" href="#">Indore</a></li>
                        <li><a className="dropdown-item" href="#">Thane</a></li>
                        <li><a className="dropdown-item" href="#">Agra</a></li>
                        <li><a className="dropdown-item" href="#">Ghaziabad</a></li>
                    </ul>

                   
                    <a className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop" href="#" id="refresh-button" role="button">
                        Refresh Page
                    </a>
                </div>
            </div>
        </div>
        
       
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Page Status</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    Page Refreshed...
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Okay</button>
                </div>
            </div>
            </div>
        </div>

        
        <div className="container">
            <div className="table-responsive">
                <table className="table table-hover table-bordered border-danger">
                    <thead className="table text-white" style={{"background-color":" #650013"}}>
                        <th>Hospital Name</th>
                        <th>Contact Name</th>
                        <th>Phone No</th>
                        <th>Address</th>
                        <th>ICU Beds</th>
                        <th>OXYGEN Beds</th>
                        <th>Time Submitted</th>
                    </thead>
    
                    <tbody>
                        <tr>
                            <td>Sancheti Hospital</td>
                            <td>Prashant Agheda</td>
                            <td>9876543210</td>
                            <td>Pune</td>
                            <td>10</td>
                            <td>100</td>
                            <td>Submitted: 2 days ago (VERIFIED)</td>
                        </tr>
                        <tr>
                            <td>Sharda Clinic</td>
                            <td>Jayant Thakur</td>
                            <td>9876543210</td>
                            <td>Opposite Pournima Towers, Pune 411042</td>
                            <td>30</td>
                            <td>50</td>
                            <td>Submitted: 5 days ago</td>
                        </tr>
                        <tr>
                            <td>Harjeevan Hospital</td>
                            <td>Sania Parmar</td>
                            <td>9876543210</td>
                            <td>Opposite Sarasbagh, Shukrawar Peth, Pune 411002</td>
                            <td>5</td>
                            <td>0</td>
                            <td>Submitted: 2 days ago (VERIFIED)</td>
                        </tr>
                        <tr>
                            <td>Panchsheel Hospital</td>
                            <td>Dhanraj Shetty</td>
                            <td>9876543210</td>
                            <td>Nana Peth, Pune 411042</td>
                            <td>15</td>
                            <td>4</td>
                            <td>Submitted: 6 days ago (VERIFIED)</td>
                        </tr>
                        <tr>
                            <td>Poona Hospital</td>
                            <td>Harita Solanki</td>
                            <td>9876543210</td>
                            <td>Sadashiv Peth, Pune 411030</td>
                            <td>45</td>
                            <td>10</td>
                            <td>Submitted: 4 days ago</td>
                        </tr>
                        <tr>
                            <td>Sahyadri Surya Hospital</td>
                            <td>Jayesh Shankar</td>
                            <td>9876543210</td>
                            <td>Kasba Peth, Pune</td>
                            <td>45</td>
                            <td>10</td>
                            <td>Submitted: 4 days ago</td>
                        </tr>
                        <tr>
                            <td>Wadia Hospital</td>
                            <td>Raj Mahale</td>
                            <td>9876543210</td>
                            <td>Shukrawar Peth, Pune</td>
                            <td>45</td>
                            <td>10</td>
                            <td>Submitted: 5 days ago</td>
                        </tr>
                        <tr>
                            <td>K.E.M. Hospital</td>
                            <td>Raj Mahale</td>
                            <td>9876543210</td>
                            <td>Rasta Peth, Sardar Mudaliar Road, Pune-411001</td>
                            <td>45</td>
                            <td>10</td>
                            <td>Submitted: 2 days ago (VERIFIED)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="lead mt-5">To Share any Information related to Available Hospital Beds</p>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-3 mb-3">
                <Link to="/hospitalbedcontact" className="btn btn-secondary mb-5"  role="button">
                    Click Here to ADD Information about Hospital Beds
                </Link>
            </div>
        </div>
        <Footer/>

      </div>
  );
};

export default hospitalbeds;
