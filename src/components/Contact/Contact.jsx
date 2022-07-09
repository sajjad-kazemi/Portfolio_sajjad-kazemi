import {Envelope, GeoAlt} from 'react-bootstrap-icons'

import React from 'react'
import style from './Contact.module.css'

function Contact() {
  return (
    <section className={style.section}>
      <div>
        <div className={style.mail}><Envelope/><a href="mailto:sajjad9410kazemi@gmail.com">@sajjad9410kazemi@gmail.com</a></div>
        </div>
    </section>
  )
}

export default Contact