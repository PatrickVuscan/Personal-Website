import React from 'react';
import PropTypes from 'prop-types';

const ContainerTitle = (props) => {
  return <h1 className="text-container-title">{props.children}</h1>;
};

ContainerTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

const Title = (props) => {
  return <h2 className="text-title">{props.children}</h2>;
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

const Subtitle = (props) => {
  return <h3 className="text-subtitle">{props.children}</h3>;
};

Subtitle.propTypes = {
  children: PropTypes.string.isRequired,
};

const Body = (props) => {
  return <p {...props} className="text-body">{props.children}</p>;
};

Body.propTypes = {
  children: PropTypes.string.isRequired,
};

const ErrorMessage = (props) => {
  return <p {...props} className="text-error">{props.children}</p>;
};

ErrorMessage.propTypes = {
  children: PropTypes.string.isRequired,
};

const Details = (props) => {
  return <p className="text-details">{props.children}</p>;
};

Details.propTypes = {
  children: PropTypes.string.isRequired,
};

const FooterText = (props) => {
  return <p className="text-footer">{props.children}</p>;
};

FooterText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export {
  ContainerTitle,
  Title,
  Subtitle,
  Body,
  ErrorMessage,
  Details,
  FooterText,
};
