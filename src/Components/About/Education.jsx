import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import {
  Body,
  Title,
  SuperText,
  Subtitle,
} from "../General/General";
import "../../App.scss";
import { DataContext } from "../../DataContext";

const Education = () => {
  const { education } = useContext(DataContext);
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  const educationNodes = [];

  if (Array.isArray(education)) {
    const { length } = education;

    education.forEach((educationItem, index) => {
      educationNodes.push(
        <div key={educationItem.title}>
          <Title>{educationItem.title}</Title>
          <Subtitle>{educationItem.subtitle}</Subtitle>
          <Body>{educationItem.description}</Body>
        </div>,
      );

      if (length > 1 && index < length - 1 && isMobile) {
        educationNodes.push(<hr />);
      }
    });
  }

  return (
    <div className="green-background">
      <div className="center-content five-margin">
        <div className="information contrasting-colors">
          <SuperText>Education</SuperText>
          {educationNodes}
        </div>
      </div>
    </div>
  );
};

export default Education;
