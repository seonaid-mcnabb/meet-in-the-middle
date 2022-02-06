import React, { useState, useRef } from "react";
import LogoNav from "./LogoNav";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import Github from "../images/github.png";
import LinkedIn from "../images/linkedin.png";
import Fade from "react-reveal/Fade";
import useLocalStorage from "use-local-storage"; //imported for the purpose of toggling light/dark themes

init("user_HlsvJEpkUfjym2nM9POQf"); // emailJS user for sending emails (what is this?)

export default function Contact() {
  //for testing purposes, have imported these here but think
  //they can be removed at a later time (mode should be chose on homepage?)
  let defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  let [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  //

  let [emailSent, setEmailSent] = useState("");

  const form = useRef(); //useRef allows you to directly create a referenceto the DOM element in a function component

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ijuczue",
        "template_c10wep9",
        form.current,
        "user_HlsvJEpkUfjym2nM9POQf"
      ) // this code uses a service called EmailJS to send live emails via a contact form
      .then(
        (result) => {
          setEmailSent("Message sent!");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-body" data-theme={theme}>
      <LogoNav />
      <Fade bottom>
        <div className="contact-container">
          <div className="row contact-form">
            <div className="icons col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h6>Connect with me:</h6>
              <a href="https://github.com/AlexJackson01" target="_blank">
                <img src={Github} className="contact-icons" alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/alex-j-jackson/"
                target="_blank"
              >
                <img src={LinkedIn} className="contact-icons" alt="" />
              </a>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h6>Send me a message:</h6>
              <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control input-group-lg header"
                        name="user_name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="text"
                        className="form-control input-group-lg header"
                        name="user_email"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-xs-12 col-sm-12">
                    <div className="form-group">
                      <label>Message</label>
                      <textarea
                        name="message"
                        className="form-control input-group-lg header"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="contact-div col-lg-12 col-xs-12 col-sm-12">
                    <button className="search-btn" type="submit" id="search">
                      Send
                    </button>
                  </div>
                </div>
                <p className="contact-confirmation">{emailSent}</p>
              </form>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
