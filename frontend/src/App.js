import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import landingPage from "./Pages/landingpage";
import plasmadonor from "./Pages/plasmadonor";
import hospitalbeds from "./Pages/hospitalbeds";
import oxygensuppliers from "./Pages/oxygensupply";
import medssuppliers from "./Pages/medssuppliers";
import ambulanceprovider from "./Pages/Ambulanceproviders";
import plasmadonorcontact from "./Pages/plasmadonorcontact";
import hospitalbedcontact from "./Pages/hospitalbedcontact";
import oxygensupplycontact from "./Pages/oxygensupplycontact";
import medssuppliercontact from "./Pages/medssuppliercontact";
import ambulanceprovidercontact from "./Pages/Ambulanceprovidercontact";
import termsandcondition from "./Pages/termsandcondition";
import contact from "./Pages/contact";
import { useEffect } from "react";
import DoctalkContext from "./context/DoctalkContext";

function App() {
  return (
    <DoctalkContext>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact component={landingPage} />
          <Route path="/plasma" exact component={plasmadonor} />
          <Route path="/hospitalbeds" exact component={hospitalbeds} />
          <Route path="/oxygensupply" exact component={oxygensuppliers} />
          <Route path="/medssupply" exact component={medssuppliers} />
          <Route
            path="/ambulanceprovider"
            exact
            component={ambulanceprovider}
          />
          <Route
            path="/plasmadonorcontact"
            exact
            component={plasmadonorcontact}
          />
          <Route
            path="/hospitalbedcontact"
            exact
            component={hospitalbedcontact}
          />
          <Route
            path="/oxygensupplycontact"
            exact
            component={oxygensupplycontact}
          />
          <Route
            path="/medssupplycontact"
            exact
            component={medssuppliercontact}
          />
          <Route
            path="/ambulanceprovidercontact"
            exact
            component={ambulanceprovidercontact}
          />
          <Route
            path="/termsandcondition"
            exact
            component={termsandcondition}
          />
          <Route path="/contact" exact component={contact} />
        </Switch>
      </Router>
    </DoctalkContext>
  );
}

export default App;
