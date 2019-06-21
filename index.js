const express = require ('express');
const app = express();
const mongoose = require('mongoose');



/**
 * Database setup
 */
mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true
  }
);

app.use(require('./routes.js'));
const user = require("./models/Post");

app.listen(80);

 app.listen(process.env.PORT || 4003, function(){
    console.log('rodouuuuuuuuuu');
});

