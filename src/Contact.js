import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n4ywlxh",
        "react-portfolio-email",
        form.current,
        "SlO4DarxVb5ZBHzhr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact-main" id="contact">
      <h2>Contact me</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
        data-aos="fade-down"
      >
        <input placeholder="Name" className="form-input" name="name"></input>
        <input
          type="email"
          placeholder="Email"
          className="form-input"
          name="email"
        ></input>
        <textarea
          className="form-input"
          name="message"
          placeholder="Message..."
        ></textarea>
        <button>Go!</button>
      </form>
    </div>
  );
}
