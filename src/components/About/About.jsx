import React from 'react'
import style from  './About.module.css'

function About() {
  return (
    <section className={style.section}>
      <div className={style.about}>
        <div className={style.title}><h4>Sajjad Kazemi</h4></div>
        <div className={style.title}><h1>Web Developer From Iran</h1></div>
        <p className={style.aboutText}>A talented Front-end developer who pursues his big dreams in web development and Advance his career
        I don't have much experience but i'm sure i'm gonna be working with great developers in many companies. </p>
      </div>
      <div className={style.skills}>
        <div className={`${style.skillBar} ${style.htmlCss}`}><h3>html5-css3</h3><div className={`${style.bar}`}></div></div>
        <div className={`${style.skillBar} ${style.bootstrap}`}><h3>Bootstrap</h3><div className={`${style.bar}`}></div></div>
        <div className={`${style.skillBar} ${style.js}`}><h3>Javascript</h3><div className={`${style.bar}`}></div></div>
        <div className={`${style.skillBar} ${style.react}`}><h3>React js</h3><div className={`${style.bar}`}></div></div>
        <div className={`${style.skillBar} ${style.mui}`}><h3>Material UI</h3><div className={`${style.bar}`}></div></div>
      </div>
    </section>
  )
} 

export default About