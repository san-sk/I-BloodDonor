import React from 'react';
import { Router, Route } from 'react-router';
import HomePage from '../HomePage';
import PageNotFound from '../PageNotFound';
import DonorRegistration from '../DonorRegistration';
import DonorList from '../DonorList';
import ContactUs from '../ContactUs';
import AboutUs from '../AboutUs';


const Routes = props => (
  <Router {...props}>
    <Route path="/" component={HomePage} />
    <Route path="/register" component={DonorRegistration} />
    <Route path="/find_donor" component={DonorList} />
    <Route path="/contact" component={ContactUs} />
    <Route path="/about_us" component={AboutUs} />
    <Route path="*" component={PageNotFound} />
  </Router>
);

export default Routes;
