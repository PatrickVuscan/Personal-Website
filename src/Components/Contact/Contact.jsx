import { useState } from "react";

import CallToAction from "./CallToAction";
import sendEmail from "../../Firebase/SendEmail";
import { Body, ErrorMessage } from "../General/General";
import LinkedIn from "./LinkedIn";

import "../../App.scss";
import "./Contact.scss";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const validateEmail = () => {
    const valid = email.length > 0 && /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    setEmailError(!valid);
    return valid;
  };

  const validatePhoneNumber = () => {
    const valid = phoneNumber.length === 0 ||
      /^(\+?\d{1,3})?[-. ]?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/.test(phoneNumber);
    setPhoneNumberError(!valid);
    return valid;
  };

  const validateMessage = () => {
    const valid = message.length > 0 && /^[a-zA-Z0-9.,!?'"\n\r(){}[\]@#$%^&*-_+=:;/<>|~` ]*$/.test(message);
    setMessageError(!valid);
    return valid;
  };

  const handleSendEmail = () => {
    sendEmail({
      email,
      phoneNumber,
      message,
    })
      .then((result) => {
        const data = result.data;
        const message = data.message;
        console.log(result);
        console.log(data);
        console.log(message);
      })
      .catch((e) => {
        console.error(e);
      });
  }

  const handleSubmitAccountInfo = (event) => {
    event.preventDefault();

    if (validateEmail() && validatePhoneNumber() && validateMessage()) {
      setSubmitted(true);
      handleSendEmail();
      return true;
    }

    validateEmail();
    validatePhoneNumber();
    validateMessage();
    return false;
  };

  return (
    <div className="center-content">
      <div className="contact">
        <LinkedIn />
        <CallToAction />

        <form onSubmit={handleSubmitAccountInfo}>
          <label htmlFor="email">
            <span>Email</span>
            <input
              id="email"
              type="text"
              onBlur={(e) => {
                setEmail(e.target.value);
              }}
              onKeyDown={(e) => { return e.key !== "Enter"; }}
            />
          </label>

          {emailError && <ErrorMessage>Please enter a valid email!</ErrorMessage>}

          <label htmlFor="phoneNumber">
            <span>Phone Number (Optional)</span>
            <input
              id="phoneNumber"
              type="text"
              onBlur={(e) => {
                setPhoneNumber(e.target.value);
              }}
              onKeyDown={(e) => { return e.key !== "Enter"; }}
            />
          </label>

          {phoneNumberError && <ErrorMessage>Please enter a valid phone number!</ErrorMessage>}

          <label htmlFor="message">
            <span>Message</span>
            <textarea
              id="message"
              onBlur={(e) => {
                setMessage(e.target.value);
              }}
            />
          </label>

          {messageError && <ErrorMessage>Please enter a message!</ErrorMessage>}

          <button className="text-button centered" type="submit">Send</button>
        </form>

        {submitted && <Body>{"Sent! I'll get back to you soon :)"}</Body>}
      </div>
    </div>
  );
};

export default Contact;
