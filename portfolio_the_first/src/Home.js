import React from "react"
import bg from "./bg.jpg"
// import "./App.scss"

function Home() {
  return (
    <>
      <figure>
        <img src={bg} alt="wuhu" />
      </figure>
      <article>
        <h1 data-aos="zoom-in">
          Hey, I'm <span> Jayesh ;)</span>
        </h1>
        <p data-aos="fade-up">Mumbai based Full Stack Web Developer.</p>
      </article>
    </>
  )
}

export default Home
