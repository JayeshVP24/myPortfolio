import React, { useState } from "react"
import { lazy } from "react"
const TextField = lazy(() => import("@material-ui/core/TextField"))

function Contact() {
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [subj, setSubj] = useState("")
  const [msg, setMsg] = useState("")
  const [submitStatus, setSubmitStatus] = useState("Submit")
  const [submitDisabled, setSubmitDisabled] = useState(false)
  const [smallMsg, setSmallMsg] = useState(false)

  var time = new Date()
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSmallMsg(true)
    setSubmitDisabled(true)
    setSubmitStatus("Please wait!")
    console.log({ name, mail, subj, msg })
    const data = { name, mail, subj, msg, time: time.getTime() }
    await fetch(
      "https://us-central1-jayesh-potlabattini.cloudfunctions.net/app/api/contacts",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.errors) {
          console.log(res.errors)
          setSubmitStatus("Fill All fields, Please!")
          setTimeout(() => {
            setSubmitStatus("Submit")
            setSubmitDisabled(false)
          }, 2000)
        }
        if (res.isEmailSend) {
          setSubmitStatus("Message Sent!")
          setTimeout(() => {
            setSubmitStatus("Submit")
            setSubmitDisabled(false)
            setSmallMsg(false)
            setName("")
            setMail("")
            setSubj("")
            setMsg("")
          }, 2000)
        }
        return res
      })
      .catch((errors) => {
        setSubmitStatus("Error, message not sent! Try again")
        setTimeout(() => {
          setSubmitStatus("Submit")
          setSubmitDisabled(false)
        }, 2000)
        console.log(errors)
        return
      })
  }

  return (
    <>
      <div>
        <h1 data-aos="zoom-in">Contact Me</h1>
        <div>
          <form data-aos="fade-right" onSubmit={(e) => handleSubmit(e)}>
            <TextField
              id="filled-multiline-static"
              label="Name"
              variant="filled"
              value={name}
              // type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="filled-basic"
              required
              label="Email"
              variant="filled"
              value={mail}
              // type="email"
              onChange={(e) => setMail(e.target.value)}
            />
            <TextField
              id="filled-multiline-static"
              label="Subject"
              variant="filled"
              // type="text"
              value={subj}
              required
              onChange={(e) => setSubj(e.target.value)}
            />
            <TextField
              id="filled-multiline-static"
              label="Message"
              required
              variant="filled"
              multiline
              rows={4}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />

            <button disabled={submitDisabled} type="submit">
              {submitStatus}
            </button>
            <small style={{ display: smallMsg ? "block" : "none" }}>
              Please wait to send another message
            </small>
          </form>
          <div data-aos="fade-left">
            <p>Jayesh Potlabattini</p>
            <p>Worli</p>
            <p>Mumbai, Maharashtra - 400030</p>
            <p>jayeshpotlabattini@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
