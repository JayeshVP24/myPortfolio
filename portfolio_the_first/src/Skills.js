import React from "react"
import firestore from "./PNG/icons8-cloud-firestore-100.png"
import mysql from "./PNG/icons8-mysql-logo-100.png"
import firehost from "./PNG/icons8-hosting-100.png"
import domain from "./PNG/google-domain.png"
import git from "./PNG/icons8-github-96.png"
import django from "./PNG/icons8-django-96.png"
import DevicesIcon from "@material-ui/icons/Devices"
import ListAltIcon from "@material-ui/icons/ListAlt"
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent"
import BarChartIcon from "@material-ui/icons/BarChart"
import html5 from "./PNG/icons8-html-5-100.png"
import css3 from "./PNG/icons8-css3-100.png"
import js from "./PNG/icons8-javascript-100.png"
import react from "./PNG/icons8-react-native-100.png"
import firebase from "./PNG/icons8-firebase-100.png"

function Skills() {
  return (
    <>
      <div
        className="skills__title"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h1>SKILLS</h1>
      </div>
      <div className="skills__special">
        <div>
          <article>
            <figure>
              <DevicesIcon
                style={{
                  color: "#f9934c",
                  width: "60px",
                  height: "60px",
                }}
              />
            </figure>
            <h3>Responsive Build</h3>
            <p>Websites that look good on any device</p>
          </article>
        </div>
        <div>
          <article>
            <figure>
              <ListAltIcon
                style={{ color: "#f9934c", width: "60px", height: "60px" }}
              />
            </figure>
            <h3>Content Creation</h3>
            <p>No need to know coding to add your content</p>
          </article>
        </div>
        <div>
          <article>
            <figure>
              <WbIncandescentIcon
                style={{ color: "#f9934c", width: "60px", height: "60px" }}
              />
            </figure>
            <h3>Animations</h3>
            <p>Awesome animated effects that your website feel alive</p>
          </article>
        </div>
        <div>
          <article>
            <figure>
              <BarChartIcon
                style={{ color: "#f9934c", width: "60px", height: "60px" }}
              />
            </figure>
            <h3>Charts & Maps</h3>
            <p>
              Different kinds of Charts, Graphs and Maps to show your data more
              creatively
            </p>
          </article>
        </div>
      </div>
      <div className="skills__list">
        <article>
          <h1 data-aos="fade-left">Frontend</h1>
          <div data-aos="fade-right">
            <span>
              <img
                src={html5}
                style={{ width: "40px", height: "40px" }}
                alt=""
              />
              <h3>HTML5</h3>
            </span>
            <span>
              <img
                src={css3}
                style={{ width: "40px", height: "40px" }}
                alt=""
              />
              <h3>CSS3</h3>
            </span>
            <span>
              <img src={js} style={{ width: "40px", height: "40px" }} alt="" />
              <h3>JavaScript</h3>
            </span>
            <span>
              <img
                src={react}
                style={{ width: "40px", height: "40px" }}
                alt=""
              />
              <h3>ReactJS</h3>
            </span>
          </div>
        </article>
        <hr className="skills__hr" />
        <article>
          <h1 data-aos="fade-left">Backend</h1>
          <div data-aos="fade-right">
            <span>
              <img
                src={firebase}
                style={{ width: "40px", height: "40px" }}
                alt=""
              />
              <h3>FireBase</h3>
            </span>
            <span>
              <img
                src={django}
                style={{ width: "40px", height: "40px" }}
                alt=""
              />
              <h3>Django</h3>
            </span>
          </div>
        </article>
        <hr className="skills__hr" />
        <article>
          <h1 data-aos="fade-left">DataBase</h1>
          <div data-aos="fade-right">
            <span>
              <img
                src={firestore}
                style={{ width: "40px", height: "40px" }}
                alt=""
              />
              <h3>Cloud Firestore</h3>
            </span>
            <span>
              <img
                src={mysql}
                style={{ width: "40px", height: "40px" }}
                alt=""
              />
              <h3>MySQL</h3>
            </span>
          </div>
        </article>
        <hr className="skills__hr" />
        <article>
          <h1 data-aos="fade-left">Hosting And DNS</h1>
          <div data-aos="fade-right">
            <span>
              <img
                src={firehost}
                style={{ width: "40px", height: "40px" }}
                alt=""
              />
              <h3>Firebase Hosting</h3>
            </span>
            <span>
              <img
                src={domain}
                style={{ width: "40px", height: "40px" }}
                alt=""
              />
              <h3>Google Domain</h3>
            </span>
          </div>
        </article>
        <hr className="skills__hr" />
        <article>
          <h1 data-aos="fade-left">Softwares and Services</h1>
          <div data-aos="fade-right">
            <span>
              <img src={git} style={{ width: "40px", height: "40px" }} alt="" />
              <h3>GIT VCS</h3>
            </span>
          </div>
        </article>
        <hr className="skills__hr" />
        <article>
          <h1 data-aos="fade-left">Tech Stack</h1>
          <div data-aos="fade-right">
            <span>
              <img
                src={react}
                style={{ width: "40px", height: "40px" }}
                alt=""
              />
              <img
                src={firebase}
                style={{ width: "40px", height: "40px" }}
                alt=""
              />
              <h3>React - FireBase</h3>
            </span>
            <span>
              <img
                src={react}
                style={{ width: "40px", height: "40px" }}
                alt=""
              />
              <img
                src={django}
                style={{ width: "40px", height: "40px" }}
                alt=""
              />
              <h3>React - Django</h3>
            </span>
          </div>
        </article>
      </div>
    </>
  )
}

export default Skills
