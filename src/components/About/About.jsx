import React from 'react'
import style from  './About.module.css'

function About() {
  return (
    <>
      <section className={style.section}>
        <div className={style.about}>
          <div className={style.title}><h3>Sajjad Kazemi</h3><h4>2002-now 🧑</h4></div>
          <div className={style.title}><h1>Software Engineer From Iran</h1></div>
          <p className={style.aboutText}>Hi there! I'm Sajjad, a passionate Front-end developer with a love for software engineering. With a strong foundation in HTML, CSS, JavaScript, ReactJs, NextJs, and various libraries, I'm excited to bring my skills to a dynamic team. Although I don't have extensive corporate experience, I've had the opportunity to hone my skills through freelance projects, which have given me a unique perspective on problem-solving and collaboration. I'm now eager to apply my skills and knowledge in a company setting, where I can contribute to innovative projects and continue to learn and grow. </p>
          <p className={style.aboutText}>Hi there! I'm Sajjad, a passionate Front-end developer with a love for software engineering. With a strong foundation in HTML, CSS, JavaScript, ReactJs, NextJs, and various libraries, I'm excited to bring my skills to a dynamic team. Although I don't have extensive corporate experience, I've had the opportunity to hone my skills through freelance projects, which have given me a unique perspective on problem-solving and collaboration. <br/>Specifically, I've gained hands-on experience with WordPress, having designed and developed multiple websites using this popular platform. Additionally, I've worked on optimizing website performance and improving search engine rankings through SEO techniques, which has been a valuable learning experience.<br/>I'm now eager to apply my skills and knowledge in a company setting, where I can contribute to innovative projects and continue to learn and grow. </p>
        </div>
        <div className={style.skills}>
          <div className={`${style.skillBar} ${style.htmlCss} ${style.impt}`}><h3>HTML & CSS</h3><div className={`${style.bar}`}></div></div>
          <div className={`${style.skillBar} ${style.sass}`}><h3>Sass</h3><div className={`${style.bar}`}></div></div>
          <div className={`${style.skillBar} ${style.js} ${style.impt}`}><h3>JavaScript</h3><div className={`${style.bar}`}></div></div>
          <div className={`${style.skillBar} ${style.react} ${style.impt}`}><h3>React js</h3><div className={`${style.bar}`}></div></div>
          <div className={`${style.skillBar} ${style.redux}`}><h3>Redux</h3><div className={`${style.bar}`}></div></div>
          <div className={`${style.skillBar} ${style.mui}`}><h3>Material UI</h3><div className={`${style.bar}`}></div></div>
          <div className={`${style.skillBar} ${style.styledComponent}`}><h3>Styled Components</h3><div className={`${style.bar}`}></div></div>
          <div className={`${style.skillBar} ${style.ts} ${style.impt}`}><h3>Typescript</h3><div className={`${style.bar}`}></div></div>
          <div className={`${style.skillBar} ${style.api}`}><h3>Api</h3><div className={`${style.bar}`}></div></div>
          <div className={`${style.skillBar} ${style.git} ${style.impt}`}><h3>Git</h3><div className={`${style.bar}`}></div></div>
        </div>
      </section>
      <hr />
      <section className={style.details}>
          <h1>Skills</h1>
          <hr/>
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
              Expert in <strong>Git</strong> , remote git repositories (Github & Gitlab)
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
              implementing the <strong>front-end</strong> logic that defines the behavior of the visual elements of a web application.
              </li>
              <li className={style.childItem}>
                connecting the web application with the services that resides on the back-end. 
              </li>
            </ul>
          </li>
          <li className={style.parentItem}>
            <h3>
              React JS library ( <span>advanced level</span> )
            </h3>
            <ul className={style.childList}>
              <li className={style.childItem}>
                Building large and super-fast web applications using <strong>React JS</strong> library, with reusable, maintainable and manageable <strong>Functional Components</strong>.
              </li>
            </ul>
          </li>
          <li className={style.parentItem}>
            <h3>
              react Hooks
            </h3>
            <ul className={style.childList}>
              <li className={style.childItem}>
                utilizing <strong>React hooks</strong> with Functional Component to get rid of redundancy and increasing the efficiency and clean code standard.
              </li>
              <li className={style.childItem}>
                  mostly used ones are <strong>useState</strong> and <strong>useEffect</strong>.
              </li>
            </ul>
          </li>
          <li className={style.parentItem}>
            <h3>TypeScript ( <span>Intermediate</span> )</h3>
            <ul className={style.childList}>
              <li className={style.childItem}>
                i know the basics of the <strong>Typescript</strong> and how to use it in the projects.
              </li>
            </ul>
          </li>
          <li className={style.parentItem}>
            <h3>
              working with API and Calling the server
            </h3>
            <ul className={style.childList}>
              <li className={style.childItem}>
                call the server with all the type of <strong>APIs</strong> to send request analyze response and handle all errors in the efficient way to display on the client-side.
              </li>
              <li className={style.childItem}>
                implementing the Authentication and authorization process, verify or redirect the user in some protected Routes.
              </li>
              <li className={style.childItem}>
                Good knowledge of working with query string and dynamic or static navigation (routing) of user between pages.
              </li>
              <li className={style.childItem}>
                making requests with <strong>Axios</strong> to Get, Post, Put or Delete the data.
              </li>
            </ul>
          </li>
          <li className={style.parentItem}>
            <h3>
              familiar with Redux and Redux Toolkit
            </h3>
            <ul className={style.childList}>
              <li className={style.childItem}>
                I can use <strong>Redux</strong> to get rid of props drilling by using the <strong>Redux Toolkit</strong> package and access to all states in each component by using the <strong>React-Redux</strong> library.
              </li>
            </ul>
          </li>
          <li className={style.parentItem}>
            <h3>
              familiar with Sass preprocessor
            </h3>
            <ul className={style.childList}>
              <li className={style.childItem}>
                i know how to use variables, mathematical operations, mixins, loops, functions, imports and other functionalities to write more powerful css with <strong>Sass</strong>.
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </>
  )
} 

export default About