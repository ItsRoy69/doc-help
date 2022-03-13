
import './App.css';
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom'
// import Navbar from './components/Navbar/Navbar'
// import FrontPage from './components/FrontPage/FrontPage'
// import Services from './components/Services/Services'
// import Info from './components/Info/Info'
// import Footer from './components/Footer/Footer'
import landingPage from './Pages/landingpage'
import plasmadonor from './Pages/plasmadonor'
import hospitalbeds from './Pages/hospitalbeds'
import oxygensuppliers from './Pages/oxygensuppliers'
import medssuppliers from './Pages/medssuppliers';
import ambulanceprovider from './Pages/ambulanceproviders'
import allresourcespage from './Pages/allresourcespages'
import volunteerpage from './Pages/volunteerpage'
import plasmadonorcontact from './Pages/plasmadonorcontact';
import hospitalbedcontact from './Pages/hospitalbedcontact'
import oxygensupplycontact from './Pages/oxygensupplycontact'
import medssuppliercontact from './Pages/medssuppliercontact'
import ambulanceprovidercontact from './Pages/ambulanceprovidercontact'
import termsandcondition from './Pages/termsandcondition'

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route path='/' exact component={landingPage} />
        <Route path='/plasma' exact component={plasmadonor} />
        <Route path='/hospitalbeds' exact component={hospitalbeds} />
        <Route path='/oxygensupply' exact component={oxygensuppliers} />
        <Route path='/medssupply' exact component={medssuppliers} />
        <Route path='/ambulanceprovider' exact component={ambulanceprovider} />
        <Route path='/resourcespage' exact component={allresourcespage} />
        <Route path='/volunteerpage' exact component={volunteerpage} />
        <Route path='/plasmadonorcontact' exact component={plasmadonorcontact} />
        <Route path='/hospitalbedcontact' exact component={hospitalbedcontact} />
        <Route path='/oxygensupplycontact' exact component={oxygensupplycontact} />
        <Route path='/medssupplycontact' exact component={medssuppliercontact} />
        <Route path='/ambulanceprovidercontact' exact component={ambulanceprovidercontact} />
        <Route path='/termsandcondition' exact component={termsandcondition} />






        {/* <Route path='/about' component={About} />
        <Route path='/events' component={Events} />
        <Route path='/annual' component={AnnualReport} />
        <Route path='/team' component={Teams} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/sign-up' component={SignUp} /> */}
      </Switch>
    </Router>





      // {/* Navbar  */}
      // <Navbar/>

      // {/* FrontPage   */}
      // <FrontPage/>

      // {/* services */}
      // <Services/>

      // {/* Info     */}
      // <Info/>

      // {/* Footer   */}
      // <Footer/>








  );
}

export default App;
