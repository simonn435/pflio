import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mrgrdqbz");
  if (state.succeeded) {
    return <p>Thanks for message me! I'll contact you as soon as i can.</p>;
  }
  console.log(handleSubmit);
  return (
    <form
      onSubmit={handleSubmit}
      action="https://formspree.io/f/mrgrdqbz"
      method="POST"
      className="contact__form"
    >
      <div className="contact__form-container">
        <input
          type="text"
          id="name"
          name="name"
          required
          className="contact__input"
        />
        <label htmlFor="name" className="label">
          Name
        </label>
        <span className="contact__line"></span>
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div className="contact__form-container">
        <input
          type="email"
          name="email"
          required
          className="contact__input"
          id="email"
        />
        <label htmlFor="email" className="label">
          Email
        </label>
        <span className="contact__line"></span>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="contact__form-container textarea">
        <textarea
          type="text"
          id="message"
          name="message"
          required
          className="contact__textarea"
        />
        <label htmlFor="email" className="label">
          Type your message here...
        </label>

        <span className="contact__line"></span>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <div className="contact__submit-container">
        <button type="submit" className="btn__outline-red contact__submit">
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
