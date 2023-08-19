import { useContext } from "react";
import { useMediaQuery } from "react-responsive";

import { DataContext } from "../../App";
import { Body, Title, SuperText, Subtitle } from "../General/General";

import "./Education.scss";

const Education = () => {
  const { education } = useContext(DataContext);
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  return <div className="center-content">
    <div className="education">
      <SuperText>Education</SuperText>

      <div className="education-item">
        <Title>{education.uoft.title}</Title>
        <Subtitle className="text-super-sub">
          {education.uoft.subtitle}
        </Subtitle>
        <Body>
          {education.uoft.description}
        </Body>
      </div>

      {isMobile && <hr />}

      <div className="education-item">
        <Title>{education.tli.title}</Title>
        <Subtitle className="text-super-sub">
          {education.tli.subtitle}
        </Subtitle>
        <Body>
          {education.tli.description}
          {/* This is the little link I couldn't include more easily in content.js */}
          <a href="https://request-to-pay.herokuapp.com/">here!</a>
        </Body>
      </div>
    </div>
  </div>;
}

export default Education;
