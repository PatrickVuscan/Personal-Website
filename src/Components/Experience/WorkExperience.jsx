import { useContext, Fragment } from "react";
import { Body, Title, SuperText } from "../General/General";
import DataContext from "../../DataContext";

const WorkExperience = () => {
  const { experience } = useContext(DataContext);

  const experienceNodes = [];

  experience.forEach((exp) => {
    experienceNodes.push(
      <Fragment key={exp.company}>
        <SuperText>{exp.company}</SuperText>
        <SuperText className="text-super-sub">{exp.role}</SuperText>
        <Body>{exp.description}</Body>
      </Fragment>,
    );
  });

  return (
    <div className="center-content">
      <div className="work-experience">
        <Title>Work Experience</Title>
        {experienceNodes}
      </div>
    </div>
  );
};

export default WorkExperience;
