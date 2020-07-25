import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const ScrollToTop = ({ history, children }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return <>{children}</>;
};

ScrollToTop.propTypes = {
  history: PropTypes.any.isRequired,
  children: PropTypes.any,
};

export default withRouter(ScrollToTop);
