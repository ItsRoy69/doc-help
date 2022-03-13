import React from 'react';
import PageNavbar from '../components/Navbar/PageNavbar'
import Footer from '../components/Footer/Footer'
// import Navbar from '../components/Navbar/Navbar'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
const PlasmaDonorList = () => {
  return (
      <div className="plasmadonorlist">
          <PageNavbar/>
          <div className="container pt-5">
            <p className="display-6 fw-bold m-auto">Available Plasma Donors</p>
            <br/>
            <p className="lead m-auto">
                This is a list of people who are recovered from COVID-19 and want to donate their Plasma.
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
                    <thead className="table text-white" style={{"background-color": "	#0d6efd"}}>
                        <th>Name</th>
                        <th>Phone No</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Blood Group</th>
                        <th>Time Submitted</th>
                    </thead>
    
                    <tbody>
                        <tr>
                            <td>Prashant Agheda</td>
                            <td>1234567890</td>
                            <td>Pune</td>
                            <td>New Sangvi</td>
                            <td>O +</td>
                            <td>Submitted: 2 days ago (VERIFIED)</td>
                        </tr>
                        <tr>
                            <td>Rajat Arora</td>
                            <td>1234567890</td>
                            <td>Mumbai</td>
                            <td>Ville Parle</td>
                            <td>O +</td>
                            <td>Submitted: 8 days ago (VERIFIED)</td>
                        </tr>
                        <tr>
                            <td>Julie S</td>
                            <td>1234567890</td>
                            <td>Pune</td>
                            <td>Aundh</td>
                            <td>B +</td>
                            <td>Submitted: 4 days ago</td>
                        </tr>
                        <tr>
                            <td>Aisha Shaikh</td>
                            <td>1234567890</td>
                            <td>Goa</td>
                            <td>Palm Valley</td>
                            <td>O -</td>
                            <td>Submitted: 2 days ago</td>
                        </tr>
                        <tr>
                            <td>Jatin Raj</td>
                            <td>1234567890</td>
                            <td>Pune</td>
                            <td>Kothrud</td>
                            <td>O -</td>
                            <td>Submitted: 8 days ago</td>
                        </tr>
                        <tr>
                            <td>Nick T</td>
                            <td>1234567890</td>
                            <td>Mumbai</td>
                            <td>Dombivali</td>
                            <td>B +</td>
                            <td>Submitted: 1 day ago (VERIFIED)</td>
                        </tr>
                        <tr>
                            <td>Amit Rana</td>
                            <td>1234567890</td>
                            <td>Pune</td>
                            <td>Warje</td>
                            <td>B +</td>
                            <td>Submitted: 6 days ago</td>
                        </tr>
                        <tr>
                            <td>Kashish Banerjee</td>
                            <td>1234567890</td>
                            <td>Pune</td>
                            <td>Warje</td>
                            <td>B +</td>
                            <td>Submitted: 6 days ago</td>
                        </tr>
                        <tr>
                            <td>Anil S</td>
                            <td>1234567890</td>
                            <td>Pune</td>
                            <td>Koregaon Park</td>
                            <td>O +</td>
                            <td>Submitted: 3 days ago (VERIFIED)</td>
                        </tr>
                        <tr>
                            <td>Nayan Shah</td>
                            <td>1234567890</td>
                            <td>Mumbai</td>
                            <td>Kandivali</td>
                            <td>A +</td>
                            <td>Submitted: 2 days ago (VERIFIED)</td>
                        </tr>
                        <tr>
                            <td>Arjun R</td>
                            <td>1234567890</td>
                            <td>Mumbai</td>
                            <td>Boriwali, West</td>
                            <td>B +</td>
                            <td>Submitted: 10 days ago</td>
                        </tr>
                        <tr>
                            <td>Maya J</td>
                            <td>1234567890</td>
                            <td>Pune</td>
                            <td>Pimpri Chinchwad</td>
                            <td>A +</td>
                            <td>Submitted: 2 days ago</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="lead mt-5">To Share your own or any other Plasma Donor's information</p>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-3 mb-3">
                <Link to="/plasmadonorcontact" className="btn btn-primary mb-5" role="button">
                    Click Here to ADD Information about Plasma Donor
                </Link>
            </div>
        </div>


          <Footer/>

      </div>
  );
};

export default PlasmaDonorList;
