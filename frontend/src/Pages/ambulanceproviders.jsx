import React from 'react';
import Footer from '../components/Footer/Footer';
import PageNavbar from '../components/Navbar/PageNavbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
const ambulanceproviders = () => {
  return (
      <div className="ambulanceproviders">
          <PageNavbar/>
          <div class="container pt-5">
                <p class="display-6 fw-bold m-auto">Available Ambulance Service Providers</p>
                <br/>
                <p class="lead m-auto">
                    List of People’s who can provide Ambulance Service for the patients in need.
                </p>
            </div>
    
            <div class="container">
                <div class="row">
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-3 mb-4 p-3">
                        <a class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Your City from the dropdown
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                            <li><a class="dropdown-item active" href="#">Mumbai</a></li>
                            <li><a class="dropdown-item" href="#">Delhi</a></li>
                            <li><a class="dropdown-item" href="#">Bangalore</a></li>
                            <li><a class="dropdown-item" href="#">Ahmedabad</a></li>
                            <li><a class="dropdown-item" href="#">Hyderabad</a></li>
                            <li><a class="dropdown-item" href="#">Chennai</a></li>
                            <li><a class="dropdown-item" href="#">Kolkata</a></li>
                            <li><a class="dropdown-item" href="#">Surat</a></li>
                            <li><a class="dropdown-item" href="#">Pune</a></li>
                            <li><a class="dropdown-item" href="#">Jaipur</a></li>
                            <li><a class="dropdown-item" href="#">Lucknow</a></li>
                            <li><a class="dropdown-item" href="#">Indore</a></li>
                            <li><a class="dropdown-item" href="#">Thane</a></li>
                            <li><a class="dropdown-item" href="#">Agra</a></li>
                            <li><a class="dropdown-item" href="#">Ghaziabad</a></li>
                        </ul>
    
                        <a class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop" href="#" id="refresh-button" role="button">
                            Refresh Page
                        </a>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Page Status</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Page Refreshed...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Okay</button>
                    </div>
                </div>
                </div>
            </div>
    
          
            <div class="container">
                <div class="table-responsive">
                    <table class="table table-hover table-bordered border-danger">
                        <thead class="table text-white" style={{"background-color": "#650013"}}>
                            <th>Driver Name</th>
                            <th>Mobile No</th>
                            <th>Address</th>
                            <th>Ambulance Number</th>
                        </thead>
        
                        <tbody>
                            <tr>
                                <td>Ramesh D</td>
                                <td>1234567890</td>
                                <td>Kothrud, Pune</td>
                                <td>MH-12 AB 4563</td>
                            </tr>
                            <tr>
                                <td>Jay S</td>
                                <td>1234567890</td>
                                <td>Baner, Pune</td>
                                <td>MH-12 HF 9088</td>
                            </tr>
                            <tr>
                                <td>Robin</td>
                                <td>1234567890</td>
                                <td>Dadar, Mumbai</td>
                                <td>MH-01 OP 7677</td>
                            </tr>
                            <tr>
                                <td>Sunil P</td>
                                <td>1234567890</td>
                                <td>Bandra, Mumbai</td>
                                <td>MH-01 MN 5644</td>
                            </tr>
                            <tr>
                                <td>Ramesh D</td>
                                <td>1234567890</td>
                                <td>Kothrud, Pune</td>
                                <td>MH-12 AB 4563</td>
                            </tr>
                            <tr>
                                <td>Jay S</td>
                                <td>1234567890</td>
                                <td>Baner, Pune</td>
                                <td>MH-12 HF 9088</td>
                            </tr>
                            <tr>
                                <td>Robin</td>
                                <td>1234567890</td>
                                <td>Dadar, Mumbai</td>
                                <td>MH-01 OP 7677</td>
                            </tr>
                            <tr>
                                <td>Sunil P</td>
                                <td>1234567890</td>
                                <td>Bandra, Mumbai</td>
                                <td>MH-01 MN 5644</td>
                            </tr>
                            <tr>
                                <td>Ramesh D</td>
                                <td>1234567890</td>
                                <td>Kothrud, Pune</td>
                                <td>MH-12 AB 4563</td>
                            </tr>
                            <tr>
                                <td>Jay S</td>
                                <td>1234567890</td>
                                <td>Baner, Pune</td>
                                <td>MH-12 HF 9088</td>
                            </tr>
                            <tr>
                                <td>Robin</td>
                                <td>1234567890</td>
                                <td>Dadar, Mumbai</td>
                                <td>MH-01 OP 7677</td>
                            </tr>
                            <tr>
                                <td>Sunil P</td>
                                <td>1234567890</td>
                                <td>Bandra, Mumbai</td>
                                <td>MH-01 MN 5644</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    
                <p class="lead mt-5">To Share any Information related to Ambulance Service Providers</p>
    
                <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-3 mb-3">
                    <Link to="/ambulanceprovidercontact" class="btn btn-danger mb-5"  role="button">
                        Click Here to ADD Information about Ambulance Service Provider
                    </Link>
                </div>
            </div>

          <Footer/>
      </div>
  );
};

export default ambulanceproviders;
