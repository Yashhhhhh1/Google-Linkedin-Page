import React from 'react';
import style from "./Footer.module.css";
import Logo from "../../Assets/Linkedin-Logo.png";


function Footer() {
  return (
    <footer id={style.footer}>
      <img id={style.logo} src={Logo} alt='logo' />
      <div>
        <ul>
          <li>About</li>
          <li>Community Guidelines</li>
          <li>Privacy & Terms <i className="fa-solid fa-angle-down"></i></li>
          <li>Sales Solutions</li>
          <li>Safety Ceter</li>
        </ul>
        <ul>
          <li>Accessibility</li>
          <li>Careers</li>
          <li>Ad Choices</li>
          <li>Mobile</li>
        </ul>
        <ul>
          <li>Talent Solutions</li>
          <li>Marketing Solutions</li>
          <li>Advertising</li>
          <li>Small Business</li>
        </ul>

        <div>
          <div>
            <i className="fa-solid fa-circle-question"></i>
            <span>
              <strong>Questions?</strong>
              <p>Visit our Help Centers</p>
            </span>
          </div>

          <div>
            <i className="fa-solid fa-gear"></i>
            <span>
              <strong>Manage your account and privacy</strong>
              <p>Go to your Settings.</p>
            </span>
          </div>
        </div>
      </div>
      <p>LinkedIn Corporation © 2022</p>
    </footer>
  )
}

export default Footer