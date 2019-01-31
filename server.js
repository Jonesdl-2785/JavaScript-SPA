require('dotenv').config();

// include express
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Set root folder to public
app.use(express.static('public'));

// Front-end access to node_modules folder
app.use('./scripts', express.static(`${__dirname}/node_modules/`));

// Listen for HTTP requests on  port 3000
app.listen(port, () => {
  console.log(`Listening on %d`, port);
});
