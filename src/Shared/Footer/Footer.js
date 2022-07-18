import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="text-center footer-section p-3">
      <h4>Footer Design</h4>
      <p className="w-50 mx-auto footer-info">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, omnis
        nemo. hello would,,can you here me
      </p>
      <div className="social-icon mb-2">
      <i class="fa-brands fa-facebook-messenger p-1 me-3 border rounded-circle"></i>
        <i  class="fa-brands fa-google-plus-g p-1 me-3 border rounded-circle"></i>
        <i className="fa-brands fa-twitter p-1 me-3 border rounded-circle"></i>
        <i class="fa-brands fa-linkedin-in p-1 me-3 border rounded-circle"></i>
      </div>
      <div className="copyright-section container">
        <div className="copyright">
          <p> Copy right &copy;{(new Date().getFullYear())} <span style={{color: "#3AB4F2"}}>reserved</span></p>
        </div>
        <div className="footer-link">
          <Link to="/">Home</Link>
          <Link to="/uploadPd">Add Item</Link>
          <Link to="/manageInventory">Manage Item</Link>
          <Link to="/myItem">My Item</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
