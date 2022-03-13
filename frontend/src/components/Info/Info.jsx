import React from 'react';
import InfoCard from './InfoCard'
import InfoCardLeft from './InfoCardLeft'

import service1 from './service-1.png'
import service2 from './service-2.png'
import service3 from './service-3.png'
import service4 from './service-4.png'
import service5 from './service-5.png'


const Info = () => {
  return (
      <div className="info">
          <InfoCard title="Donate Plasma" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          btninfo="Add a Plasma Donor Contact"
          image={service1} link="/plasmadonorcontact"

          />
          <InfoCardLeft title="Hospital Beds" content="If you know the Hospital that has Beds Available OR Know someone who has
                        proper Information then click the button below. We will get in touch
                        with the Contact provided and also Try to Verify it as soon as possible."
          btninfo="Add a Hospital Contact"
          image={service2} link="/hospitalbedcontact"

          />
          <InfoCard title=" Oxygen Suppliers" content="If you can supply the Oxygen OR Know someone who supplies Oxygen
                        to the needy people, then please fill the proper Information
                        and click the button below. We will get in touch
                        with the Contact provided and also Try to Verify it as soon as possible."
          btninfo=" Add a Oxygen Supplier Contact"
          image={service3} link="/oxygensupplycontact"

          />
          <InfoCardLeft title=" Meds/Injection Suppliers" content=" If you can supply the Medicines OR Know someone who supplies
                        Meds/Injection to the needy people, then please fill the proper
                        Information and click the button below. We will get in touch
                        with the Contact provided and also Try to Verify it as soon as possible."
                        btninfo=" Add a Meds/Injection Contact"
                        image={service4} link="/medssupplycontact"

          />
          <InfoCard title=" Ambulance Service Providers" content=" If you can arrange for Ambulance OR Know someone who provides
                        Ambulance Service to the needy people, then please fill the proper
                        Information and click the button below. We will get in touch
                        with the Contact provided and also Try to Verify it as soon as possible."
                        btninfo="Add a Ambulance Provider Contact"
                        image={service5} link="/ambulanceprovidercontact"

          />

      </div>
  );
};

export default Info;
