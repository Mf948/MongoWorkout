const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3200;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const routes = require('./routes/routes.js');
routes(app)

const api = require("./routes/api.js")
api(app)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
