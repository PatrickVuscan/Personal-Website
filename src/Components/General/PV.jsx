import { useNavigate } from "react-router-dom";

import "./PV.scss";

const PV = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  }

  return (
    <button
      className="header-logo"
      type="button"
      onClick={navigateHome}
    >
      pv
    </button>
  );
};

export default PV;