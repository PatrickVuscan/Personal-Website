import { Body, Title } from "../General/General";

import "./CallToAction.scss";

const bodyText
  = "I'm always looking for new opportunities and exciting projects to take part in! "
  + "Whether you have questions, or just want to say hi, send me a message and I'll get "
  + "back to you soon!";

const Contact = () => (
  <div className="contact-cta">
    <Title>Get in touch!</Title>
    <Body>{bodyText}</Body>
  </div>
);

export default Contact;
