import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer id="foot">
      <div className="foot-container">
        <div className="foot-options">
          <h6 className="p-primary" id="item1">ABOUT US</h6>
        </div>
        <div className="social-links">
            <li className="social">
              <a href="https://github.com/manvisundli09" aria-label="GitHub">
                <img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-jaune.png" width="16" height="16" alt="GitHub" />
              </a>
              <h6><Link to='https://github.com/manvisundli09'>Manvi Sundli</Link></h6>
            </li>
            <li className="social">
              <a href="https://github.com/stemma1704">
                <img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-jaune.png" width="16" height="16" alt="GitHub" />
              </a>
              <h6><Link to='https://github.com/stemma1704'>Stemy Tomy</Link></h6>
            </li>
            <li className="social">
              <a href="https://github.com/oilyn0s3'">
                <img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-jaune.png" width="16" height="16" alt="GitHub" />
              </a>
              <h6><Link to='https://github.com/oilyn0s3'>Nilotpal Dwivedi</Link></h6>
            </li>
        </div>
        <div className="foot-options">
          <h6 className="p-primary" id="item2" style={{ fontSize: '13px' }}>Project Guide : Sidhidatri Nayk</h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
