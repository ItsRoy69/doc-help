import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar'
import FrontPage from '../components/FrontPage/FrontPage'
import Services from '../components/Services/Services'
import Info from '../components/Info/Info'
import Footer from '../components/Footer/Footer'



const landingpage = () => {



  return (
    <div className="landingpage">
      <Navbar />
      <FrontPage />
      <Services />
      <Info />
      <Footer />
    </div>
  );
};

export default landingpage;
