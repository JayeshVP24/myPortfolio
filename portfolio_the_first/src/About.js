import React from "react"
import dp from "./dp1.jpg"

function About() {
  return (
    <>
      <figure data-aos="fade-right" data-aos-delay="100">
        <img src={dp} alt="profile pic" />
      </figure>
      <div>
        <article data-aos="fade-left" data-aos-delay="100">
          <h1>About Me</h1>
          <p>
            I am a Full-Stack Web Developer who loves the flexibility of ReactJS
            and the power of Firebase. The world of design has always fascinated
            me, which led me to my love of web development. Ever since I wrote
            my first line of code, I've been working tirelessly to learn to be
            the best web developer and provide the best service to my clients.
          </p>
        </article>
        <article data-aos="fade-left" data-aos-delay="200">
          <h1>Contact Details</h1>
          <p>Jayesh Potlabattini</p>
          <p>Worli</p>
          <p>Mumbai, Maharashtra - 400030</p>
          <p>jayeshpotlabattini@gmail.com</p>
        </article>
      </div>
    </>
  )
}

export default About
