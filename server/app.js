// Import all dependencies & middleware here
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import { 
    userController,
    linkController,
 } from './controller'

require('dotenv').config()

// Init an Express App.
const app = express();
const cors = require('cors')
// Use your dependencies here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

 
app.use(cors())

// use all controllers(APIs) here
app.use('/', userController)
app.use('/link', linkController)
// Start Server here
app.listen(8080, () => {
  console.log('Example app listening on port 8080!');
  mongoose.connect(process.env.DB_DEV).then(() => {
    console.log(`Connected to mongoDB at port 27017, ${process.env.DB_DEV}`);
  });
});