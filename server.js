const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});


// Require employee routes
// const employeeRoutes = require('./src/routes/employee.routes')
const userRoutes = require('./src/routes/user.routes')
const notesRoutes = require('./src/routes/notes.routes')

// using as middleware
app.use('/api/v1/notes', notesRoutes)
app.use('/api/v1/auth', userRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});