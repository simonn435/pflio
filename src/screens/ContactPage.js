import React from "react";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <section className="contact">
      <div className="contact__header">
        <h3 className="section__title">
          Contact <span className="text__red">Me</span>
        </h3>
        <h5 className="section__subheader">
          Let's <span className="text__red">get</span> in touch
        </h5>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactPage;
