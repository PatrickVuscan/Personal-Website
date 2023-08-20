import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import PV from "./PV";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const [isNavVisible, setNavVisibility] = useState(!isMobile);

  const onResumeClick = () => {
    window.open(`${process.env.PUBLIC_URL}/resume.pdf`);
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  const handleClick = (link) => {
    if (isMobile) toggleNav();
    navigate(link);
  };

  return (
    <header className="header">
      <PV />
      <nav className={`Nav ${isNavVisible ? "show" : ""}`}>
        {isNavVisible && (
          <>
            <button
              type="button"
              className="text-header"
              onClick={() => { handleClick("/about"); }}
            >
              About
            </button>
            <button
              type="button"
              className="text-header"
              onClick={() => { handleClick("/experience"); }}
            >
              Experience
            </button>
            <button
              type="button"
              className="text-header"
              onClick={() => { handleClick("/contact"); }}
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
          </>
        )}
      </nav>
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
