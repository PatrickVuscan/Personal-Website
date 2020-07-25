import React, { useState } from 'react';
import '../../App.scss';
import firebase from '../../firebase';
import { Body, Title, ErrorMessage } from '../General/General';

const ReportBug = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [page, setPage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [pageError, setPageError] = useState(false);

  const validateEmail = () => {
    const valid = email.length === 0 ||
      /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/.test(email);
    setEmailError(!valid);
    return valid;
  };

  const validatePhoneNumber = () => {
    const valid = phoneNumber.length === 0 ||
      /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/.test(phoneNumber);
    setPhoneNumberError(!valid);
    return valid;
  };

  const validatePage = () => {
    const valid = page.length > 0;
    setPageError(!valid);
    return valid;
  };

  const validateMessage = () => {
    const valid = message.length > 0;
    setMessageError(!valid);
    return valid;
  };

  const submitToDB = () => {
    firebase.database().ref('contacts').push({
      email: (email) || null,
      phoneNumber: (phoneNumber) || null,
      page,
      message,
    });
  };

  const handleSubmitAccountInfo = (event) => {
    event.preventDefault();
    if (validateEmail() && validatePhoneNumber() && validateMessage() && validatePage()) {
      setSubmitted(true);
      submitToDB();
      return true;
    }
    validateEmail();
    validatePhoneNumber();
    validatePage();
    validateMessage();
    return false;
  };

  return (
    <>
      <div className="container-for-centering">
        <div className="contact">
          <Title>Report a Bug</Title>
          <Body>
            {'While it\'s never nice to find out you\'ve got bugs in your code, ' +
            'it\'s always great to learn from them, so thank you for submitting a ' +
            'bug report! Please just let me know what page it shows up on, and a ' +
            'brief description of the issue!\n\n' +
            'If it would be possible to contact you about any questions I have, please ' +
            'leave an email or phone number as well!'}
          </Body>
          <form onSubmit={handleSubmitAccountInfo}>
            <label className="text-subtitle" htmlFor="email">
              <span>Email (Optional)</span>
              <input
                id="email"
                type="text"
                onBlur={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
            { emailError && <ErrorMessage>Please enter a valid email!</ErrorMessage>}
            <label className="text-subtitle" htmlFor="phoneNumber">
              <span>Phone Number (Optional)</span>
              <input
                id="phoneNumber"
                type="text"
                onBlur={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </label>
            { phoneNumberError && <ErrorMessage>Please enter a valid phone number!</ErrorMessage>}
            <label className="text-subtitle" htmlFor="page">
              <span>Page</span>
              <select
                id="page"
                onSelect={(e) => {
                  setPage(e.target.value);
                }}
              >
                <option value="Home">Home/About</option>
                <option value="Experience">Experience</option>
                <option value="Contact">Contact</option>
                <option value="Resume">Resume</option>
                <option value="ReportBug">Report a Bug</option>
              </select>
            </label>
            { pageError && <ErrorMessage>Please enter a page!</ErrorMessage>}
            <label className="text-subtitle" htmlFor="message">
              <span>Message</span>
              <textarea
                id="message"
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

export default ReportBug;
