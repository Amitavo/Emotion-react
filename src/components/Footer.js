import React from "react";
import "../css/footer.css";
import logoFooter from "../img/logo/Logo_white.png";

const Footer = () => {
  return (
    <div className="footer text-white  pt-5">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4 footer-about wow fadeInUp">
              <img
                className="logo-footer mb-3"
                src={logoFooter}
                alt="logo-footer"
                width="180"
              />
              <p>
                We are a young company always looking for new and creative ideas
                to help you with our products in your everyday work.
              </p>
              <p>
                <a href="#">Our Team</a>
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
                <i className="fas fa-envelope"></i> Email:{" "}
                <a href="mailto:hello@domain.com">hello@domain.com</a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 footer-social wow fadeInUp">
              <h3>Follow us</h3>
              <p>
                <a href="#" className="mr-3">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="mr-3">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="mr-3">
                  <i className="fab fa-instagram"></i>
                </a>
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
                Made by <a href="amitavo.in">Amitavo</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
