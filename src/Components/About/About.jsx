import React from 'react';
import '../../App.scss';
import { useHistory } from 'react-router-dom';
import { Body, Title, SuperText } from '../General/General';

const About = () => {
  const history = useHistory();

  return (
    <div className="container-list">
      <div className="container">
        <div
          className="container-for-centering"
        >
          <div className="about">
            <Title>Hello world! My name is</Title>
            <SuperText>Patrick Vuscan.</SuperText>
            <SuperText className="text-super-sub">I make ideas happen.</SuperText>
            <Body>
              {'I\'m a software developer based in Toronto, Canada, specializing in AI and ML, ' +
              'but also designing and developing web applications!'}
            </Body>
          </div>
        </div>
        <div
          className="container-for-centering"
        >
          <img
            src="CAPic.jpeg"
            alt="Patrick Vuscan in California"
            style={{
              margin: 'auto 0',
              borderRadius: '50%',
              height: 'auto',
              maxWidth: '100%',
              maxHeight: '30vw',
            }}
          />
        </div>
      </div>
      <div
        className="container-for-centering"
        style={{ width: '100vw' }}
      >
        <div className="education">
          <Title>Education</Title>
          <div>
            <SuperText>HBSc. Computer Science</SuperText>
            <SuperText className="text-super-sub">
              University of Toronto
            </SuperText>
            <SuperText className="text-super-sub" style={{ fontSize: '32px' }}>
              {'\'18 - \'22'}
            </SuperText>
          </div>
          <Body>
            {'Honours studies in Computer Science, with a focus in Artificial Intelligence and ' +
            'Machine Learning. Minor in German!\n\n' +
            'Two time Dean\'s List scholar, and winner of the Mary Victoria Court Scholarship in ' +
            '2019.\n\n' +
            'Member of the Technology Leadership Initiative.'}
          </Body>
          <div>
            <SuperText>Technology Leadership Initiative</SuperText>
            <SuperText className="text-super-sub">
              University of Toronto
            </SuperText>
          </div>
          <Body>
            {'Selected for the Technology Leadership Initiative, a specialized program that ' +
            'offers industry integrated advanced learning, tailored leadership training, and ' +
            'industry internship opportunities.\n\n' +
            'Developed an MVP for Scotiabank, which you can demo '}
            <a href="https://request-to-pay.herokuapp.com/">here!</a>
          </Body>
        </div>
      </div>
      <div className="container-for-centering">
        <div className="about-end">
          <button
            type="button"
            className="about-end-button"
            onClick={() => { history.push('/experience'); }}
          >
            Check out my work experience here!
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
