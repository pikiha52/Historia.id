const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
var passport = require("passport");
var session = require("express-session");
const { appPort } = require('./config/constant')

require('./config/passport')(passport)

app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
    })
  );
  
  app.use(passport.initialize());
  app.use(passport.session());

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(routes);

const server = app.listen(appPort, () => console.log(`Api Running in Port ${appPort}`))

process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    console.log('Closing http server.');
    server.close(() => {
        console.log('Http server closed.');
        process.exit(0);
    });
});