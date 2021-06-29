import React from 'react';
import '../../App.scss';
import { Body, Title, SuperText } from '../General/General';
import { experience, projects } from './content';

const Experience = () => {
  const onResumeClick = () => {
    window.open(`${process.env.PUBLIC_URL}/resume.pdf`);
  };

  const experienceNodes = [];

  experience.forEach(exp => {
    experienceNodes.push(
      <>
        <SuperText>{exp.company}</SuperText>
        <SuperText className="text-super-sub">{exp.role}</SuperText>
        <Body>{exp.description}</Body>
      </>,
    );
  });

  return (
    <div className="container-list">
      <div className="container-for-centering">
        <div className="work-experience">
          <Title>Work Experience</Title>
          {experienceNodes}
        </div>
      </div>

      <div className="container-for-centering" style={{ backgroundColor: '#2d8000' }}>
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
            {'\n\nYou can demo the project '}
            <a href="https://request-to-pay.herokuapp.com/">here!</a>
            {'\nYou can also see the '}
            <a href="https://github.com/PatrickVuscan/RequestToPay_FrontEnd">front-end repo here</a>
            {', and the '}
            <a href="https://github.com/PatrickVuscan/RequestToPay_BackEnd">back-end repo here</a>
            {' as well!'}
          </Body>
          <div>
            <SuperText>{projects[1].name}</SuperText>
            <SuperText className="text-super-sub">
              {projects[1].collab}
            </SuperText>
          </div>
          <Body>
            {projects[1].description}
            {'\n\nYou can also see the '}
            <a href="https://github.com/PatrickVuscan/personal-website">repo here</a>
            {' too!'}
          </Body>
        </div>
      </div>
      <div className="container-for-centering">
        <div className="about-end">
          <a href="https://github.com/PatrickVuscan">
            <button
              type="button"
              className="about-end-button"
            >
              Check out my Github!
            </button>
          </a>
          <button
            type="button"
            className="about-end-button"
            onClick={onResumeClick}
          >
            View my full resume here!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
