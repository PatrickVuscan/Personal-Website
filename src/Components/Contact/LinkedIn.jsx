import { Body } from "../General/General";

import "../../App.scss";
import "./LinkedIn.scss";

const LINKEDIN_URL = "https://www.linkedin.com/in/patrickvuscan/";

const LinkedIn = () => {
  return (
    <div className="linked-in-cta">
      <a href={LINKEDIN_URL}>
        <img
          className="linked-in-logo"
          alt="LinkedIn Logo"
          aria-label="LinkedIn Logo"
          src={`${process.env.PUBLIC_URL}/linkedIn.png`}
        />
      </a>
      <Body className="call-to-action-text">Connect with me on LinkedIn!</Body>
    </div>
  );
};

export default LinkedIn;
