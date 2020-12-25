import React from "react";

const ContactUsSection = () => (
  <div className="col-md-12 col-sm-12 col-xs-12">
    <div className="footer-widget">
      <div className="sidebar-widget-wrapper">
        <div className="textwidget">
          <i className="fa fa-envelope-o fa-contact" />{" "}
          <p>
            <a href="/">support@donation.com</a>
            <br />
            <a href="/">helpme@donation.com</a>
          </p>
          <i className="fa fa-location-arrow fa-contact" />{" "}
          <p>
            Road-2,3/Mylapore
            <br />
            Chennai-600004, Tamilnadu, India
          </p>
          <i className="fa fa-phone fa-contact" />{" "}
          <p>
            Office:&nbsp; (+91) 0823 560 433
            <br />
            Cell:&nbsp; (+91) 0723 161 343
          </p>
        </div>
      </div>
    </div>
  </div>
);

const SuportLinks = () => (
  <div className="col-md-12 col-sm-12 col-xs-12">
    <div className="footer-widget clearfix">
      <div className="sidebar-widget-wrapper">
        <div className="footer-widget-header clearfix">
          <h3>Support Links</h3>
        </div>
        <ul className="footer-useful-links">
          <li>
            <a href="https://www.mayoclinic.org/diseases-conditions/thalassemia/symptoms-causes/syc-20354995">
              <i className="fa fa-caret-right fa-footer" />
              Thalassemia
            </a>
          </li>
          <li>
            <a href="https://www.mayoclinic.org/symptoms/high-white-blood-cell-count/basics/definition/sym-20050611">
              <i className="fa fa-caret-right fa-footer" />
              Blood Count
            </a>
          </li>
          <li>
            <a href="https://www.mayoclinic.org/diseases-conditions/thrombocytosis/symptoms-causes/syc-20378315">
              <i className="fa fa-caret-right fa-footer" />
              Thrombocytosis
            </a>
          </li>
          <li>
            <a href="https://www.mayoclinic.org/diseases-conditions/sickle-cell-anemia/symptoms-causes/syc-20355876">
              <i className="fa fa-caret-right fa-footer" />
              Sickle Cell Anemia
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.mayoclinic.org/diseases-conditions/aplastic-anemia/symptoms-causes/syc-20355015"
            >
              <i className="fa fa-caret-right fa-footer" />
              Aplastic Anemia
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const ContactUsComponent = () => (
  <div className="slider-wrap">
    <div id="slider_1" className="owl-carousel owl-theme">
      <div className="item">
        <img src="/images/home_1_slider_1.jpg" alt="img" />
        <div className="slider-content text-center">
          <div className="container">
            <div className="slider-contents-info">
              <div className="row">
                <ContactUsSection />
                <SuportLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactUsComponent;
