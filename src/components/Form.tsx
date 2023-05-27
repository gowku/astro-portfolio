// @ts-nocheck
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Style from './styles.module.css';

export const Form = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5gob9mp', 'template_92p2e57', form.current, 'yYqGqbCI4uWtRiOoH').then(
      (result) => {
        console.log(result.text, 'ici');
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    if (e.target.value.length > 0) {
      e.target.style.background = 'white';
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className='field'>
        <label htmlFor='username'>
          Nom :
          <input
            id='username'
            type='text'
            placeholder='e.g. john doe'
            name='user_name'
            onChange={onChangeHandler}
            minlength='3'
            tabIndex='1'
            required
          />
        </label>
      </div>
      <div className='field'>
        <label htmlFor='email'>
          Email :
          <input
            id='email'
            type='email'
            placeholder='email@domain.com'
            required
            name='user_email'
            tabIndex='2'
            onChange={onChangeHandler}
          />
        </label>
      </div>
      <div className='field'>
        <label htmlFor='message'>
          Message :
          <textarea
            id='message'
            placeholder='Bonjour, ...'
            required
            name='message'
            minlength='3'
            tabIndex='3'
            onChange={onChangeHandler}></textarea>
        </label>
      </div>
      <button className='btn-submit'>Envoyer</button>
    </form>
  );
};
