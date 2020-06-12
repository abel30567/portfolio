const express = require('express');
const requests = require('request');

const app = express();
const port = process.env.PORT || 80;
const path = require('path');
const fs = require('fs');

app.get('/', (request, response) => {
  const filePath = path.resolve(__dirname, './build', 'index.html');
  // read in the index.html file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return console.log(err);
    }

    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, 'Claudio Atilano | Software Engineer');
    data = data.replace(/\$OG_DESCRIPTION/g, "I am a software engineer dedicated to creating products people love. Check out my work and contact me if you'd like to collaborate or work together!");
    data = data.replace(/\$OG_URL/g, 'https://claudioatilano.com/');
    result = data.replace(/\$OG_IMAGE/g, 'https://cdn-images-1.medium.com/max/1000/1*C6tMRj4ErUGk3vuISFDCaQ.png');
    response.send(result);
  });
});
// https://github.com/justswim/cra-metatag-demo/blob/master/server.js
app.get('/portfolio', (request, response) => {
//   console.log('Terms page visited!');
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, "Claudio's Portfolio");
    data = data.replace(/\$OG_DESCRIPTION/g, "These are the things I've built and worked my ass on. A couple of successes and some failures listed below. A lot of experience earned through these!");
    data = data.replace(/\$OG_URL/g, 'https://claudioatilano.com/portfolio');
    result = data.replace(/\$OG_IMAGE/g, 'https://cdn-images-1.medium.com/max/1000/1*C6tMRj4ErUGk3vuISFDCaQ.png');
    response.send(result);
  });
});

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', (request, response) => {
  const filePath = path.resolve(__dirname, './build', 'index.html');
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));