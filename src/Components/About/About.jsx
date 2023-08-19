import {
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

// Components
import Education from "./Education";
import { Body, Title, SuperText } from "../General/General";
import ProfilePicture from "./ProfilePicture";

// CSS
import "../../App.scss";
import "./About.scss";

import DataContext from "../../DataContext";

const About = () => {
  const {
    descriptionSentences,
    description,
  } = useContext(DataContext);

  const navigate = useNavigate();

  // Revolving text
  const descriptionSentencesLength = descriptionSentences.length;
  const [textIndex, setTextIndex] = useState(0);
  const [showText, setShowText] = useState(true);
  const textIndexRef = useRef();
  textIndexRef.current = textIndex;

  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const titleText = `Hello world!${isMobile ? "\n" : ""} My name is`;

  const startTextFadeoutTimer = () => {
    setTimeout(() => {
      setShowText(false);
    }, 2500);
  };

  useEffect(() => {
    startTextFadeoutTimer();

    const interval = setInterval(() => {
      setShowText(true);
      setTextIndex((index) => (index + 1) % descriptionSentencesLength);
      startTextFadeoutTimer();
    }, 3000);

    return () => clearInterval(interval);
  }, [descriptionSentencesLength]);

  return (
    <div className="sections">
      <div className="section-horizontal-flow five-margin">
        <div className="center-content">
          <div className="about">
            <Title>{titleText}</Title>
            <SuperText className="hover">Patrick Vuscan</SuperText>

            {/* California Picture on Mobile */}
            { isMobile && <ProfilePicture />}

            {/* Revolving Text */}
            <Title className={`text-super-sub fading ${!showText && "hidden"}`}>
              {descriptionSentences[textIndex]}
            </Title>

            <Body>{description}</Body>
          </div>
        </div>

        {/* California Picture on Desktop */}
        {!isMobile && <ProfilePicture />}
      </div>

      <Education />

      <div className="center-content">
        <button
          type="button"
          className="next-page-button"
          onClick={() => { navigate("/experience"); }}
        >
          Check out my work experience here!
        </button>
      </div>
    </div>
  );
};

export default About;
