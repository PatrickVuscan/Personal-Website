import React from "react";

const SuperText = ({ className, children }) => {
  return <p className={`text-super ${className || ""}`}>{children}</p>;
};

const Title = ({ children }) => {
  return <h1 className="text-title">{children}</h1>;
};

const Subtitle = ({ children }) => {
  return <h2 className="text-subtitle">{children}</h2>;
};

const Body = ({ children }) => {
  return <p className="text-body">{children}</p>;
};

const ErrorMessage = ({ children }) => {
  return <p className="text-error">{children}</p>;
};

export {
  SuperText,
  Title,
  Subtitle,
  Body,
  ErrorMessage,
};
