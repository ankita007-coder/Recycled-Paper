import React from "react"; 
import "../assets/css/Footer.css"
import { BsBehance, BsInstagram, BsLinkedin } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";
const Footer = () => {
  return<>
  <div className="footer">
    <div className="about"><h4>About</h4>
    <p>At Recology, we are passionate about making a positive impact on the environment through making people aware of recycled paper . 
      We believe that every sheet of paper can tell a story of conservation, responsibility, and a commitment to a greener future.</p>
</div>
    <div className="quick-links">
        <ul>
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/intro" className="link">Introduction</Link></li>
            <li><Link to="/origin" className="link">Origin</Link></li>
            <li><Link to="/process" className="link">Process</Link></li>
            <li><Link to="/advantages" className="link">Advantages</Link></li>
            <li><Link to="/sustainability" className="link">Sustainability</Link></li>
            <li><Link to="/case-studies" className="link">Case Studies</Link></li>
        </ul>
    </div>
    <div className="social-icons">
        <div className="social"><BiLogoGmail/></div>
        <div className="social"><BsInstagram/></div>
        <div className="social"><BsBehance/></div>
        <div className="social"><BsLinkedin/></div>
    </div>
  </div>
  <div className="copyright">
  © All rights reserved
  </div>
  </> 
};

export default Footer;
