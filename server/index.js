const express = require('express');
const parser = require('body-parser')
const path = require('path');
const PORT = 80;

const router = require('./router');

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({
  extended: true
}));

app.use(express.static(path.resolve(__dirname, '../public')))

app.listen(PORT, ()=> {
  console.log('Express is now listening to', PORT)
})