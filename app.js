require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

app.use(cookieParser());
app.use(express.json());

mongoose.connect(
  `mongodb+srv://admin:${process.env.ADMIN_PASS}@checkitoff-db-cj7ev.mongodb.net/test?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    console.log('db connected');
  }
);

// testing user schema and creation
// const User = require('./models/User');
// const userInput = {
//   username: 'testname',
//   password: '12345678',
//   role: 'admin'
// };
//
// const user = new User(userInput);
// user.save((err, document) => {
//   if (err) console.log(err);
//   console.log(document);
// });

app.listen(5000, () => {
  console.log('express started');
});
