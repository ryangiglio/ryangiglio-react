import React from 'react';

import './Footer.css';
import reactLogo from '../assets/react-logo.png';

const Footer = () => {
  return (
    <footer className="Footer">
      <p>Built with <img className="Footer__logo" src={reactLogo} alt="React.js Logo" />React. <a href="https://github.com/ryangiglio/ryangiglio-react" target="_blank">Source on Github</a></p>
    </footer>
  );
};

export default Footer;
