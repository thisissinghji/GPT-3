import React from 'react';
import './footer.css';
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h2 className="gradient__text">
          Do you want to step into the future before others
        </h2>
      </div>
      <div className="gpt3__footer-btn">
      <p>Request early access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logo} alt="" />
          <p>GPT-3 is the future of the world</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h3>Links</h3>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h3>Company</h3>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h3>Get in touch</h3>
          <p>Kolkata, India</p>
          <p>700-42-xxxx</p>
          <p>contact@gpt3.in</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>2023 GPT-3. All rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer