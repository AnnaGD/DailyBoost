const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//require routes here
const historyRouter = require("./routers/historyRouter");

//calling middleware to log network activity
// const { logger } = require('./middleware');

//using express()
const app = express();
const port = process.env.PORT || 5000;

//use json format and logger middleware
app.use(bodyParser.json());

//eventually I will have a logger here to keep track of network activity
// app.use(logger);

//app.use( all api routes) here
app.use("/api", historyRouter);

app.use(express.static(path.join(__dirname, "../build")));

app.get("*", function(req, res) {
  console.log("you got it bro XD");
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port} :D`);
});