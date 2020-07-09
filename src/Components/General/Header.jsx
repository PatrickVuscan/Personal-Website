import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Logo = () => {
  const history = useHistory();

  return (
    <button
      type="button"
      className="header-logo"
      onClick={() => { history.push('/'); }}
    >
      pv
    </button>
  );
};

const Header = () => {
  const history = useHistory();
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  const [isNavVisible, setNavVisibility] = useState(!isMobile);

  const onResumeClick = () => {
    window.open(`${process.env.PUBLIC_URL}/resume.pdf`);
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  const handleClick = (link) => {
    if (isMobile) toggleNav();
    history.push(link);
  };

  return (
    <header className="header">
      <Logo />
      {isNavVisible && (
        <nav className="Nav">
          <button
            type="button"
            className="text-header"
            onClick={() => { handleClick('/about'); }}
          >
            About
          </button>
          <button
            type="button"
            className="text-header"
            onClick={() => { handleClick('/experience'); }}
          >
            Experience
          </button>
          <button
            type="button"
            className="text-header"
            onClick={() => { handleClick('/contact'); }}
          >
            Contact
          </button>
          <button
            type="button"
            className="text-header"
            onClick={() => { onResumeClick(); }}
          >
            Resume
          </button>
        </nav>
      )}
      {isMobile && (
        <button
          type="button"
          onClick={toggleNav}
          className="burger"
        >
          ☰
        </button>
      )}
    </header>
  );
};

export default Header;
