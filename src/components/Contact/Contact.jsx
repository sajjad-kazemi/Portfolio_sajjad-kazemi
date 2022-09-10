import { Envelope, GeoAlt, Github, Send } from "react-bootstrap-icons";
import { useRef, useState } from "react";

import emailJs from "./emailJs";
import style from "./Contact.module.css";

function Contact() {
  const [success, setSuccess] = useState({ visibility: "hidden" });
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailJs(e, setSuccess, form);
    const inputs = form.current.children
    for (let i in inputs){
      if(inputs[i].value){
        inputs[i].value = ''
      };
    }
  };

  return (
    <section className={style.section}>
      <div className={style.infoList}>
        <div className={`${style.git} ${style.info}`}>
          <a target="_blank" href="https://github.com/sajjad-kazemi">
            sajjad-kazemi
          </a>
          <Github />
        </div>
        <div className={`${style.location} ${style.info}`}>
          <a target="_blank" href="https://goo.gl/maps/JgfExD1QxB2W26T39">
            Iran, Tehran
          </a>
          <GeoAlt />
        </div>
      </div>
      <div className={style.emailjs}>
        <h1 className={style.chat}>
          <Envelope style={{marginRight:'10px'}}/>
        </h1>
        <form className={style.form} ref={form} onSubmit={sendEmail}>
          <label htmlFor="user_name">
            Name<strong style={{ color: "red" }}>*</strong>
          </label>
          <input
            className={style.userName}
            required
            type="text"
            name="user_name"
          />
          <label htmlFor="user_email">
            Email<strong style={{ color: "red" }}>*</strong>
          </label>
          <input
            className={style.userEmail}
            required
            type="email"
            name="user_email"
          />
          <label>Message</label>
          <textarea
            dir="auto"
            className={style.userMessage}
            required
            rows="6"
            
            name="message"
          />
          <button
            name="send"
            className={style.submit}
            type="submit"
            title="Send"
          >
            Send
            <Send />
          </button>
          <label htmlFor="send" className={style.success} style={success}>
            Success! your message was sent to my email.
          </label>
        </form>
      </div>
    </section>
  );
}

export default Contact;
