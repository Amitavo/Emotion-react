import React from "react";
import { NavLink } from "reactstrap";
import "../css/footer.css";
import logoFooter from "../img/logo/Logo_white.png";

const Footer = () => {
  return (
    <div className="footer text-white  pt-5">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4 footer-about wow fadeInUp">
              <NavLink href="/" className="p-0">
                <img
                  className="logo-footer mb-3"
                  src={logoFooter}
                  alt="logo-footer"
                  width="180"
                />
              </NavLink>
              <p>
                We are a young company always looking for new and creative ideas
                to help you with our products in your everyday work.
              </p>
            </div>
            <div className="col-md-4 col-lg-4 offset-lg-1 footer-contact wow fadeInDown">
              <h3>Contact</h3>
              <p>
                <i className="fas fa-map-marker-alt"></i> Via Rossini 10, 10136
                Turin Italy
              </p>
              <p>
                <i className="fas fa-phone"></i> Phone: (0039) 333 12 68 347
              </p>
              <p>
                <i className="fas fa-envelope"></i> Email:
                <NavLink href="mailto:hello@domain.com" className="d-inline">
                  emotionmusicvideo@gmail.com
                </NavLink>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 footer-social wow fadeInUp">
              <h3>Follow us</h3>
              <p>
                <NavLink href="#" className="m-0 p-0 pr-3 d-inline">
                  <i className="fab fa-facebook"></i>
                </NavLink>
                <NavLink href="#" className="m-0 p-0 pr-3 d-inline">
                  <i className="fab fa-youtube"></i>
                </NavLink>
                <NavLink href="#" className="m-0 p-0 pr-3 d-inline">
                  <i className="fab fa-instagram"></i>
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 footer-copyright">
              <p>&copy; 2020 EMOTION MUSIC. All rights reserved.</p>
            </div>
            <div className="col-md-6 footer-copyright text-right">
              <p>
                Made with <i class="fas fa-heart"></i>
                <NavLink href="amitavo.in" className="d-inline p-0 pl-2">
                  Amitavo
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
