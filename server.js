var express = require('express');
var path = require('path');

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './app/public')));

// Sets up the body parser app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});
