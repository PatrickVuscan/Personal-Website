import { useContext } from "react";
import { Body, Title, SuperText } from "../General/General";
import DataContext from "../../DataContext";

const Projects = () => {
  const { projects } = useContext(DataContext);

  return (
    <div className="green-background">
      <div className="center-content" style={{ backgroundColor: "#2d8000" }}>
        <div className="project-experience">
          <Title>Projects</Title>
          <div>
            <SuperText>{projects[0].name}</SuperText>
            <SuperText className="text-super-sub">
              {projects[0].collab}
            </SuperText>
          </div>
          <Body>
            {projects[0].description}
            {"\n\nYou can demo the project "}
            <a href="https://request-to-pay.herokuapp.com/">here!</a>
            {"\nYou can also see the "}
            <a href="https://github.com/PatrickVuscan/RequestToPay_FrontEnd">front-end repo here</a>
            {", and the "}
            <a href="https://github.com/PatrickVuscan/RequestToPay_BackEnd">back-end repo here</a>
            {" as well!"}
          </Body>
          <div>
            <SuperText>{projects[1].name}</SuperText>
            <SuperText className="text-super-sub">
              {projects[1].collab}
            </SuperText>
          </div>
          <Body>
            {projects[1].description}
            {"\n\nYou can also see the "}
            <a href="https://github.com/PatrickVuscan/personal-website">repo here</a>
            {" too!"}
          </Body>
        </div>
      </div>
    </div>
  );
};

export default Projects;
