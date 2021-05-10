import React, { useState } from 'react';
import { validateEmail } from '../../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const { name, email, message } = formState
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.value.length === 0) {
      setErrorMessage('All fields are required.')
    }

    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value)
      if (!isValid) {
        setErrorMessage('Please enter a valid email address.');
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value })
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section>
      <h2 className='section-header'>CONTACT</h2>
      <div className='container'>
        <form id="contact-form" className="contactForm" onSubmit={handleSubmit}>
          <h2 className='reach-out'>'Reach Out, Touch Faith'</h2>
          <p className='jc'>-JC</p>
          <div className="name">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" placeholder='Joe Mama' defaultValue={name} onBlur={handleChange} />
          </div>
          <div className="email">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" placeholder='joe_mama@ligma.team' defaultValue={email} onBlur={handleChange} />
          </div>
          <div className="message">
            <label htmlFor="message">Message:</label>
            <textarea name="message" placeholder='Wow! We love your work! You are so employable! Eskiddit!' defaultValue={message} onBlur={handleChange} />
          </div>
          {errorMessage && (
            <div>
              <p className='error'>{errorMessage}</p>
            </div>
          )}
          <div className='btn-container'>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact;