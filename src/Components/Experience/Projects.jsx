import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import {
  SuperText,
  Title,
  Subtitle,
  Body,
} from "../General/General";
import { DataContext } from "../../DataContext";

// Due to the custom links, couldn't iterate over data.projects
// TODO: implement solution for handling links specified within data.json
const Projects = () => {
  const { projects: { scotiabank, personalWebsite } } = useContext(DataContext);
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  const atLeastOneProject = scotiabank || personalWebsite;
  const hasBoth = scotiabank && personalWebsite;
  const shouldDisplayDivider = hasBoth && isMobile;

  return atLeastOneProject ? (
    <div className="green-background">
      <div className="center-content five-margin">
        <div className="information contrasting-colors">
          <SuperText>Projects</SuperText>

          {scotiabank && (
            <div>
              <Title>{scotiabank.name}</Title>
              <Subtitle>{scotiabank.collab}</Subtitle>
              <Body>
                {scotiabank.description}
                {"\n\nYou can also see the "}
                <a href="https://github.com/PatrickVuscan/RequestToPay_FrontEnd">front-end repo here</a>
                {", and the "}
                <a href="https://github.com/PatrickVuscan/RequestToPay_BackEnd">back-end repo here</a>
                {" as well!"}
              </Body>
            </div>
          )}

          {shouldDisplayDivider && <hr />}

          {personalWebsite && (
            <div>
              <Title>{personalWebsite.name}</Title>
              <Subtitle>{personalWebsite.collab}</Subtitle>
              <Body>
                {personalWebsite.description}
                {"\n\nYou can also see the "}
                <a href="https://github.com/PatrickVuscan/personal-website">repo here</a>
                {" too!"}
              </Body>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : <div />;
};

export default Projects;
