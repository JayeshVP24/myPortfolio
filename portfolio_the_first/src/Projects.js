import React, { useState, useEffect, lazy } from "react"
import LinkIcon from "@material-ui/icons/Link"
import VamazonClone from "./GIFs/amazon-clone.webm"
import VcovidTracker from "./GIFs/covid-tracker.webm"
import stripe from "./PNG/icons8-stripe-96.png"
import react from "./PNG/icons8-react-native-100.png"
import firebase from "./PNG/icons8-firebase-100.png"
// import Modal from "react-modal"
const Modal = lazy(() => import("react-modal"))

function Projects() {
  const [showModel, setShowModel] = useState(false)
  const [preview, setPreview] = useState("")

  useEffect(() => {
    const videos = document.getElementsByTagName("video")
    for (let i of videos) {
      i.play()
    }
  }, [])

  return (
    <>
      <div
        className="projects__title"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h1>PROJECTS</h1>
      </div>
      <div>
        <article data-aos="zoom-in">
          <figure>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://covid-19-tracker-76f58.web.app/"
            >
              {/* <img src={covidTracker} alt="Covid Tracker GIF" /> */}
              <video id="video" loop muted playsinline>
                <source src={VcovidTracker} type="video/webm" />
              </video>
              <span>
                <LinkIcon />
              </span>
            </a>
          </figure>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://covid-19-tracker-76f58.web.app/"
            >
              COVID-19 TRACKER
            </a>
            <p>
              A Responsive Covid-19 Tracker made using ReactJS and Disease.sh
              API and Hosted using Firebase Hosting
            </p>
            <span>
              <img src={react} alt="React" />
              <img src={firebase} alt="Firebase" />
            </span>
            <span>
              <button
                onClick={() => {
                  setShowModel(true)
                  setPreview("https://covid-19-tracker-76f58.web.app/")
                }}
              >
                Preview
              </button>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Mr-Jayesh/covid-19-tracker"
              >
                <button>Source Code</button>
              </a>
            </span>
          </div>
        </article>
        <article data-aos="zoom-in">
          <figure>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://clone-a4a8a.web.app/"
            >
              <video id="v2" loop muted playsinline>
                <source src={VamazonClone} type="video/webm" />
              </video>
              <span>
                <LinkIcon />
              </span>
            </a>
          </figure>

          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://clone-a4a8a.web.app/"
            >
              Amazon E-Commerce Clone
            </a>
            <p>
              Full-stack Amazon E-Commerce Clone app made using ReactJS, React
              Context API, FireBase and Stripe Payments for Payment Gateway.
            </p>
            <span>
              <img src={react} alt="React" />
              <img src={firebase} alt="Firebase" />
              <img src={stripe} alt="Firebase" />
            </span>
            <span>
              <button
                onClick={() => {
                  setShowModel(true)
                  setPreview("https://clone-a4a8a.web.app/")
                }}
              >
                Preview
              </button>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Mr-Jayesh/Amazon-Clone"
              >
                <button>Source Code</button>
              </a>
            </span>
          </div>
        </article>
      </div>
      <Modal
        isOpen={showModel}
        closeTimeoutMS={500}
        onRequestClose={() => setShowModel(false)}
      >
        <iframe
          src={preview}
          width="100%"
          height="96%"
          title="previewProject"
          frameborder="0"
        ></iframe>
        <span>
          <button
            onClick={() => {
              setShowModel(false)
              setPreview("")
            }}
          >
            Close
          </button>
        </span>
      </Modal>
    </>
  )
}

export default Projects
