import React from 'react';
import '../../App.scss';
import { Body, Title, SuperText } from '../General/General';

const Experience = () => {
  const onResumeClick = () => {
    window.open(`${process.env.PUBLIC_URL}/resume.pdf`);
  };

  return (
    <div className="container-list">
      <div className="container-for-centering">
        <div className="work-experience">
          <Title>Work Experience</Title>
          <SuperText>{'Scotiabank\'s Digital Factory'}</SuperText>
          <SuperText className="text-super-sub">
            Software Developer
          </SuperText>
          <Body>
            {'I was the only software developer intern brought into the Digital Factory ' +
            'during the summer of 2020. I developed for the front-end of a web application ' +
            'that manages Scotiabank’s web and native campaign and offer presentation, ' +
            'using technologies such as ReactJS and Redux. Took ownership over regions of ' +
            'the app. Wrote API endpoints in the NodeJS backend, wrote unit tests using ' +
            'React’s Testing Library, and refactored code to modernize the application.\n\n' +
            'Placed 1st out of more than 80 teams in the bank wide Intern Capstone project, ' +
            'aimed to find new ways to increase customer acquisition across the bank. After ' +
            'engaging with customers and managers across different business lines, I developed ' +
            'a Figma prototype of an educational solution which could be built to work in ' +
            'conjunction with existing Scotiabank technology and analytic tools'}
          </Body>
          <SuperText>catchUp</SuperText>
          <SuperText className="text-super-sub">
            Software Developer
          </SuperText>
          <Body>
            {'Lead developer and designer in a start-up, catchUp, a note sharing service that ' +
            'focuses on working with accessibility needs guidelines. Designed the application ' +
            'and flows using Figma. Developing the Front-end using technologies such as ReactJS, ' +
            'React Routing, to deliver a clean minimalist user experience.'}
          </Body>
          <SuperText>NexJ Health Inc.</SuperText>
          <SuperText className="text-super-sub">
            Software Developer
          </SuperText>
          <Body>
            {'Developed a web and native Android and iOS applications for NexJ Health Inc’s ' +
            'patient-facing healthcare platform as a full stack developer.\n\n' +
            'Built new user functionality and features, while working on the application’s ' +
            'front-end UI through a custom in-house framework in JavaScript, creating back-end ' +
            'services with Node JS, and interacting with the MongoDB database under a Mongoose ' +
            'schema. Worked on the deployment of the web application into native applications ' +
            'through Adobe PhoneGap.'}
          </Body>
        </div>
      </div>
      <div className="container-for-centering" style={{ backgroundColor: '#2d8000' }}>
        <div className="project-experience">
          <Title>Projects</Title>
          <div>
            <SuperText>Scotiabank MVP Web Application</SuperText>
            <SuperText className="text-super-sub">
              Technology Leaderhip Initiatve x Scotiabank Collaboration
            </SuperText>
          </div>
          <Body>
            {'Developed an MVP for Scotiabank, a reactive web application that utilizes ' +
            'Interac’s new Request to Pay feature for businesses.\n\nBuilt an application with ' +
            'React JS, and created RESTful back-end services and APIs with Express and Node ' +
            'JS. Created and set up servers to host the application on Heroku with a ' +
            'PostgreSQL database.\n\n' +
            'You can demo the project '}
            <a href="https://request-to-pay.herokuapp.com/">here!</a>
            {'\nYou can also see the '}
            <a href="https://github.com/PatrickVuscan/RequestToPay_FrontEnd">front-end repo here</a>
            {', and the '}
            <a href="https://github.com/PatrickVuscan/RequestToPay_BackEnd">back-end repo here</a>
            {' as well!'}
          </Body>
          <div>
            <SuperText>This Website!</SuperText>
            <SuperText className="text-super-sub">
              Stand alone project
            </SuperText>
          </div>
          <Body>
            {'Created this website from the ground up, using technologies such as React, React ' +
            'Router, all of the latest React Hooks, entirely custom CSS, and Firebase for the ' +
            'back-end.\n\n'}
            {'You can also see the '}
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
