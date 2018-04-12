const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./server/routes');
const config = require('./config');
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static('client/build'));
// Add routes, both API and view
app.use(routes);

//DATABASE:
// connect to the database and load models
require('./server/models').connect(
  process.env.MONGODB_URI || 'mongodb://localhost/homechecker',
  {
    useMongoClient: true
  }
);
// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/homechecker', {
//   useMongoClient: true
// });
// DeprecationWarning: `open()` is deprecated in mongoose >= 4.11.0, use `openUri()` instead, or set the `useMongoClient` option if using `connect()` or `createConnection()`. See http://mongoosejs.com/docs/4.x/docs/connections.html#use-mongo-client
// Set up promises with mongoose
mongoose.Promise = global.Promise;

// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));

//PASSPORT AND AUTH M/W
// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);

// routes
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// Start the API server on 3001
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
