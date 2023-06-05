// @ts-nocheck
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useTranslations } from '../i18n/utils'

export const Form = ({ lang }: string) => {
  const t = useTranslations(lang)
  const form = useRef(null)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_5gob9mp',
        'template_92p2e57',
        form.current,
        'yYqGqbCI4uWtRiOoH'
      )
      .then(
        (result) => {
          console.log(result.text, 'ici')
          form.current.reset()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  const onChangeHandler = (e) => {
    e.preventDefault()
    if (e.target.value.length > 0) {
      e.target.style.background = 'white'
    }
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="field">
        <label htmlFor="username">
          {t('form.fullName')}
          {/* Nom : */}
          <input
            id="username"
            type="text"
            placeholder={t('form.username.placeHolder')}
            // placeholder="Nom"
            name="user_name"
            onChange={onChangeHandler}
            minLength="3"
            tabIndex="1"
            required
          />
        </label>
      </div>
      <div className="field">
        <label htmlFor="email">
          Email :
          <input
            id="email"
            type="email"
            placeholder="email@domain.com"
            required
            name="user_email"
            tabIndex="2"
            onChange={onChangeHandler}
          />
        </label>
      </div>
      <div className="field">
        <label htmlFor="message">
          Message :
          <textarea
            id="message"
            placeholder={t('form.message')}
            // placeholder="Message ..."
            required
            name="message"
            minLength="3"
            tabIndex="3"
            onChange={onChangeHandler}></textarea>
        </label>
      </div>
      <button className="btn-submit">{t('button.send')}</button>
    </form>
  )
}
