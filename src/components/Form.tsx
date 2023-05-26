// @ts-nocheck
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Style from "./styles.module.css";

export const Form = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_5gob9mp", "template_92p2e57", form.current, "yYqGqbCI4uWtRiOoH").then(
      (result) => {
        console.log(result.text, "ici");
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="field" tabIndex="1">
        <label id="labels" htmlFor="username">
          <i className="far fa-user"></i>Votre Nom
        </label>
        <input name="username" type="text" placeholder="e.g. john doe" required name="user_name" />
      </div>
      <div className="field" tabIndex="2">
        <label htmlFor="email">
          <i className="far fa-envelope"></i>Votre Email
        </label>
        <input name="email" type="email" placeholder="email@domain.com" required name="user_email" />
      </div>
      <div className="field" tabIndex="3">
        <label htmlFor="message">
          <i className="far fa-edit"></i>
          Votre Message
        </label>
        <textarea name="message" placeholder="Bonjour, ..." required name="message"></textarea>
      </div>
      <button className="btn-submit">Envoyer</button>
    </form>
  );
};
