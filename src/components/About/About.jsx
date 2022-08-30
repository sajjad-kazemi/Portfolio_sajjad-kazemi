import React from 'react'
import style from  './About.module.css'

function About() {
  return (
    <>
      <section className={style.section}>
        <div className={style.about}>
          <div className={style.title}><h3>Sajjad Kazemi</h3></div>
          <div className={style.title}><h1>Front-End Developer From Iran</h1></div>
          <p className={style.aboutText}>A talented Front-end developer who pursues his big dreams in web development and Advance his career.<br/>
          I don't have any experience of working in a company but I'm sure I'm gonna be working with great developers in many companies in the future. </p>
        </div>
        <div className={style.skills}>
          <div className={`${style.skillBar} ${style.htmlCss}`}><h3>html5-css3</h3><div className={`${style.bar}`}></div></div>
          <div className={`${style.skillBar} ${style.js}`}><h3>JavaScript</h3><div className={`${style.bar}`}></div></div>
          <div className={`${style.skillBar} ${style.git}`}><h3>Git</h3><div className={`${style.bar}`}></div></div>
          <div className={`${style.skillBar} ${style.react}`}><h3>React js</h3><div className={`${style.bar}`}></div></div>
          <div className={`${style.skillBar} ${style.redux}`}><h3>Redux</h3><div className={`${style.bar}`}></div></div>
          <div className={`${style.skillBar} ${style.mui}`}><h3>Material UI</h3><div className={`${style.bar}`}></div></div>
          <div className={`${style.skillBar} ${style.api}`}><h3>Api</h3><div className={`${style.bar}`}></div></div>
          <div className={`${style.skillBar} ${style.styledComponent}`}><h3>Styled Components</h3><div className={`${style.bar}`}></div></div>
          <div className={`${style.skillBar} ${style.sass}`}><h3>Sass</h3><div className={`${style.bar}`}></div></div>
        </div>
      </section>
      <hr />
      <section className={style.details}>
        <ul className={style.parentList}>
          <li className={style.parentItem}>
            <h3>
              Expert in Html & Css
            </h3>
            <ul className={style.childList}>
              <li className={style.childItem}>
                Implement Html and Css to creating initial layout.
              </li>
              <li className={style.childItem}>
                Building a landing page considering responsive web design scenarios.
              </li>
            </ul>
          </li>
          <li className={style.parentItem}>
            <h3>
              Bootstrap & Tailwind
            </h3>
            <ul className={style.childList}>
              <li className={style.childItem}>
                Utilizing each framework to improve the efficiency of user interface styles.
              </li>
              <li className={style.childItem}>
                Building responsive web applications using these frameworks.
              </li>
            </ul>
          </li>
          <li className={style.parentItem}>
            <h3>
              Expert in Git , remote git repositories (Github & Gitlab)
            </h3>
            <ul className={style.childList}>
              <li className={style.childItem}>
                utilizing the git flow procedure including (branching , pull , push , standard commit , ... ) to better management of projects and code review.
              </li>
            </ul>
          </li>
          <li className={style.parentItem}>
            <h3>
              javaScript programming language
            </h3>
            <ul className={style.childList}>
              <li className={style.childItem}>
              implementing the front-end logic that defines the behavior of the visual elements of a web application.
              </li>
              <li className={style.childItem}>
                connecting the web application with the services that resides on the back-end. 
              </li>
            </ul>
          </li>
          <li className={style.parentItem}>
            <h3>
              
            </h3>
            <ul className={style.childList}>
              <li className={style.childItem}>
                
              </li>
            </ul>
          </li>
          {/* template */}
          {/* <li className={style.parentItem}>
            <h3>
              
            </h3>
            <ul className={style.childList}>
              <li className={style.childItem}>
                
              </li>
            </ul>
          </li> */}
        </ul>
      </section>
    </>
  )
} 

export default About