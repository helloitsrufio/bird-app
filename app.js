const express = require('express')
const path = require("path");
const app = express()
const axios = require('axios')

// #############################################################################
// Logs all request paths and method
app.use(function (req, res, next) {
  res.set('x-timestamp', Date.now())
  res.set('x-powered-by', 'cyclic.sh')
  // console.log(`[${new Date().toISOString()}] ${req.ip} ${req.method} ${req.path}`);
  next();
});

//#############################################################################
// This configures static hosting for files in /public that have the extensions
// listed in the array.
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
  index: ['index.html'],
  maxAge: '1m',
  redirect: false
}
app.use(express.static('public', options))

// #############################################################################
// Catch all handler for all other request.
// app.use('*', (req,res) => {
//   res.json({
//       at: new Date().toISOString(),
//       method: req.method,
//       hostname: req.hostname,
//       ip: req.ip,
//       query: req.query,
//       headers: req.headers,
//       cookies: req.cookies,
//       params: req.params
//     })
//     .end()
// })

app.get('/birb', async (req,res)=>{
  try {const response = await axios.get('https://xeno-canto.org/api/2/recordings?query=q:A+len:12')
        const data = response.data.recordings
        const dataArray = Object.values(data)
        const randomIndex = Math.floor(Math.random() * dataArray.length);
        const name = dataArray[randomIndex]?.en ?? ''
        const sound = dataArray[randomIndex].file
        res.send({sound, name})
      }
    catch (error) {
        (console.error(error));
      }});

module.exports = app
