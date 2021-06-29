import React, { useEffect, useRef, useState } from 'react';
import '../../App.scss';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Body, Title, SuperText } from '../General/General';
import { descriptionSentences, education } from './content';

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
      setTextIndex(index => (index + 1) % descriptionSentences.length);
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
              {descriptionSentences[textIndex]}
            </SuperText>
            <Body>
              {'I\'m a software developer based in Toronto, Canada, learning about AI and ML, ' +
              'while specializing in web development!'}
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
            <SuperText>{education.uoft.title}</SuperText>
            <SuperText className="text-super-sub">
              {education.uoft.subtitle}
            </SuperText>
            {/* <SuperText className="text-super-sub">
              {'\'18 - \'22'}
            </SuperText> */}
          </div>
          <Body>
            {education.uoft.description}
          </Body>
          <div>
            <SuperText>{education.tli.title}</SuperText>
            <SuperText className="text-super-sub">
              {education.tli.subtitle}
            </SuperText>
          </div>
          <Body>
            {education.tli.description}
            {/* This is the little link I couldn't include more easily in content.js */}
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
