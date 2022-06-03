import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-main" id="contact">
      <h2>Contact me</h2>

      <form className="contact-form" data-aos="fade-down">
        <input placeholder="Name" className="form-input"></input>
        <input placeholder="Email" className="form-input"></input>
        <textarea className="form-input" placeholder="Message..."></textarea>
        <button>Go!</button>
      </form>
    </div>
  );
}
