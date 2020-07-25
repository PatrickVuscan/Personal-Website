import React from 'react';
import { Link } from 'react-router-dom';
import { FooterText } from './General';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-bar" />
      <FooterText>
        {
          'Created by Patrick Vuscan. Please send me suggestions or report bugs by '
        }
        <Link className="text-footer" to="/reportBug">
          clicking here
        </Link>
        !
      </FooterText>
    </div>
  );
};

export default Footer;
