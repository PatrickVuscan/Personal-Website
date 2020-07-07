import React from 'react';
import PropTypes from 'prop-types';

const ContainerTitle = (props) => {
  return <h1 className="text-container-title" {...props} />;
};

ContainerTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

const SuperText = (props) => {
  return <h2 className="text-super" {...props} />;
};

SuperText.propTypes = {
  children: PropTypes.string.isRequired,
};

const Title = (props) => {
  return <h2 className="text-title" {...props} />;
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

const Subtitle = (props) => {
  return <h3 className="text-subtitle" {...props} />;
};

Subtitle.propTypes = {
  children: PropTypes.string.isRequired,
};

const Professor = (props) => {
  return <p className="text-details" {...props} />;
};

Professor.propTypes = {
  children: PropTypes.string.isRequired,
};

const Lecture = (props) => {
  return <p className="text-details" {...props} />;
};

Lecture.propTypes = {
  children: PropTypes.string.isRequired,
};

const Body = (props) => {
  return <p className="text-body" {...props} />;
};

Body.propTypes = {
  children: PropTypes.string.isRequired,
};

const ErrorMessage = (props) => {
  return <p className="text-error" {...props} />;
};

ErrorMessage.propTypes = {
  children: PropTypes.string.isRequired,
};

const Details = (props) => {
  return <p className="text-details" {...props} />;
};

Details.propTypes = {
  children: PropTypes.string.isRequired,
};

const FooterText = (props) => {
  return <p className="text-footer" {...props} />;
};

FooterText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export {
  ContainerTitle,
  SuperText,
  Title,
  Subtitle,
  Body,
  ErrorMessage,
  Details,
  FooterText,
};
