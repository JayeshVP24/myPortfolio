"use strict"
const functions = require("firebase-functions")
const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors({ origin: true }))

// Init Middleware
app.use(express.json())

// Define routes
app.use("/api/contacts", require("./api/contacts"))

exports.app = functions.https.onRequest(app)
