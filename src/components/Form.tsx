// @ts-nocheck
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useTranslations } from '../i18n/utils'
import Notification from './Notification'

export const Form = ({ lang }: string) => {
  const t = useTranslations(lang)
  const form = useRef(null)
  const [message, setMessage] = useState('')
  const [succes, setSucces] = useState(false)
  const [isShowing, setIsShowing] = useState(false)

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
          form.current.reset()
          setMessage(t('message.success'))
          setSucces(true)
          setIsShowing(true)
        },
        (error) => {
          setMessage(t('message.error'))
          setSucces(false)
          setIsShowing(true)
        }
      )
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowing(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [isShowing])

  const onChangeHandler = (e) => {
    e.preventDefault()
    if (e.target.value.length > 0) {
      e.target.style.background = 'white'
    }
  }

  return (
    <>
      {isShowing && <Notification message={message} succes={succes} />}
      <form ref={form} onSubmit={sendEmail}>
        <div className="field">
          <label htmlFor="username">
            {t('form.fullName')}
            <input
              id="username"
              type="text"
              placeholder={t('form.username.placeHolder')}
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
              required
              name="message"
              minLength="3"
              tabIndex="3"
              onChange={onChangeHandler}></textarea>
          </label>
        </div>
        <button className="btn-submit">{t('button.send')}</button>
      </form>
    </>
  )
}
