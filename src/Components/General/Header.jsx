import React from 'react';
import { useHistory } from 'react-router-dom';
// import resume from '../../Constants/resume.pdf';

const Header = () => {
  const history = useHistory();

  const onResumeClick = () => {
    window.open(`${process.env.PUBLIC_URL}/resume.pdf`);
  };

  return (
    <div className="header">
      <button
        type="button"
        className="header-logo"
        onClick={() => { history.push('/'); }}
      >
        pv
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
        onClick={() => { history.push('/experience'); }}
      >
        Experience
      </button>
      <button
        type="button"
        className="text-header"
        onClick={() => { history.push('/contact'); }}
      >
        Contact
      </button>
      <button
        type="button"
        className="text-header"
        onClick={onResumeClick}
      >
        Resume
      </button>
    </div>
  );
};

export default Header;
