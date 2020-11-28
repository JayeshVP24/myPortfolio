import React from "react"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import TwitterIcon from "@material-ui/icons/Twitter"
import GitHubIcon from "@material-ui/icons/GitHub"

function Footer() {
  return (
    <>
      <div>
        <a href="#home">
          <ExpandLessIcon />
        </a>
        <div>
          <a
            href="https://www.instagram.com/mr.j_here_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.facebook.com/jayeshpotlabattini/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://github.com/Mr-Jayesh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://twitter.com/jpotlabattini"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/jayesh-potlabattini-67ba8315b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
        <span>
          <p>© Copyright 2020 Jayesh Potlabattini</p>
          <p>Made with React and Firebase</p>
          <p>
            Icons by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://icons8.com"
            >
              Icons8
            </a>
          </p>
        </span>
      </div>
    </>
  )
}

export default Footer
