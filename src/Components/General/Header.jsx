import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();

  return (
    <div className="header">
      <button
        type="button"
        className="header-logo"
        onClick={() => { history.push('/'); }}
      >
        patrick vuscan
      </button>
      <button
        type="button"
        className="text-header"
        onClick={() => { history.push('/about'); }}
      >
        About
      </button>
      <button
        type="button"
        className="text-header"
        onClick={() => { history.push('/portfolio'); }}
      >
        Portfolio
      </button>
      <button
        type="button"
        className="text-header"
        onClick={() => { history.push('/contact'); }}
      >
        Contact
      </button>
    </div>
  );
};

export default Header;
