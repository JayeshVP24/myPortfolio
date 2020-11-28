import React, { useState, useEffect, lazy, Suspense } from "react"
import "./App.scss"
import Aos from "aos"
import "aos/dist/aos.css"
import MenuRoundedIcon from "@material-ui/icons/MenuRounded"
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded"
// import ClickAwayListener from "@material-ui/core/ClickAwayListener"
const ClickAwayListener = lazy(() =>
  import("@material-ui/core/ClickAwayListener")
)

// import Home from "./Home"
const Home = lazy(() => import("./Home"))
// import About from "./About"
const About = lazy(() => import("./About"))
// import Skills from "./Skills"
const Skills = lazy(() => import("./Skills"))
// import Projects from "./Projects"
const Projects = lazy(() => import("./Projects"))
// import Contact from "./Contact"
const Contact = lazy(() => import("./Contact"))
// import Footer from "./Footer"
const Footer = lazy(() => import("./Footer"))

function App() {
  var isInViewport = function (elem) {
    var distance = elem.getBoundingClientRect()
    var res = distance.top >= 0
    console.log(res)
    return res
  }

  const [active, setActive] = useState("home")
  const [navActive, setNavActive] = useState("")
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    Aos.init({ duration: 1000 })
  })

  useEffect(() => {
    const handleScrollChange = () => {
      console.log(window.pageYOffset)
      var x2 = window.pageYOffset
      console.log(active)
      if (x2 > 200) {
        setNavActive("solid")
      }
      if (x2 < 200) {
        setNavActive("")
      }

      console.log(isInViewport(document.querySelector(".about")))
      if (isInViewport(document.querySelector("#home"))) {
        setActive("home")
        console.log("in home")
      } else if (isInViewport(document.querySelector(".about"))) {
        console.log("in about")
        setActive("about")
      }
      // console.log(document.querySelector("#skills").getBoundingClientRect())
      else if (isInViewport(document.querySelector("#skills"))) {
        setActive("skills")
        console.log("in skills")
      } else if (isInViewport(document.querySelector("#projects"))) {
        setActive("projects")
        console.log("in projects")
      } else if (isInViewport(document.querySelector("#contacts"))) {
        setActive("contacts")
        console.log("in contacts")
      }
    }
    window.addEventListener("scroll", handleScrollChange)

    handleScrollChange()
    return () => window.removeEventListener("scroll", handleScrollChange)
  }, [active])

  return (
    <main className="App">
      {/* <header data-aos="fade-down"> */}
      {windowSize.width >= 700 && (
        <nav id="desktop" className={navActive}>
          <div>
            <a id={active === "home" ? "active" : ""} href="#home">
              HOME
            </a>
            <a id={active === "about" ? "active" : ""} href="#about">
              ABOUT
            </a>
            <a id={active === "skills" ? "active" : ""} href="#skills">
              SKILLS
            </a>
            <a id={active === "projects" ? "active" : ""} href="#projects">
              PROJECTS
            </a>
            <a id={active === "contacts" ? "active" : ""} href="#contacts">
              CONTACT
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Mr-Jayesh"
            >
              GITHUB
            </a>
          </div>
        </nav>
      )}
      {windowSize.width < 700 && (
        <ClickAwayListener onClickAway={() => setNavOpen(false)}>
          <nav
            id="mobile"
            className={navOpen ? "open" : "close"}
            onClick={() => setNavOpen(!navOpen)}
          >
            {
              <span onClick={() => setNavOpen(!navOpen)}>
                {navOpen ? <MenuOpenRoundedIcon /> : <MenuRoundedIcon />}
              </span>
            }
            <div>
              <a
                id={active === "home" ? "active" : ""}
                onClick={() => setNavOpen(false)}
                href="#home"
              >
                HOME
              </a>
              {/* <CSSTransition
              in={navOpen}
              timeout={500}
              classNames="mobNav-"
              mountOnEnter
            > */}
              <div id={navOpen ? "open" : "close"}>
                <a
                  id={active === "about" ? "active" : ""}
                  onClick={() => setNavOpen(false)}
                  href="#about"
                >
                  ABOUT
                </a>
                <a
                  id={active === "skills" ? "active" : ""}
                  onClick={() => setNavOpen(false)}
                  href="#skills"
                >
                  SKILLS
                </a>
                <a
                  id={active === "projects" ? "active" : ""}
                  onClick={() => setNavOpen(false)}
                  href="#projects"
                >
                  PROJECTS
                </a>
                <a
                  id={active === "projects" ? "active" : ""}
                  onClick={() => setNavOpen(false)}
                  href="#contacts"
                >
                  CONTACT
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Mr-Jayesh"
                  onClick={() => setNavOpen(false)}
                >
                  GITHUB
                </a>
              </div>
              {/* </CSSTransition> */}
            </div>
          </nav>
        </ClickAwayListener>
      )}
      {/* </header> */}
      <section id="home" className="home">
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      </section>
      <section id="about" className="about">
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
      </section>
      <section id="skills" className="skills trans ">
        <Suspense fallback={<div>Loading...</div>}>
          <Skills />
        </Suspense>
      </section>
      <section id="projects" className="projects">
        <Suspense fallback={<div>Loading...</div>}>
          <Projects />
        </Suspense>
      </section>
      <section id="contacts" className="contact">
        <Suspense fallback={<div>Loading...</div>}>
          <Contact />
        </Suspense>
      </section>
      <section id="footer" className="footer">
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
      </section>
    </main>
  )
}

export default App
