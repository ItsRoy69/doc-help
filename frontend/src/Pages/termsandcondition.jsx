import React from 'react';
import Footer from '../components/Footer/Footer';
import PageNavbar from '../components/Navbar/PageNavbar';

const termsandcondition = () => {
  return (
      <div className="termsandcondition">
          <PageNavbar/>
          <div class="container mt-4 mb-4 p-4">
            <h1 class="display-6 fw-bold text-center mb-5">
                Terms & Conditions
                <hr/>
            </h1>

            <ul class="list-group list-group-numbered mb-5">
                <li class="lead list-group-item list-group-flush list-group-item-info p-3">
                    Anyone can submit information to this website which is going to be helpful to the people of a particular city.
                </li>
                <li class="lead list-group-item list-group-flush list-group-item-info p-3">
                    The information can be submitted for plasma donors, oxygen suppliers and hospital beds availability.
                </li>
                <li class="lead list-group-item list-group-flush list-group-item-info p-3">
                    We try to verify each entry submitted.
                </li>
                <li class="lead list-group-item list-group-flush list-group-item-info p-3">
                    if someone is spamming or submitting incorrect information, we do not have any control over it and can't
                    guarantee the accuracy. But we will delete it as soon as we are notified.
                </li>
                <li class="lead list-group-item list-group-flush list-group-item-info p-3">
                    We hold the right to remove any unwanted information, or add any needed information which
                    will be helpful in this scenario.
                </li>
            </ul>

         
            <div class="d-grid gap-2 col-8 mx-auto">
                <btn class="btn btn-primary btn-lg mb-5" type="button" onClick={()=>alert('Share Website Button')}>Share this Website</btn>
            </div>
        </div>

          <Footer/>
      </div>
  );
};

export default termsandcondition;
