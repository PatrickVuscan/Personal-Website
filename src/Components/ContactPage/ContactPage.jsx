import React, { useState } from 'react';
import '../../App.scss';
import { Body, Title, ErrorMessage } from '../General/General';

const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const validateEmail = () => {
    const valid = email.length > 0 && /@.*\./.test(email);
    setEmailError(!valid);
    return valid;
  };

  const validatePhoneNumber = () => {
    const valid = phoneNumber.length === 0 ||
      /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/.test(phoneNumber);
    setPhoneNumberError(!valid);
    return valid;
  };

  const validateMessage = () => {
    const valid = message.length > 0 && /^[a-zA-Z @.-/\\]+$/.test(message);
    setMessageError(!valid);
    return valid;
  };

  const handleSubmitAccountInfo = (event) => {
    event.preventDefault();
    if (validateEmail() && validatePhoneNumber() && validateMessage()) {
      setSubmitted(true);
      return true;
    }
    validateEmail();
    validatePhoneNumber();
    validateMessage();
    return false;
  };

  return (
    <>
      <div className="container-for-centering">
        <div className="contact">
          <Title>Get in touch!</Title>
          <Body>
            {'I\'m always looking for new opportunities and exciting projects to take part in! ' +
            'Whether you have questions, or just want to say hi, send me a message and I\'ll get ' +
            'back to you soon!'}
          </Body>
          <form onSubmit={handleSubmitAccountInfo}>
            <label className="text-subtitle" htmlFor="email">
              <span>Email</span>
              <input
                id="email"
                type="text"
                // value={email}
                onBlur={(e) => {
                  setEmail(e.target.value);
                }}
                onKeyDown={(e) => { return e.key !== 'Enter'; }}
              />
            </label>
            { emailError && <ErrorMessage>Please enter a valid email!</ErrorMessage>}
            <label className="text-subtitle" htmlFor="phoneNumber">
              <span>Phone Number (Optional)</span>
              <input
                id="phoneNumber"
                type="text"
                // value={phoneNumber}
                onBlur={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                onKeyDown={(e) => { return e.key !== 'Enter'; }}
              />
            </label>
            { phoneNumberError && <ErrorMessage>Please enter a valid phone number!</ErrorMessage>}
            <label className="text-subtitle" htmlFor="message">
              <span>Message</span>
              <input
                id="message"
                type="textarea"
                // value={message}
                onBlur={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </label>
            { messageError && <ErrorMessage>Please enter a message!</ErrorMessage>}
            <button type="submit" className="centered">Send</button>
          </form>
          {
            submitted && (
            <Body>
              {'Sent! I\'ll get back to you soon :)'}
            </Body>
            )
}
        </div>
      </div>
    </>
  );
};

export default ContactPage;
