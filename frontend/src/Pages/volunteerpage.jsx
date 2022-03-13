import React from 'react';
import PageNavbar from '../components/Navbar/PageNavbar';
import Footer from '../components/Footer/Footer'

const volunteerpage = () => {
  return (
      <div className="volunteerpage">
          <PageNavbar/>
          <div className="px-4 py-5">
            <h1 className="display-5 fw-bold text-center pb-2">Join Us to Help People :)</h1>
            <div className="col-lg-9 mx-auto text-center">
                <p className="lead mb-4">
                    We are very grateful that you want to take out time and volunteer to help us out. 
                    The Duties of the Volunteer will include tasks like Verifying the Details added to
                    the website and also constantly keep updating the details and sharing this
                    website to more and more people.
                </p>
            </div>
            <div className="container col-lg-6 mt-5 p-4">
                <form className="border border-danger border-4 rounded-3 p-4">
                    <h1 className="h3 fw-normal mark text-center mb-5">
                        Fill the form to apply as a Volunteer from Home
                    </h1>
                
                    <div className="form mb-4">
                      <label for="floatingInput" className="p-1"><b>Your Name</b></label>
                      <input type="text" className="form-control" id="floatingInput" placeholder="Your Name..."/>
                    </div>
    
                    <div className="form mb-4">
                      <label for="floatingInput" className="p-1"><b>Phone Number</b></label>
                      <input type="text" maxlength="10" className="form-control" id="floatingInput" placeholder="10 Digits only..."/>
                    </div>
    
                    <div className="form mb-4">
                        <label for="floatingInput" className="p-1"><b>Email Address</b></label>
                        <input type="email" className="form-control" id="floatingInput" placeholder="example@gmail.com"/>
                    </div>
    
                    <div className="form mb-5">
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
    
                    <a className="d-grid gap-2 col-12 mx-auto w-80 btn btn-primary mb-3 border border-none" href="./thank-you-page.html" target="_parent" role="button" type="submit" style={{"background-color": "#650013"}}>
                        Submit
                    </a>
                </form>
            </div>
        </div>

          <Footer/>
      </div>
  );
};

export default volunteerpage;
