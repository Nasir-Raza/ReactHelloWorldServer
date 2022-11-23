console.log("Welcome to node js server file");

// const express = require('express') // old syntax not used anymore
import express from 'express' // new syntax now used

const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log("request ip: ", req.ip);
  res.send('Hello World! from Nasir Raza @ ' + new Date().toString());
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})