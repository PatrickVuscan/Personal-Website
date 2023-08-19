import CallToActionButtons from "./CallToActionButtons";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";
import "../../App.scss";

const Experience = () => {
  return (
    <div className="sections">
      <WorkExperience />
      <Projects />
      <CallToActionButtons />
    </div>
  );
};

export default Experience;
