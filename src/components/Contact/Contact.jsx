import { ChatDots, Envelope, GeoAlt, Github, Send } from "react-bootstrap-icons";
import { useRef, useState } from "react";

import emailJs from "./emailJs";
import style from "./Contact.module.css";

function Contact() {
  const [success, setSuccess] = useState({ visibility: "hidden" });
  const form = useRef();
  const sendEmail = (e) => {
    emailJs(e, setSuccess, form);
    if(success.visibility ==='visible'){
      for (let i = 0; i < form.current.children.length; i++) {
        if (form.current[i]) {
          form.current[i].value = "";
        }
      }
    }
  };

  return (
    <section className={style.section}>
      <div className={style.infoList}>
        <div className={`${style.mail} ${style.info}`}>
          <a href="mailto:sajjad9410kazemi@gmail.com">
            @sajjad9410kazemi@gmail.com
          </a>
          <Envelope />
        </div>
        <div className={`${style.git} ${style.info}`}>
          <a href="https://github.com/sajjad-kazemi">/sajjad-kazemi</a>
          <Github />
        </div>
        <div className={`${style.location} ${style.info}`}>
          <a href="#">Iran, Tehran</a>
          <GeoAlt />
        </div>
      </div>
      <div className={style.emailjs}>
        <h1 className={style.chat}><ChatDots/></h1>
        <form className={style.form} ref={form} onSubmit={sendEmail}>
          <label htmlFor="user_name">Name(required)</label>
          <input
            className={style.userName}
            required
            type="text"
            name="user_name"
          />
          <label htmlFor="user_email">Email(required)</label>
          <input
            className={style.userEmail}
            required
            type="email"
            name="user_email"
          />
          <label>Message</label>
          <textarea
            className={style.userMessage}
            required
            rows="6"
            name="message"
          />
          <button name="send" className={style.submit} type="submit" title="Send">
            Send 
            <Send />
          </button>
          <label htmlFor="send" className={style.success} style={success}>
            Success
          </label>
        </form>
      </div>
    </section>
  );
}

export default Contact;
