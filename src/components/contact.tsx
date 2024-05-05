import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const NAME_FORM_VALUE = "user_name";
const EMAIL_FORM_VALUE = "user_email";
const SUBJECT_FORM_VALUE = "subject";
const MESSAGE_FORM_VALUE = "message"

const defaultFormValues = {
  [NAME_FORM_VALUE]: "",
  [EMAIL_FORM_VALUE]: "",
  [SUBJECT_FORM_VALUE]: "",
  [MESSAGE_FORM_VALUE]: ""
}

const Contact = () => {
  const formRef = useRef<any>();

  const [formValues, setFormValues] = useState<{ [keys: string]: string }>(defaultFormValues);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    let updatedFormValues = { ...formValues }
    updatedFormValues[name] = value
    setFormValues(updatedFormValues)
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    emailjs
      .sendForm("service_f7mlk3c", 'template_7wrt73m', formRef.current, {
        publicKey: "XRGXZHXbHsuv7I4Sj",
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }

  return (
    <div className="page-container">
    <div className="container">
      <div>
        <h1 className="career-heading">Connect. Enquire. Follow.</h1>
        <p className="career-desc">I enjoy engaging with people in tech, though I may procrastinate on replies. Feel free to start a conversation, and I’ll try my best to respond promptly.</p>
        <form ref={formRef} onSubmit={handleSubmit} className="form-container">
          <div className="name-email-container">
            <input type="text" name={NAME_FORM_VALUE} value={formValues[NAME_FORM_VALUE]} placeholder="Name" onChange={handleChange} required autoFocus />
            <input type="email" name={EMAIL_FORM_VALUE} value={formValues[EMAIL_FORM_VALUE]} placeholder="Email" onChange={handleChange} required />
          </div>
          <input type="text" value={formValues[SUBJECT_FORM_VALUE]} name={SUBJECT_FORM_VALUE} placeholder="Subject" onChange={handleChange} required />
          <textarea name={MESSAGE_FORM_VALUE} value={formValues[MESSAGE_FORM_VALUE]} placeholder="Message" onChange={handleChange} required cols={10} rows={5} />
          <div className="send-btn-container">
            <button>Send</button>
          </div>
        </form>
   
    </div>
    </div>
    </div>
  )
}

export default Contact;
