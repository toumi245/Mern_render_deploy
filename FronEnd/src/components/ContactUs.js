import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dt6z425',
'template_1y03kdc',form.current, '_bZ-pSch2Ugp1asQF'
          )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
    <div>
        <h2>Don't hesitate to contact us</h2>
            <form ref={form} onSubmit={sendEmail}style={{display:'flex',flexDirection:'column',margin:' 150px',justifyContent:'center',width:'100'}}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
  )
}

export default ContactUs