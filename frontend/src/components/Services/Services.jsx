import React from 'react';
import ServiceCard from './ServiceCard'
import './Services.css'

const Services = () => {
  return (
      <div className="services">
          <div className="container px-4 py-5" id="services">
            <h1>Services</h1>
            <hr class="solid" />
            <ServiceCard  />

          </div>
      </div>
  );
};

export default Services;
