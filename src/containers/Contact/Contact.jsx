import "./Contact.scss";
import mail from "../../assets/mail.svg";
import github from "../../assets/github.png";
import Heading from "../../components/Heading/Heading";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <Heading text="Contact" />
      <div className="contact-container">
        <a
          href="mailto:ella.choy@nology.io"
          target="_blank"
          className="contact__item"
        >
          <img src={mail} alt="mail" className="contact__img" />
          <p className="contact__text">ella.choy@nology.io</p>
        </a>

        <a
          href="https://github.com/ellaellac"
          target="_blank"
          className="contact__item"
        >
          <img src={github} alt="github" className="contact__img" />
          <p className="contact__text">https://github.com/ellaellac </p>
        </a>

        <a href="#header" className="contact__item contact__text">
          Back to top
        </a>
      </div>
    </section>
  );
};
export default Contact;
