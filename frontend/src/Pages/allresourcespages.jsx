import React from 'react';
import PageNavbar from '../components/Navbar/PageNavbar';
import ResourcesCard from '../components/ResourceCard/ResourcesCard';
import Footer from '../components/Footer/Footer'
import WHO from "../images/who-logo.svg";
import guj from "../images/gujarat-logo.jpg";
import drive from "../images/google-drive-logo.svg";
import corona from "../images/corona-resources-logo.PNG"
import helpline from "../images/helpline-logo.PNG"
import life from "../images/life-logo.PNG"
import covidresource from "../images/covid-resource-logo.PNG"
import twitter from "../images/twitter-logo.png"
import covidarmy from"../images/covid-army-logo.PNG"
import covidresourcenew from "../images/covid-res-logo.png"

const allresourcespages = () => {
  return (
      <div className="allresourcespages">
          <PageNavbar/>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3">
          <ResourcesCard image={WHO} heading={"World Health Organization"} link={"https://www.instagram.com/who/"}/>
          <ResourcesCard image={guj} heading={"Gujrat Covid Support"} link={"https://www.gujaratcovidsupport.org/"}/>
          <ResourcesCard image={drive} heading={"Whole Covid19 Database"} link={"https://drive.google.com/drive/folders/1y8fjrbdGEGmcStkNE_Jf5sNRaDCY4zRA"}/>
          <ResourcesCard image={corona} heading={"Site to add Resources and Contact information for COVID"} link={"https://coronaresources.web.app/"}/>
          <ResourcesCard image={WHO} heading={"Instagram Resources by WHO"} link={"https://www.instagram.com/who/"}/>
          <ResourcesCard image={helpline} heading={"List of Helpline Numbers for COVID-19 State wise"} link={"https://www.instagram.com/p/COf-Y8sNxB2/"}/>
          <ResourcesCard image={life} heading={" Verified Crowd Sourced Emergency Services Directory"} link={"https://life.coronasafe.network/"}/>
          <ResourcesCard image={covidresource} heading={"Nation-wide Crowd Sourced info about Covid Resources"} link={"https://covidresource.glideapp.io/"}/>
          <ResourcesCard image={twitter} heading={" Nation-wide Crowd Sourced info about Covid Resources"} link={"https://covidresource.glideapp.io/"}/>
          <ResourcesCard image={covidarmy} heading={" Covid Resources for Plasma and more"} link={"https://covid.army/"}/>
          <ResourcesCard image={drive} heading={"  Covid Resources Database"} link={"https://bit.ly/3hgWAbr"}/>
          <ResourcesCard image={covidresourcenew} heading={" All Covid Resources Here"} link={"https://bit.ly/3ey2002"}/>

          


          </div>
      

          <Footer/>
      </div>
  );
};

export default allresourcespages;
