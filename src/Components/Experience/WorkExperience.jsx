import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import {
  SuperText,
  Title,
  Subtitle,
  Body,
} from "../General/General";
import DataContext from "../../DataContext";

const WorkExperience = () => {
  const { experience } = useContext(DataContext);
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  const experienceNodes = [];

  if (Array.isArray(experience)) {
    const { length } = experience;

    experience.forEach((experienceItem, index) => {
      experienceNodes.push(
        // Should be fine to use index here because the experienceItem array is unchanging
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>
          <Title>{experienceItem.company}</Title>
          <Subtitle>{experienceItem.role}</Subtitle>
          <Body>{experienceItem.description}</Body>
        </div>,
      );

      if (length > 1 && index < length - 1 && isMobile) {
        experienceNodes.push(<hr />);
      }
    });
  }

  return (
    <div className="center-content five-margin">
      <div className="information">
        <SuperText>Work Experience</SuperText>
        {experienceNodes}
      </div>
    </div>
  );
};

export default WorkExperience;
