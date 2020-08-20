import React, { useEffect, useRef, useState } from 'react';
import '../../App.scss';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Body, Title, SuperText } from '../General/General';

const sentences = [
  'I make ideas happen.',
  'I\'m a software developer.',
  'I design UI experiences.',
  'I develop applications.',
  'I work on startups.',
  'If you\'re still reading...',
  'I guess I\'ll tell you more!',
  'I love cooking.',
  'I\'m really into music!',
  'I\'m learning German!',
  'I\'ve travelled to 22 countries!',
  'And now... back to the start.',
];

const About = () => {
  const history = useHistory();
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  const [textIndex, setTextIndex] = useState(0);
  const [showText, setShowText] = useState(true);
  const textIndexRef = useRef();
  textIndexRef.current = textIndex;

  useEffect(() => {
    setTimeout(() => {
      setShowText(false);
    }, 2500);
    const interval = setInterval(() => {
      setShowText(true);
      setTextIndex(textIndex => (textIndex + 1) % sentences.length);
      setTimeout(() => {
        setShowText(false);
      }, 2500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-list">
      <div className="container">
        <div className="container-for-centering">
          <div className="about">
            <Title>
              Hello world!{isMobile ? '\n' : ''} My name is
            </Title>
            <SuperText className="hover">Patrick Vuscan.</SuperText>
            { isMobile && (
              <div
                className="container-for-centering"
              >
                <img
                  src="CAPic.jpeg"
                  alt="Patrick Vuscan in California"
                  className="profile-picture"
                />
              </div>
            )}
            <SuperText className={`text-super-sub fading ${showText ? '' : 'hidden'}`}>
              {sentences[textIndex]}
            </SuperText>
            <Body>
              {'I\'m a software developer based in Toronto, Canada, specializing in AI and ML, ' +
              'but also designing and developing web applications!'}
            </Body>
          </div>
        </div>
        {!isMobile && (
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
        )}
      </div>
      <div className="container-for-centering">
        <div className="education">
          <Title>Education</Title>
          <div>
            <SuperText>HBSc. Computer Science</SuperText>
            <SuperText className="text-super-sub">
              University of Toronto
            </SuperText>
            <SuperText className="text-super-sub">
              {'\'18 - \'22'}
            </SuperText>
          </div>
          <Body>
            {'Honours studies in Computer Science, with a focus in Artificial Intelligence and ' +
            'Machine Learning. Minor in German!\n\n' +
            'Awarded the Mary Victoria Court Scholarship in 2019, the J. A. Surerus Memorial ' +
            'Scholarship in 2020, and a two-time Dean’s List Scholar, in 2019 and 2020.\n\n' +
            'Member of the University of Toronto\'s exclusive Technology Leadership Initiative.'}
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
            'As part of the Initiative, I developed an MVP for the Global Payments division ' +
            'of Scotiabank, which you can demo '}
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
