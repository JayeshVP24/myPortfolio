"use strict"
const functions = require("firebase-functions")
const express = require("express")
const nodemailer = require("nodemailer")
var mg = require("nodemailer-mailgun-transport")
const router = express.Router()
const { check, body, validationResult } = require("express-validator")
const { initDb } = require("../config/db")
const db = initDb.firestore()

const auth = {
  auth: {
    api_key: functions.config().mailgun.api_key,
    domain: functions.config().mailgun.domain,
  },
}

router.post(
  "/",
  [
    check("mail", "Please include a valid email").isEmail(),
    check("msg", "Message is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() })
      return
    }

    const nodemailerMailgun = nodemailer.createTransport(mg(auth))
    const mailOpts = {
      from: req.body.mail,
      replyTo: req.body.mail,
      to: "jayeshpotlabattini24@gmail.com",
      subject: `From my portfolio - ${req.body.subj}`,
      text: `Name: ${req.body.name} 
            Msg:  ${req.body.msg}`,
      html: `
            <h3>Name: ${req.body.name}</h3> 
            <h3>from mail: ${req.body.mail}</h3>
            <p>${req.body.msg}</p>
      `,
    }
    const mailCallback = (err, resp) => {
      if (err) res.status(400).json({ errors: err.array() })
      else {
        res.status(200).send({ isEmailSend: true })
      }
    }
    await nodemailerMailgun.sendMail(mailOpts, (err, resp) =>
      mailCallback(err, resp)
    )
    await db.collection("contacts").add(req.body)
  }
)

// const sendEmail = async (entry) => {

//   const mailOpts = {
//     from: entry.mail,
//     replyTo: entry.mail,
//     to: "jayeshpotlabattini24@gmail.com",
//     subject: `From my portfolio - ${entry.subj}`,
//     text: `Name: ${entry.name}
//           Msg:  ${entry.msg}`,
//     html: `
//           <h3>Name: ${entry.name}</h3>
//           <h3>from mail: ${entry.mail}</h3>
//           <p>${entry.msg}</p>
//     `,
//   }
//   await mailTransport.sendMail()
// }

module.exports = router
