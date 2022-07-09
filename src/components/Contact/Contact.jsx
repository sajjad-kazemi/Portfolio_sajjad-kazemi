import {Chat, Envelope, GeoAlt, Github, Send} from 'react-bootstrap-icons'

import emailJs from '@emailjs/browser'
import style from './Contact.module.css'
import {useRef} from 'react'

function Contact() {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    .then((result) => {
      alert('your email message got sent.');
    }, (error) => {
      alert('Error! please try again!');
      console.log(error.text);
    });
    for (let i = 0; i < form.current.children.length ; i++){
      form.current[i].value =''
    }
  }

  return (
    <section className={style.section}>
      <div className={style.infoList}>
        <div className={`${style.mail} ${style.info}`}><a href="mailto:sajjad9410kazemi@gmail.com">@sajjad9410kazemi@gmail.com</a><Envelope/></div>
        <div className={`${style.git} ${style.info}`}><a href="https://github.com/sajjad-kazemi">my Github</a><Github/></div>
        <div className={`${style.location} ${style.info}`}><a href="#">Iran, Tehran</a><GeoAlt/></div>
      </div>
      <div className={style.emailjs}>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input required type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
      </div>
    </section>
  )
}

export default Contact