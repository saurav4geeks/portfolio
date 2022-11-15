import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";

function Contact() {
  const [state, handleSubmit] = useForm("xqkjwvpz");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className="contact-wrapper" id="section-contact">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1 className="font-playfair contact-header">Get in touch</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="contact-content">
              <Form className="contact-form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Control type="text" name="Name" placeholder="Name" />
                  <ValidationError
                    prefix="Name"
                    field="text"
                    errors={state.errors}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control type="email" name="Email" placeholder="Email" />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Control
                    type="number"
                    placeholder="Phone"
                    name="Phone"
                    maxLength={10}
                  />
                  <ValidationError
                    prefix="Phone"
                    field="number"
                    errors={state.errors}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Your Message"
                    name="message"
                  />
                  <ValidationError
                    prefix="Message"
                    field="textarea"
                    errors={state.errors}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={state.submitting}
                >
                  Submit
                </Button>
              </Form>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="contact-side ">
              <h4>CONTACT ME</h4>
              <ul>
                <li>SAURAV SUMAN</li>
                <li>
                  <a
                    className="link-contact"
                    href="mailto:sauravsuman5980@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    sauravsuman5980@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    className="link-contact"
                    href="tel:+9155962770"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (+91) 9155962770
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact-side mt-5">
              <h4>WHERE TO FIND ME</h4>
              <ul className="find-me">
                <li>
                  <a
                    className="link-contact"
                    href="https://www.linkedin.com/in/saurav-suman-ind/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="link-contact"
                    href="https://dribbble.com/sauravsuman5980"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dribbble
                  </a>
                </li>
                <li>
                  <a
                    className="link-contact"
                    href="https://github.com/saurav4geeks"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
