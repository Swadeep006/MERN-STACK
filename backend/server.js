require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workroutes = require("./routes/workouts");

//express app
const app = express();

//middlewares
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//routes
app.use(workroutes);
app.use("/api/workouts", workroutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
