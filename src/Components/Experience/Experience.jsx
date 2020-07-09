import React from 'react';
import '../../App.scss';
import { useHistory } from 'react-router-dom';
import { Body, Title, SuperText } from '../General/General';

const Experience = () => {
  const history = useHistory();

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
            {'Developed react web applications for Scotiabank\'s web and native campaign and ' +
            'offer presentation.'}
          </Body>
          <SuperText>catchUp</SuperText>
          <SuperText className="text-super-sub">
            Software Developer
          </SuperText>
          <Body>
            {'Designed and developed a web application for a startup from scratch.\n\n' +
            'Used technologies such as React, including all its latest features, React Routing,' +
            'CSS and SASS for the front-end. For the back-end, used technologies such as ' +
            'NodeJS and ExpressJS to create an API which interacts with an MSSQL database.'}
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
